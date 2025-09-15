import d1 from "@/assets/d1.webp";
import d2 from "@/assets/d2.jpg";
import d3 from "@/assets/d3.webp";
import d4 from "@/assets/d4.jpg";
import d5 from "@/assets/d5.jpg";
import d6 from "@/assets/d6.jpg";
import up1 from "@/assets/up1.jpg";
import up2 from "@/assets/up2.jpg";
import up3 from "@/assets/up3.jpg";
import up4 from "@/assets/up4.jpg";
import up5 from "@/assets/up5.jpg";
import up6 from "@/assets/up6.jpg";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = [up1, up2, up3, up4, up5, up6];
const downImages = [d1, d2, d3, d4, d5, d6];
const prompts = [
    "A Space exprlorer from 90's movie poster",
    "Surreal dreamlike forest",
    "Portrait of a cyberpunk warrior",
    "Abstract geometric art with neon",
    "Fantasy castle floating in the sky",
    "Retro 80s synthwave beach",
];

const prompts2 = [
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
    const containerRef = useRef<HTMLDivElement>(null);

    // Duplicate for seamless loop
    const duplicatedImages = [...images, ...images];
    const duplicatedDownImages = [...downImages, ...downImages];
    const duplicatedPrompts = [...prompts, ...prompts];
    const duplicatedPrompts2 = [...prompts2, ...prompts2];

    // Start first row (slower left scroll)
    useEffect(() => {
        controls.start({
            x: ["0%", "-100%"],
            transition: { ease: "linear", duration: 45, repeat: Infinity },
        });
    }, [controls]);

    // Start second row (faster right scroll)
    useEffect(() => {
        controls2.start({
            x: ["-100%", "0%"],
            transition: { ease: "linear", duration: 30, repeat: Infinity },
        });
    }, [controls2]);

    const handleMouseEnter = (idx, ctrl) => {
        setHoveredIndex(idx);
        ctrl.stop(); // pause scroll
    };

    const handleMouseLeave = (ctrl, reverse = false, speed = 40) => {
        setHoveredIndex(null);
        ctrl.start({
            x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
            transition: { ease: "linear", duration: speed, repeat: Infinity },
        });
    };

    return (
        <div className="p-6 bg-gradient-to-b from-black/80 to-black/50 relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px] opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>

            {/* Floating orbs */}
            <div className="absolute top-20 left-[15%] w-60 h-60 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center space-y-8 mb-12">
                    <motion.h2
                        className="text-5xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Limitless Creativity with{" "}
                        <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
                            No Style Constraints
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-xl text-muted-foreground w-11/12 md:w-4/5 lg:w-3/4 mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Creating compelling AI-generated images unleashes creativity by
                        removing traditional restrictions. Without worrying about technical
                        drawing skills or being limited by inspiration solely from
                        references, artists can now dive deep into their imagination.
                    </motion.p>
                </div>
            </div>

            <div ref={containerRef} className="relative w-full overflow-hidden py-8 space-y-12">
                {/* First row */}
                <motion.div className="flex" animate={controls}>
                    {duplicatedImages.map((src, idx) => (
                        <motion.div
                            key={`row1-${idx}`}
                            className="relative flex-shrink-0 px-4"
                            style={{ width: `${120 / images.length}%` }} // bigger cards
                            onMouseEnter={() => handleMouseEnter(idx, controls)}
                            onMouseLeave={() => handleMouseLeave(controls, false, 45)}
                            whileHover={{
                                y: -10,
                                transition: { type: "spring", stiffness: 400, damping: 17 }
                            }}
                        >
                            <div className="group relative overflow-hidden rounded-xl h-full">
                                {/* Card glow effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/60 to-accent/60 blur-xl opacity-40"></div>
                                </div>

                                {/* Card content with gradient border */}
                                <div className="relative h-full overflow-hidden rounded-xl p-[1px] bg-gradient-to-br from-primary/50 via-transparent to-accent/50">
                                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-xl"></div>
                                    <img
                                        src={src}
                                        alt={`slide-${idx}`}
                                        className="relative w-full h-full object-cover rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:scale-105 transition-all duration-500"
                                    />
                                </div>

                                {/* Overlay */}
                                <AnimatePresence>
                                    {hoveredIndex === idx && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ type: "spring", damping: 25, stiffness: 500 }}
                                            className="absolute bottom-0 left-0 right-0 p-5 text-white rounded-b-xl bg-gradient-to-t from-black/80 to-black/10 backdrop-blur-md border-t border-white/10"
                                        >
                                            <p className="text-white text-sm md:text-base font-medium">
                                                {duplicatedPrompts2[idx]}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Second row */}
                <motion.div className="flex" animate={controls2}>
                    {duplicatedDownImages.map((src, idx) => (
                        <motion.div
                            key={`row2-${idx}`}
                            className="relative flex-shrink-0 px-4"
                            style={{ width: `${120 / images.length}%` }} // bigger cards
                            onMouseEnter={() => handleMouseEnter(idx, controls2)}
                            onMouseLeave={() => handleMouseLeave(controls2, true, 30)}
                            whileHover={{
                                y: -10,
                                transition: { type: "spring", stiffness: 400, damping: 17 }
                            }}
                        >
                            <div className="group relative overflow-hidden rounded-xl h-full">
                                {/* Card glow effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/60 to-primary/60 blur-xl opacity-40"></div>
                                </div>

                                {/* Card content with gradient border */}
                                <div className="relative h-full overflow-hidden rounded-xl p-[1px] bg-gradient-to-br from-accent/50 via-transparent to-primary/50">
                                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-xl"></div>
                                    <img
                                        src={src}
                                        alt={`slide-${idx}`}
                                        className="relative w-full h-full object-cover rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:scale-105 transition-all duration-500"
                                    />
                                </div>

                                {/* Overlay */}
                                <AnimatePresence>
                                    {hoveredIndex === idx && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ type: "spring", damping: 25, stiffness: 500 }}
                                            className="absolute bottom-0 left-0 right-0 p-5 text-white rounded-b-xl bg-gradient-to-t from-black/80 to-black/10 backdrop-blur-md border-t border-white/10"
                                        >
                                            <p className="text-white text-sm md:text-base font-medium">
                                                {duplicatedPrompts[idx]}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Decorative element */}
            </div>


        </div>
    );
};

export default InfiniteCards;
