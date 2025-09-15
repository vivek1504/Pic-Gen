import { PenTool, Settings, Sparkles } from "lucide-react";

const InfoCard = () => {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto space-y-24">
                <div className="text-center space-y-12">
                    <h2 className="text-4xl font-bold">
                        How to Generate Artworks from Text to Image
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="ai-card space-y-6  p-6 rounded-2xl shadow-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 hover:to-white/5 transition-all duration-300 hover:scale-[1.02] text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-xl gradient-primary glow-primary">
                                <PenTool className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">STEP 1</h3>
                                <h4 className="text-lg font-semibold mb-4">Write a prompt</h4>
                                <p className="text-muted-foreground">
                                    Type a clear prompt. Be as specific as possible with your words to create AI images with optimal effects.
                                </p>
                            </div>
                        </div>

                        <div className="ai-card space-y-6  p-6 rounded-2xl shadow-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 hover:to-white/5 transition-all duration-300 hover:scale-[1.02] text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-xl gradient-primary glow-primary">
                                <Settings className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">STEP 2</h3>
                                <h4 className="text-lg font-semibold mb-4">Adjust general settings</h4>
                                <p className="text-muted-foreground">
                                    Our flexible settings enable you to personalize artwork. Choose your preferred model, aspect ratio, generating mode, and image count.
                                </p>
                            </div>
                        </div>

                        <div className="ai-card space-y-6  p-6 rounded-2xl shadow-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 hover:to-white/5 transition-all duration-300 hover:scale-[1.02] text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-xl gradient-primary glow-primary">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">STEP 3</h3>
                                <h4 className="text-lg font-semibold mb-4">Generate</h4>
                                <p className="text-muted-foreground">
                                    Click "Generate" to see your text become amazing visual art. Instantly create a unique image to use, share, or refine.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InfoCard;