import mq1 from "@/assets/mq1.webp";
import mq2 from "@/assets/mq2.webp";
import mq3 from "@/assets/mq3.webp";
import mq4 from "@/assets/mq4.webp";
import mq5 from "@/assets/mq5.webp";
import mq6 from "@/assets/mq6.webp";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const images = [mq1, mq2, mq3, mq4, mq5, mq6];
const prompts = [
    "A futuristic cityscape at sunset",
    "Surreal dreamlike forest",
    "Portrait of a cyberpunk warrior",
    "Abstract geometric art with neon",
    "Fantasy castle floating in the sky",
    "Retro 80s synthwave beach",
];

const InfiniteCards = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const controls = useAnimation();
    const controls2 = useAnimation();

    useEffect(() => {
        controls2.start({
            x: ["-100%", "0%"],
            transition: { ease: "linear", duration: 30, repeat: Infinity }
        })
    })

    // Duplicate images & prompts for seamless loop
    const duplicatedImages = [...images, ...images];
    const duplicatedPrompts = [...prompts, ...prompts];

    // Start animation on mount
    useEffect(() => {
        controls.start({
            x: ["0%", "-100%"],
            transition: { ease: "linear", duration: 40, repeat: Infinity },
        });
    }, [controls]);

    const handleMouseEnter = (idx) => {
        setHoveredIndex(idx);
        controls.stop(); // pause scroll
    };

    const handleMouseEnter2 = (idx) => {
        setHoveredIndex(idx);
        controls2.stop(); // pause scroll
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        controls.start({
            x: ["0%", "-100%"],
            transition: { ease: "linear", duration: 40, repeat: Infinity },
        });
    };

    const handleMouseLeave2 = () => {
        setHoveredIndex(null);
        controls2.start({
            x: ["0%", "-100%"],
            transition: { ease: "linear", duration: 40, repeat: Infinity },
        });
    };

    return (
        <div className="bg-black p-4">
            <div className="container mx-auto">
                <div className="text-center space-y-8 mb-8">
                    <h2 className="text-4xl font-bold">
                        Limitless Creativity with{" "}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            No Style Constraints
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground w-11/12 mx-auto">
                        Creating compelling AI-generated images unleashes creativity by
                        removing traditional restrictions. Without worrying about technical
                        drawing skills or being limited by inspiration solely from
                        references, artists can now dive deep into their imagination.
                    </p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden py-6">
                <motion.div className="flex" animate={controls}>
                    {duplicatedImages.map((src, idx) => {


                        return (
                            <motion.div
                                key={idx}
                                className="relative flex-shrink-0 px-2"
                                style={{ width: `${130 / images.length}%` }}
                                onMouseEnter={() => handleMouseEnter(idx)}
                                onMouseLeave={handleMouseLeave}

                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img
                                    src={src}
                                    alt={`slide-${idx}`}
                                    className="w-full h-full shadow-md rounded-xl pointer-events-auto"
                                />

                                {/* Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute bottom-0 left-0 right-0 p-4  text-white rounded-lg bg-black/30 backdrop-blur-sm border border-white/20"
                                >
                                    <p className="text-white text-sm md:text-base">
                                        {duplicatedPrompts[idx]}
                                    </p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
                <motion.div className="flex" animate={controls2}>
                    {duplicatedImages.map((src, idx) => {


                        return (
                            <motion.div
                                key={idx}
                                className="relative flex-shrink-0 px-2"
                                style={{ width: `${130 / images.length}%` }}
                                onMouseEnter={() => handleMouseEnter2(idx)}
                                onMouseLeave={handleMouseLeave2}

                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img
                                    src={src}
                                    alt={`slide-${idx}`}
                                    className="w-full h-full shadow-md rounded-xl pointer-events-auto"
                                />

                                {/* Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute bottom-0 left-0 right-0 p-4  text-white rounded-lg bg-black/30 backdrop-blur-sm border border-white/20"
                                >
                                    <p className="text-white text-sm md:text-base">
                                        {duplicatedPrompts[idx]}
                                    </p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default InfiniteCards;
