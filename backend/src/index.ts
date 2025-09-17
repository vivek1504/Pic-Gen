import { clerkMiddleware, getAuth, requireAuth } from "@clerk/express";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.post("/generate", requireAuth(), async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        //ts-ignore
        const { userId } = getAuth(req)

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Image generation failed" });
    }
});

app.listen(5000, () => console.log("🚀 Backend running on http://localhost:5000"));
