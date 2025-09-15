import { Button } from "@/components/ui/button";
import { Crown, Github, Heart, Image, Instagram, Mail, Palette, Sparkles, Twitter, Youtube, Zap } from "lucide-react";

const FooterSection = () => {
    const currentYear = new Date().getFullYear();

    const productLinks = [
        { name: "AI Gallery", href: "#gallery", icon: Image },
        { name: "Style Transfer", href: "#styles", icon: Palette },
        { name: "Quick Generate", href: "#generate", icon: Zap },
        { name: "Premium Plans", href: "#pricing", icon: Crown },
    ];

    const companyLinks = [
        { name: "About Us", href: "#about" },
        { name: "Blog", href: "#blog" },
        { name: "Careers", href: "#careers" },
        { name: "Press Kit", href: "#press" },
    ];

    const supportLinks = [
        { name: "Help Center", href: "#help" },
        { name: "API Docs", href: "#api" },
        { name: "Community", href: "#community" },
        { name: "Contact Us", href: "#contact" },
    ];

    const legalLinks = [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "DMCA", href: "#dmca" },
    ];

    const socialLinks = [
        { name: "Twitter", href: "#", icon: Twitter, color: "hover:text-blue-400" },
        { name: "Instagram", href: "#", icon: Instagram, color: "hover:text-pink-400" },
        { name: "GitHub", href: "https://github.com/vivek1504/", icon: Github, color: "hover:text-white" },
        { name: "YouTube", href: "#", icon: Youtube, color: "hover:text-red-400" },
    ];

    return (

        <footer className="relative mt-20 bg-gradient-to-br from-black/80 via-black/90 to-black/95 border-t border-white/10"> {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20 pointer-events-none" />

            <div className="relative container mx-auto px-4 lg:px-6 pt-16 pb-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-6">
                        <div className="flex items-center space-x-3 group cursor-pointer">
                            <div className="relative">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl gradient-primary glow-primary transition-smooth group-hover:scale-110">
                                    <Sparkles className="w-6 h-6 text-white animate-pulse" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-20 transition-smooth" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                    PicGen
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    AI Image Generator
                                </span>
                            </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed max-w-md">
                            Transform your ideas into stunning AI-generated artwork. Create, customize, and download
                            professional-quality images in seconds with our advanced AI technology.
                        </p>

                        {/* Newsletter Signup */}
                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold text-foreground flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-primary" />
                                <span>Stay Updated</span>
                            </h3>
                            <div className="flex space-x-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-smooth"
                                />
                                <Button size="sm" className="btn-primary px-4">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                            Product
                        </h3>
                        <ul className="space-y-3">
                            {productLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth group"
                                        >
                                            <Icon className="w-4 h-4 group-hover:text-primary transition-smooth" />
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-smooth"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                            Support
                        </h3>
                        <ul className="space-y-3">
                            {supportLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-smooth"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            {legalLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-smooth"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Links Section */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        {/* Copyright */}
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>© {currentYear} PicGen™. All rights reserved.</span>
                            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                            <span>Made with AI</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className={`p-2 rounded-lg bg-white/5 text-muted-foreground ${social.color} transition-smooth hover:scale-110 hover:bg-white/10`}
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-8 pt-6 border-t border-white/5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                        <div className="space-y-1">
                            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                100K+
                            </div>
                            <div className="text-xs text-muted-foreground">Images Generated</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                50K+
                            </div>
                            <div className="text-xs text-muted-foreground">Happy Users</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                99.9%
                            </div>
                            <div className="text-xs text-muted-foreground">Uptime</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;