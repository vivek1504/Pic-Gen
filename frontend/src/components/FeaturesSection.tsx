import anime from "@/assets/anime_girl.webp";
import cartoon from "@/assets/cartoon.webp";

const FeaturesSection = () => {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto space-y-24">
                {/* Feature 1 - Create Images Effortlessly */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="ai-card p-0 overflow-hidden max-w-md">
                        <img
                            src={cartoon}
                            alt="AI Generated Character"
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">
                            Create Images from Text Prompts Effortlessly
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            PicLumen's advanced text-to-picture artificial intelligence uses cutting-edge
                            machine learning techniques to create amazing visuals straight from text
                            prompts. Even if you have no background in design or art since as long as you
                            can type, our AI picture generator will satisfy you. Whether you need a lifelike
                            portrait, an imaginative anime scene, or a surreal landscape, PicLumen can
                            create with amazing clarity.
                        </p>
                    </div>
                </div>


                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold">
                            Limitless creativity with AI
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Creating AI images from text lets you create anything in any style without restriction. Whether your ambition is to design Disney-style characters, Pixar-inspired 3D art, lifelike graphics like high-end film, vivid animation inspired by Studio Ghibli, or abstract masterpieces like those from Picasso, our strong AI models can help you realize your ideas in any form
                        </p>
                    </div>
                    <div className="ai-card p-0 overflow-hidden max-w-md">
                        <img
                            src={anime}
                            alt="AI Generated Character"
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;