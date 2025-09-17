import { clerkMiddleware, getAuth, requireAuth } from "@clerk/express";
import { PrismaClient } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";


const app = express();
const prisma = new PrismaClient();

app.use(cors({
    origin: "http://localhost:8080", // your frontend URL
    credentials: true // allow cookies/auth headers
}));
app.use(express.json());

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

app.use(clerkMiddleware());


app.post("/generate", requireAuth(), async (req, res) => {
    const { prompt, style } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        const { userId } = getAuth(req)

        // Call Freepik API
        const response = await fetch("https://api.freepik.com/v1/ai/text-to-image", {
            method: "POST",
            headers: {
                "x-freepik-api-key": process.env.FREEPIK_API_KEY || "",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "guidance_scale": 1,
                "image": {
                    "size": "square_1_1"
                },
                "num_images": 1,
                "prompt": prompt,
                "styling": {
                    "style": style || "cartoon"
                }
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Freepik API Error:", errorData);
            return res.status(500).json({ error: "Failed to generate image" });
        }

        const data = await response.json();
        const image = data.data[0].base64;


        res.json({ image: `data:image/png;base64,${image}` });

        // Upload to Cloudinary
        const imageUrl = await uploadBase64Image(image);

        //update user history in db
        await prisma.image.create({
            data: {
                prompt,
                style: style || "cartoon",
                url: imageUrl,
                userId: userId || "no-user"
            }
        })

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Image generation failed" });
    }
});

app.get("/images", async (req, res) => {
    try {

        const images = await prisma.image.findMany({
            orderBy: { createdAt: "desc" },
        });

        res.json(images);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch images" });
    }
});

async function uploadBase64Image(base64String: string): Promise<string> {
    try {
        const result = await cloudinary.uploader.upload(
            `data:image/png;base64,${base64String}`,
            {
                folder: "ml-results", // optional: organize into a folder
            }
        );
        return result.secure_url; // permanent Cloudinary URL
    } catch (err) {
        console.error("Cloudinary upload error:", err);
        throw err;
    }
}

app.listen(3000, () => console.log(`🚀 Backend running on http://localhost:3000`));