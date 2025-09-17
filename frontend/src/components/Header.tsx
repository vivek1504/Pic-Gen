import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Crown, Image, Menu, Star, X, Zap } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo1 from '../assets/logo1.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navigationLinks = [
        { name: "Gallery", href: "/gallery", icon: Image },
        { name: "Features", href: "/features", icon: Zap },
        { name: "Pricing", href: "/pricing", icon: Crown },
        { name: "About", href: "/about", icon: Star },
    ];

    return (
        <header className="relative z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl supports-[backdrop-filter]:bg-black/10">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
                        <div className="relative">
                            <div className="flex items-center h-16 w-16 justify-center  rounded-xl transition-smooth group-hover:scale-110">
                                <img src={logo1} alt="Logo" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-20 transition-smooth" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                PicGen
                            </span>
                            <span className="text-xs text-muted-foreground hidden sm:block">
                                AI Image Generator
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        {navigationLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = location.pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`flex items-center space-x-2 px-4 lg:px-6 py-2 lg:py-3 rounded-xl transition-smooth hover:bg-white/5 hover:backdrop-blur-sm group ${isActive
                                        ? 'text-primary bg-primary/10 border border-primary/20'
                                        : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                >
                                    <Icon className={`w-4 h-4 transition-smooth ${isActive ? 'text-primary' : 'group-hover:text-primary'
                                        }`} />
                                    <span className="font-medium">{link.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA Button */}
                    {/* Desktop CTA Button / Profile */}
                    <div className="hidden md:flex items-center space-x-4">
                        <SignedOut>
                            <Link to="/signup">
                                <Button className="btn-primary relative overflow-hidden group">
                                    <span className="relative z-10">Get Started</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-smooth" />
                                </Button>
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-xl hover:bg-white/5 transition-smooth"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-foreground" />
                        ) : (
                            <Menu className="w-6 h-6 text-foreground" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10">
                        <nav className="container mx-auto px-4 py-6 space-y-2">
                            {navigationLinks.map((link) => {
                                const Icon = link.icon;
                                const isActive = location.pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-smooth hover:bg-white/5 group ${isActive
                                            ? 'text-primary bg-primary/10 border border-primary/20'
                                            : 'text-muted-foreground hover:text-foreground'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Icon className={`w-5 h-5 transition-smooth ${isActive ? 'text-primary' : 'group-hover:text-primary'
                                            }`} />
                                        <span className="font-medium">{link.name}</span>
                                    </Link>
                                );
                            })}
                            <div className="pt-4 space-y-3">
                                <Link to="/signup" className="w-full" onClick={() => setIsMenuOpen(false)}>
                                    <Button className="btn-primary w-full">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;