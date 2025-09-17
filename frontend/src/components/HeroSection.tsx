import painting from "@/assets/painting.webp";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";
import { useState } from "react";
import Loader from "./Loader";

const HeroSection = () => {
    // Random prompts list
    const prompts = [
        "A futuristic cityscape under a neon sunset with flying cars",
        "A cozy cabin in the snowy mountains, smoke rising from the chimney",
        "A cyberpunk cat wearing sunglasses, sitting on a neon-lit street",
        "A surreal floating island with waterfalls flowing into the sky",
        "A renaissance-style painting of an astronaut holding a flower"
    ];

    const [prompt, setPrompt] = useState(prompts[0]);
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const generateImage = async () => {
        if (!prompt) return;
        setLoading(true);
        setImage(null);

        try {
            const response = await fetch("http://localhost:5000/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();
            setImage(data.image);
        } catch (err) {
            console.error(err);
            alert("Failed to generate image!");
        } finally {
            setLoading(false);
        }
    };

    // Function to shuffle random prompt
    const handleShuffle = () => {
        const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
        setPrompt(randomPrompt);
    };

    return (
        <section className="relative py-20 px-4">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold leading-tight">
                                Free Text to Image{" "}
                                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                    AI Generator
                                </span>
                            </h1>
                            <p className="text-md text-muted-foreground leading-relaxed">
                                PicGen's free text-to-image AI offers rapid, strong, multifarious image generating capability.
                                In less than ten seconds, it can easily transform your descriptions into magnificent artificial
                                intelligence artwork. Furthermore, our fine-tuned AI models provide the chance to use your
                                fantastic artwork for any project.
                            </p>
                        </div>

                        {/* Input Section */}
                        <div className="relative w-full">
                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="what do you want to create?"
                                className="w-full h-44 px-6 pb-14 pt-4 text-md font-normal rounded-xl border  border-white/10 bg-black/10 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-transparent"
                            />

                            {/* Buttons inside input box (bottom) */}
                            <div className="absolute bottom-2 right-2 flex gap-2 mb-2 mr-4">
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={handleShuffle}
                                    className="h-10 px-4 flex items-center justify-center hover:bg-primary/10"
                                >
                                    <Shuffle className="w-4 h-4 mr-1" />
                                </Button>

                                <Button
                                    className="btn-primary h-10 px-6 font-semibold"
                                    onClick={generateImage}
                                    disabled={loading}
                                >
                                    {loading ? "Generating..." : "Generate"}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Image showcase */}
                    <div className=" p-0 overflow-visible bg-transparent shadow-none max-w-md mx-auto">
                        {loading && (
                            <Loader></Loader>
                        )}
                        {/* Display generated image or default painting */}
                        {!loading && (
                            <img
                                src={image ? image : painting}
                                alt="AI Generated Artwork Showcase"
                                className="w-full h-auto"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
