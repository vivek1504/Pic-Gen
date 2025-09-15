import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
    Brush,
    Camera,
    Download,
    Eye,
    Heart,
    Palette,
    Search,
    Share2,
    Sparkles,
    Wand2,
    X
} from "lucide-react";
import { useEffect, useState } from "react";

// Import images
import animeGirl from "@/assets/anime_girl.webp";
import cartoon from "@/assets/cartoon.webp";
import flowers from "@/assets/flowers.jpg";
import heroShowcase from "@/assets/hero-showcase.jpg";
import mq10 from "@/assets/mq-10.webp";
import mq12 from "@/assets/mq-12.webp";
import mq8 from "@/assets/mq-8.webp";
import mq9 from "@/assets/mq-9.webp";
import mq1 from "@/assets/mq1.webp";
import mq2 from "@/assets/mq2.webp";
import mq3 from "@/assets/mq3.webp";
import mq4 from "@/assets/mq4.webp";
import mq5 from "@/assets/mq5.webp";
import mq6 from "@/assets/mq6.webp";
import painting from "@/assets/painting.webp";
import purpleCar from "@/assets/purple-car.jpg";
import s1 from "@/assets/s1.webp";
import s2 from "@/assets/s2.webp";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [favorites, setFavorites] = useState<number[]>([]);

    const categories = [
        { id: "all", name: "All Artworks", icon: Sparkles },
        { id: "realistic", name: "Realistic", icon: Camera },
        { id: "anime", name: "Anime", icon: Wand2 },
        { id: "abstract", name: "Abstract", icon: Palette },
        { id: "portrait", name: "Portrait", icon: Brush },
    ];

    const galleryImages = [
        {
            id: 1,
            src: painting,
            title: "Renaissance Portrait",
            category: "realistic",
            prompt: "A renaissance-style painting of an astronaut holding a flower",
            likes: 245,
            downloads: 89,
            style: "Renaissance",
            resolution: "2048x2048"
        },
        {
            id: 2,
            src: animeGirl,
            title: "Anime Character",
            category: "anime",
            prompt: "Beautiful anime girl with vibrant colors and detailed eyes",
            likes: 412,
            downloads: 156,
            style: "Anime",
            resolution: "1024x1024"
        },
        {
            id: 3,
            src: cartoon,
            title: "3D Character",
            category: "realistic",
            prompt: "3D rendered cartoon character with professional lighting",
            likes: 189,
            downloads: 67,
            style: "3D Render",
            resolution: "1536x1536"
        },
        {
            id: 4,
            src: flowers,
            title: "Floral Abstract",
            category: "abstract",
            prompt: "Abstract interpretation of blooming flowers in vibrant colors",
            likes: 298,
            downloads: 134,
            style: "Abstract",
            resolution: "2048x2048"
        },
        {
            id: 5,
            src: heroShowcase,
            title: "Hero Portrait",
            category: "portrait",
            prompt: "Epic hero character with dramatic lighting and composition",
            likes: 367,
            downloads: 201,
            style: "Digital Art",
            resolution: "1920x1080"
        },
        {
            id: 6,
            src: purpleCar,
            title: "Futuristic Vehicle",
            category: "realistic",
            prompt: "Sleek purple sports car with futuristic design elements",
            likes: 445,
            downloads: 178,
            style: "Photorealistic",
            resolution: "2048x1152"
        },
        {
            id: 7,
            src: mq1,
            title: "Digital Landscape",
            category: "abstract",
            prompt: "Surreal digital landscape with ethereal lighting",
            likes: 223,
            downloads: 98,
            style: "Digital Art",
            resolution: "1920x1080"
        },
        {
            id: 8,
            src: mq2,
            title: "Character Study",
            category: "portrait",
            prompt: "Detailed character portrait with dramatic shadows",
            likes: 334,
            downloads: 145,
            style: "Concept Art",
            resolution: "1536x1536"
        },
        {
            id: 9,
            src: mq3,
            title: "Abstract Composition",
            category: "abstract",
            prompt: "Complex abstract composition with geometric elements",
            likes: 167,
            downloads: 72,
            style: "Abstract",
            resolution: "1024x1024"
        },
        {
            id: 10,
            src: mq4,
            title: "Fantasy Portrait",
            category: "portrait",
            prompt: "Fantasy character with mystical elements and glowing effects",
            likes: 389,
            downloads: 167,
            style: "Fantasy Art",
            resolution: "1536x2048"
        },
        {
            id: 11,
            src: mq5,
            title: "Anime Style",
            category: "anime",
            prompt: "Anime-style character with vibrant hair and expressive eyes",
            likes: 456,
            downloads: 234,
            style: "Anime",
            resolution: "1024x1536"
        },
        {
            id: 12,
            src: mq6,
            title: "Realistic Portrait",
            category: "realistic",
            prompt: "Photorealistic human portrait with natural lighting",
            likes: 512,
            downloads: 289,
            style: "Photorealistic",
            resolution: "2048x2048"
        },
        {
            id: 13,
            src: mq8,
            title: "Stylized Character",
            category: "anime",
            prompt: "Stylized anime character with unique color palette",
            likes: 278,
            downloads: 123,
            style: "Stylized",
            resolution: "1536x1536"
        },
        {
            id: 14,
            src: mq9,
            title: "Digital Art",
            category: "abstract",
            prompt: "Modern digital art piece with flowing elements",
            likes: 345,
            downloads: 154,
            style: "Digital Art",
            resolution: "1920x1080"
        },
        {
            id: 15,
            src: mq10,
            title: "Fantasy Landscape",
            category: "abstract",
            prompt: "Mystical fantasy landscape with magical lighting",
            likes: 423,
            downloads: 187,
            style: "Fantasy",
            resolution: "2560x1440"
        },
        {
            id: 16,
            src: mq12,
            title: "Portrait Study",
            category: "portrait",
            prompt: "Artistic portrait study with soft lighting and textures",
            likes: 267,
            downloads: 112,
            style: "Artistic",
            resolution: "1536x1536"
        },
        {
            id: 17,
            src: s1,
            title: "Scenic Beauty",
            category: "realistic",
            prompt: "Beautiful scenic landscape with natural elements",
            likes: 356,
            downloads: 178,
            style: "Landscape",
            resolution: "2048x1152"
        },
        {
            id: 18,
            src: s2,
            title: "Abstract Vision",
            category: "abstract",
            prompt: "Abstract artistic vision with complex patterns",
            likes: 234,
            downloads: 98,
            style: "Abstract",
            resolution: "1024x1024"
        }
    ];

    const filteredImages = galleryImages.filter(image => {
        const matchesCategory = selectedCategory === "all" || image.category === selectedCategory;
        const matchesSearch = image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            image.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            image.style.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const toggleFavorite = (imageId: number) => {
        setFavorites(prev =>
            prev.includes(imageId)
                ? prev.filter(id => id !== imageId)
                : [...prev, imageId]
        );
    };

    const openLightbox = (image: any) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

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
                        <span className="text-sm font-medium text-primary">Community Gallery</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Discover Amazing{" "}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            AI Artwork
                        </span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Explore thousands of stunning AI-generated images created by our community.
                        Get inspired, find your next favorite artwork, or see what's possible with PicGen.
                    </p>

                    <div className="flex justify-center">
                        <Button className="btn-primary text-lg px-8 py-3" onClick={() => navigate("/")}>
                            Start Creating
                        </Button>
                    </div>
                </div>
            </section>

            {/* Filters and Search */}
            <section className="py-8 px-4 border-b border-white/10">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map(category => {
                                const Icon = category.icon;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-smooth ${selectedCategory === category.id
                                                ? 'bg-primary text-white'
                                                : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground'
                                            }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="text-sm font-medium">{category.name}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search artworks..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 bg-black/20 border border-white/10 rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-smooth w-80"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                className="group relative overflow-hidden rounded-xl bg-black/20 border border-white/10 hover:border-primary/20 transition-all duration-300 hover:scale-[1.02]"
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute inset-0 p-4 flex flex-col justify-between">
                                        {/* Top Actions */}
                                        <div className="flex justify-end space-x-2">
                                            <button
                                                onClick={() => toggleFavorite(image.id)}
                                                className={`p-2 rounded-full backdrop-blur-sm transition-colors ${favorites.includes(image.id)
                                                        ? 'bg-red-500 text-white'
                                                        : 'bg-black/30 text-white hover:bg-red-500'
                                                    }`}
                                            >
                                                <Heart className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 rounded-full bg-black/30 text-white hover:bg-primary transition-colors backdrop-blur-sm">
                                                <Share2 className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* Bottom Info */}
                                        <div className="space-y-2">
                                            <h3 className="font-semibold text-white text-sm">{image.title}</h3>
                                            <p className="text-xs text-gray-300 line-clamp-2">{image.prompt}</p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3 text-xs text-gray-300">
                                                    <div className="flex items-center space-x-1">
                                                        <Heart className="w-3 h-3" />
                                                        <span>{image.likes}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Download className="w-3 h-3" />
                                                        <span>{image.downloads}</span>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => openLightbox(image)}
                                                    className="p-1.5 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
                                                >
                                                    <Eye className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredImages.length === 0 && (
                        <div className="text-center py-20">
                            <div className="space-y-4">
                                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                                    <Search className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold">No artworks found</h3>
                                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
                    <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Image */}
                        <div className="relative max-w-full max-h-full">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="max-w-full max-h-full object-contain rounded-lg"
                            />
                        </div>

                        {/* Image Info */}
                        <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <h2 className="text-xl font-bold text-white">{selectedImage.title}</h2>
                                    <p className="text-gray-300 text-sm">{selectedImage.prompt}</p>
                                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                                        <span>Style: {selectedImage.style}</span>
                                        <span>•</span>
                                        <span>Resolution: {selectedImage.resolution}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                                        <div className="flex items-center space-x-2">
                                            <Heart className="w-4 h-4" />
                                            <span>{selectedImage.likes} likes</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Download className="w-4 h-4" />
                                            <span>{selectedImage.downloads} downloads</span>
                                        </div>
                                    </div>

                                    <div className="flex space-x-2">
                                        <Button variant="outline" size="sm">
                                            <Share2 className="w-4 h-4 mr-2" />
                                            Share
                                        </Button>
                                        <Button className="btn-primary" size="sm">
                                            <Download className="w-4 h-4 mr-2" />
                                            Download
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <FooterSection />
        </div>
    );
};

export default Gallery;