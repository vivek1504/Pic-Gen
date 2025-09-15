import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
    Brush,
    CheckCircle,
    Clock,
    Cpu,
    Crown,
    Download,
    Image,
    Infinity,
    Layers,
    Palette,
    Share2,
    Shield,
    Sparkles,
    Target,
    Wand2,
    Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Features = () => {
    const navigate = useNavigate();
    const mainFeatures = [
        {
            icon: Zap,
            title: "Lightning Fast Generation",
            description: "Generate stunning AI artwork in under 10 seconds with our optimized neural networks.",
            color: "text-yellow-400",
            bgGradient: "from-yellow-400/10 to-orange-500/10"
        },
        {
            icon: Palette,
            title: "Multiple Art Styles",
            description: "Choose from realistic, anime, cartoon, digital art, oil painting, and many more artistic styles.",
            color: "text-purple-400",
            bgGradient: "from-purple-400/10 to-pink-500/10"
        },
        {
            icon: Image,
            title: "High Resolution Output",
            description: "Generate images up to 4K resolution perfect for professional use and printing.",
            color: "text-blue-400",
            bgGradient: "from-blue-400/10 to-cyan-500/10"
        },
        {
            icon: Wand2,
            title: "Advanced Prompt Engineering",
            description: "Intelligent prompt suggestions and auto-completion help you create the perfect description.",
            color: "text-green-400",
            bgGradient: "from-green-400/10 to-emerald-500/10"
        },
        {
            icon: Download,
            title: "Multiple Export Formats",
            description: "Download your creations in PNG, JPG, WebP, or SVG formats for any use case.",
            color: "text-indigo-400",
            bgGradient: "from-indigo-400/10 to-purple-500/10"
        },
        {
            icon: Share2,
            title: "Easy Sharing",
            description: "Share your AI masterpieces directly to social media or generate shareable links.",
            color: "text-pink-400",
            bgGradient: "from-pink-400/10 to-rose-500/10"
        }
    ];

    const additionalFeatures = [
        {
            icon: Crown,
            title: "Premium Models",
            description: "Access to latest AI models including DALL-E 3, Midjourney, and Stable Diffusion XL"
        },
        {
            icon: Clock,
            title: "Batch Processing",
            description: "Generate multiple variations of your prompt simultaneously"
        },
        {
            icon: Shield,
            title: "Content Safety",
            description: "Built-in content filters ensure safe and appropriate image generation"
        },
        {
            icon: Layers,
            title: "Style Mixing",
            description: "Combine multiple artistic styles for unique creative results"
        },
        {
            icon: Target,
            title: "Precision Controls",
            description: "Fine-tune aspects like lighting, composition, and color schemes"
        },
        {
            icon: Brush,
            title: "Inpainting & Outpainting",
            description: "Edit specific parts of images or extend them beyond original boundaries"
        },
        {
            icon: Cpu,
            title: "API Access",
            description: "Integrate PicGen into your applications with our developer-friendly API"
        },
        {
            icon: Infinity,
            title: "Unlimited Variations",
            description: "Generate endless variations of your favorite prompts and concepts"
        }
    ];

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-20" />

                <div className="relative container mx-auto text-center space-y-8">
                    <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-sm font-medium text-primary">Powered by Advanced AI</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Powerful Features for{" "}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Creative Excellence
                        </span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Discover the cutting-edge capabilities that make PicGen the ultimate AI image generation platform.
                        From lightning-fast processing to professional-grade outputs, we've got everything you need.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button className="btn-primary text-lg px-8 py-3" onClick={() => navigate("/")}>
                            Start Creating Now
                        </Button>
                        <Button variant="outline" className="text-lg px-8 py-3 border-primary/20 hover:bg-primary/5" onClick={() => navigate("/gallery")}>
                            View Gallery
                        </Button>
                    </div>
                </div>
            </section>

            {/* Main Features Grid */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Core Features
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Everything you need to create stunning AI-generated artwork
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mainFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 hover:to-white/5 transition-all duration-300 hover:scale-[1.02] hover:border-primary/20"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                                    <div className="relative z-10 space-y-4">
                                        <div className={`inline-flex p-3 rounded-xl bg-black/20 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-6 h-6" />
                                        </div>

                                        <h3 className="text-xl font-semibold text-foreground">
                                            {feature.title}
                                        </h3>

                                        <p className="text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Additional Features */}
            <section className="py-20 px-4 bg-gradient-to-br from-black/20 to-black/40">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Advanced Capabilities
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Professional-grade tools for serious creators and developers
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {additionalFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="group p-6 rounded-xl border border-white/10 bg-black/20 hover:bg-black/30 transition-all duration-300 hover:border-primary/20"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                                            <Icon className="w-5 h-5" />
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                                {feature.title}
                                            </h3>

                                            <p className="text-sm text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Feature Comparison */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Choose PicGen?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            See how we compare to other AI image generators
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-center">Other Platforms</h3>
                                <div className="space-y-3">
                                    {[
                                        "Limited daily generations",
                                        "Basic resolution only",
                                        "Few style options",
                                        "No API access",
                                        "Watermarked images"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                                            <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="md:order-last space-y-4">
                                <h3 className="text-xl font-semibold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                    PicGen
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        "Unlimited generations",
                                        "Up to 4K resolution",
                                        "50+ art styles",
                                        "Full API access",
                                        "No watermarks"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-foreground font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="md:order-2 flex items-center justify-center">
                                <div className="text-center space-y-4">
                                    <div className="text-6xl">⚡</div>
                                    <p className="text-lg font-semibold text-primary">VS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
                <div className="container mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Ready to Create Amazing Art?
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of creators who are already using PicGen to bring their ideas to life
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button className="btn-primary text-lg px-8 py-3">
                            Get Started Free
                        </Button>
                        <Button variant="outline" className="text-lg px-8 py-3 border-primary/20 hover:bg-primary/5">
                            View Pricing
                        </Button>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    );
};

export default Features;