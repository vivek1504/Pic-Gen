import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
    Brain,
    Github,
    Globe,
    Heart,
    Lightbulb,
    Linkedin,
    Mail,
    Rocket,
    Shield,
    Sparkles,
    Target,
    Twitter,
    Users,
    Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    const teamMembers = [
        {
            name: "Tony Stark",
            role: "CEO & Co-Founder",
            bio: "Former AI researcher at Google DeepMind with 10+ years in machine learning and computer vision.",
            image: "https://upload.wikimedia.org/wikipedia/en/f/f2/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg",
            social: {
                twitter: "#",
                linkedin: "#",
                github: "#"
            }
        },
        {
            name: "Pepper Potts",
            role: "CTO & Co-Founder",
            bio: "Ex-OpenAI engineer specializing in generative models and large-scale AI systems.",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Gwyneth_Paltrow_as_Pepper_Potts.jpg/250px-Gwyneth_Paltrow_as_Pepper_Potts.jpg",
            social: {
                twitter: "#",
                linkedin: "#",
                github: "#"
            }
        },
        {
            name: "Marcus Johnson",
            role: "Head of Product",
            bio: "Design-focused product leader with experience at Adobe and Figma, passionate about AI creativity.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
            social: {
                twitter: "#",
                linkedin: "#"
            }
        },
        {
            name: "Dr. Emily Wang",
            role: "Lead AI Researcher",
            bio: "PhD in Computer Vision from Stanford, published researcher in neural style transfer and image generation.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
            social: {
                twitter: "#",
                linkedin: "#",
                github: "#"
            }
        }
    ];

    const values = [
        {
            icon: Lightbulb,
            title: "Innovation First",
            description: "We push the boundaries of what's possible with AI, constantly exploring new techniques and technologies."
        },
        {
            icon: Users,
            title: "Community Driven",
            description: "Our users inspire everything we do. We build tools that empower creators to bring their visions to life."
        },
        {
            icon: Shield,
            title: "Responsible AI",
            description: "We're committed to developing AI that's safe, ethical, and beneficial for everyone."
        },
        {
            icon: Heart,
            title: "Creativity Matters",
            description: "We believe AI should amplify human creativity, not replace it. Every tool we build serves this mission."
        }
    ];

    const milestones = [
        {
            year: "2022",
            title: "Foundation",
            description: "PicGen was founded by AI researchers with a vision to democratize creative AI tools."
        },
        {
            year: "2023",
            title: "Beta Launch",
            description: "Released our first beta version to 1,000 selected creators, generating over 100K images."
        },
        {
            year: "2023",
            title: "Public Launch",
            description: "Opened PicGen to the public, reaching 50K users in the first month."
        },
        {
            year: "2024",
            title: "AI Revolution",
            description: "Launched advanced models and reached 1M+ generated images with 100K+ active users."
        }
    ];

    const stats = [
        { number: "1M+", label: "Images Generated" },
        { number: "100K+", label: "Active Users" },
        { number: "50+", label: "AI Models" },
        { number: "99.9%", label: "Uptime" }
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
                        <span className="text-sm font-medium text-primary">About PicGen</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Empowering Creativity with{" "}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Artificial Intelligence
                        </span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        We're on a mission to democratize AI-powered creativity, making professional-quality
                        image generation accessible to everyone, from individual creators to enterprise teams.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full">
                                    <Target className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-medium text-primary">Our Mission</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold">
                                    Making AI Creativity Accessible to Everyone
                                </h2>
                            </div>

                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    At PicGen, we believe that everyone should have access to powerful creative tools.
                                    Our mission is to bridge the gap between complex AI technology and everyday creators,
                                    making professional-quality image generation simple, fast, and affordable.
                                </p>

                                <p>
                                    Founded by AI researchers and creative professionals, we understand both the technical
                                    challenges and the creative needs of our users. We're not just building another AI tool –
                                    we're crafting an experience that empowers imagination.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="btn-primary">
                                    Join Our Mission
                                </Button>
                                <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                                    Learn More
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                                <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/10 to-transparent flex items-center justify-center">
                                    <div className="text-center space-y-4">
                                        <div className="relative">
                                            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                                                <Brain className="w-12 h-12 text-white" />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-ping opacity-20"></div>
                                        </div>
                                        <h3 className="text-2xl font-bold">AI-Powered Creativity</h3>
                                        <p className="text-muted-foreground">Transforming ideas into reality</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-black/20 to-black/40">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Growing Impact
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Numbers that reflect our commitment to empowering creators worldwide
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center space-y-2">
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide everything we do at PicGen
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="group p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 hover:to-white/5 transition-all duration-300 hover:scale-[1.02] text-center"
                                >
                                    <div className="space-y-4">
                                        <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                                            <Icon className="w-8 h-8" />
                                        </div>

                                        <h3 className="text-xl font-semibold">
                                            {value.title}
                                        </h3>

                                        <p className="text-muted-foreground leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Journey
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Key milestones in our mission to democratize AI creativity
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-accent opacity-30"></div>

                            <div className="space-y-12">
                                {milestones.map((milestone, index) => (
                                    <div key={index} className="relative flex items-center">
                                        {/* Timeline dot */}
                                        <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 z-10"></div>

                                        {/* Content */}
                                        <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                                            <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                                                <div className="space-y-2">
                                                    <div className="text-sm font-medium text-primary">{milestone.year}</div>
                                                    <h3 className="text-xl font-semibold">{milestone.title}</h3>
                                                    <p className="text-muted-foreground">{milestone.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The passionate individuals behind PicGen's innovation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="group text-center space-y-4"
                            >
                                <div className="relative mx-auto w-48 h-48 rounded-2xl overflow-hidden border border-white/10">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold">{member.name}</h3>
                                    <p className="text-primary font-medium">{member.role}</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                                </div>

                                <div className="flex justify-center space-x-3">
                                    {member.social.twitter && (
                                        <a href={member.social.twitter} className="p-2 rounded-full bg-white/5 text-muted-foreground hover:text-blue-400 hover:bg-blue-400/10 transition-colors">
                                            <Twitter className="w-4 h-4" />
                                        </a>
                                    )}
                                    {member.social.linkedin && (
                                        <a href={member.social.linkedin} className="p-2 rounded-full bg-white/5 text-muted-foreground hover:text-blue-600 hover:bg-blue-600/10 transition-colors">
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    )}
                                    {member.social.github && (
                                        <a href={member.social.github} className="p-2 rounded-full bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10 transition-colors">
                                            <Github className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-black/20 to-black/40">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Cutting-Edge Technology
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Built on the latest advances in AI research and engineering
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl border border-white/10 bg-black/20 hover:bg-black/30 transition-all duration-300 text-center">
                            <div className="space-y-4">
                                <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary">
                                    <Brain className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold">Advanced Neural Networks</h3>
                                <p className="text-muted-foreground">
                                    Proprietary models trained on billions of images for unmatched quality and creativity.
                                </p>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl border border-white/10 bg-black/20 hover:bg-black/30 transition-all duration-300 text-center">
                            <div className="space-y-4">
                                <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold">Lightning Performance</h3>
                                <p className="text-muted-foreground">
                                    Optimized infrastructure delivering results in seconds, not minutes.
                                </p>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl border border-white/10 bg-black/20 hover:bg-black/30 transition-all duration-300 text-center">
                            <div className="space-y-4">
                                <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary">
                                    <Globe className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold">Global Scale</h3>
                                <p className="text-muted-foreground">
                                    Distributed architecture ensuring reliability and speed worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Ready to Create Something Amazing?
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Join thousands of creators who are already using PicGen to bring their ideas to life.
                            Start your creative journey today.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button className="btn-primary text-lg px-8 py-3 " onClick={() => { navigate("/"); window.scrollTo(0, 0); }}>
                            <Rocket className="w-5 h-5 mr-2" />
                            Get Started Free
                        </Button>
                        <Button variant="outline" className="text-lg px-8 py-3 border-primary/20 hover:bg-primary/5">
                            <Mail className="w-5 h-5 mr-2" />
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    );
};

export default About;