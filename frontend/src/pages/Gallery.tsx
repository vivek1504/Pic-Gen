import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
    Brush,
    Camera,
    ChevronLeft,
    ChevronRight,
    Download,
    Eye,
    Heart,
    Loader,
    Palette,
    Share2,
    Sparkles,
    Wand2,
    X
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Interface for gallery images from API
interface GalleryImage {
    id: string;
    url: string;
    prompt: string;
    style: string;
    createdAt: string;
}

const Gallery = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [favorites, setFavorites] = useState<string[]>([]);
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalImages, setTotalImages] = useState(0);
    const [isLoadingPage, setIsLoadingPage] = useState(false);
    const itemsPerPage = 12;

    // Function to fetch images from API
    const fetchImages = async (page: number = 1, isPageChange: boolean = false) => {
        try {
            if (isPageChange) {
                setIsLoadingPage(true);
            } else {
                setLoading(true);
            }
            setError(null);

            const response = await fetch(
                `http://localhost:3000/images?page=${page}&limit=${itemsPerPage}`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch images");
            }

            const data = await response.json();
            setImages(data.images || data); // Support both paginated and non-paginated responses

            // If the API returns pagination metadata
            if (data.pagination) {
                setTotalPages(data.pagination.totalPages);
                setTotalImages(data.pagination.totalItems);
                setCurrentPage(data.pagination.currentPage);
            } else if (data.totalPages) {
                // Alternative pagination structure
                setTotalPages(data.totalPages);
                setTotalImages(data.totalImages);
                setCurrentPage(page);
            } else {
                // Fallback for non-paginated responses
                setTotalPages(1);
                setTotalImages(data.length || (Array.isArray(data) ? data.length : 0));
                setCurrentPage(1);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load images");
            console.error("Error fetching images:", err);
        } finally {
            setLoading(false);
            setIsLoadingPage(false);
        }
    };

    const categories = [
        { id: "all", name: "All Artworks", icon: Sparkles },
        { id: "photo", name: "Realistic", icon: Camera },
        { id: "anime", name: "Anime", icon: Wand2 },
        { id: "cartoon", name: "Cartoon", icon: Palette },
        { id: "sketch", name: "Sketch", icon: Brush },
        { id: "vintage", name: "Vintage", icon: Heart },
    ];

    const filteredImages = images.filter(image => {
        if (selectedCategory === "all") return true;
        return image.style.toLowerCase() === selectedCategory.toLowerCase();
    });

    const toggleFavorite = (imageId: string) => {
        setFavorites(prev =>
            prev.includes(imageId)
                ? prev.filter(id => id !== imageId)
                : [...prev, imageId]
        );
    };

    const openLightbox = (image: GalleryImage) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        fetchImages(1, false);
    }, []);

    useEffect(() => {
        if (currentPage > 1) {
            fetchImages(currentPage, true);
        }
    }, [currentPage]);

    // Pagination handlers
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            setCurrentPage(page);
            // Scroll to top of gallery
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
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

            {/* Filters */}
            <section className="py-8 px-4 border-b border-white/10">
                <div className="container mx-auto">
                    <div className="flex justify-center">
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
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    {/* Loading State */}
                    {loading && (
                        <div className="flex items-center justify-center py-20">
                            <div className="flex items-center space-x-3">
                                <Loader className="w-6 h-6 animate-spin text-primary" />
                                <span className="text-lg text-muted-foreground">Loading gallery...</span>
                            </div>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="text-center py-20">
                            <div className="space-y-4">
                                <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 flex items-center justify-center">
                                    <X className="w-8 h-8 text-red-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-red-500">Failed to load images</h3>
                                <p className="text-muted-foreground">{error}</p>
                                <Button onClick={() => fetchImages(1, false)} className="btn-primary">Try Again</Button>

                            </div>
                        </div>
                    )}

                    {/* Gallery Grid */}
                    {!loading && !error && (
                        <div className="relative">
                            {/* Loading overlay for page changes */}
                            {isLoadingPage && (
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        <Loader className="w-6 h-6 animate-spin text-primary" />
                                        <span className="text-lg text-white">Loading page...</span>
                                    </div>
                                </div>
                            )}

                            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${isLoadingPage ? 'opacity-50' : ''}`}>
                                {filteredImages.map((image) => (
                                    <div
                                        key={image.id}
                                        className="group relative overflow-hidden rounded-xl bg-black/20 border border-white/10 hover:border-primary/20 transition-all duration-300 hover:scale-[1.02]"
                                    >
                                        <div className="aspect-square overflow-hidden">
                                            <img
                                                src={image.url}
                                                alt={`Generated image: ${image.prompt}`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                onError={(e) => {
                                                    e.currentTarget.src = "/api/placeholder/400/400"; // fallback image
                                                }}
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
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                                                            {image.style}
                                                        </span>
                                                        <span className="text-xs text-gray-400">
                                                            {new Date(image.createdAt).toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-gray-300 line-clamp-2">{image.prompt}</p>

                                                    <div className="flex items-center justify-end">
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
                        </div>
                    )}

                    {!loading && !error && filteredImages.length === 0 && (
                        <div className="text-center py-20">
                            <div className="space-y-4">
                                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                                    <Sparkles className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold">No artworks found</h3>
                                <p className="text-muted-foreground">Try selecting a different style or check back later</p>
                            </div>
                        </div>
                    )}

                    {/* Pagination Controls */}
                    {!loading && !error && totalPages > 1 && (
                        <div className="flex flex-col items-center space-y-4 pt-12">
                            {/* Results Info */}
                            <div className="text-center text-sm text-muted-foreground">
                                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, totalImages)} of {totalImages} images
                            </div>

                            {/* Pagination Controls */}
                            <div className="flex items-center space-x-2">
                                {/* Previous Button */}
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 1 || isLoadingPage}
                                    className="flex items-center space-x-2"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                    <span>Previous</span>
                                </Button>

                                {/* Page Numbers */}
                                <div className="flex items-center space-x-1">
                                    {/* First Page */}
                                    {currentPage > 3 && (
                                        <>
                                            <Button
                                                variant={1 === currentPage ? "default" : "outline"}
                                                size="sm"
                                                onClick={() => handlePageChange(1)}
                                                disabled={isLoadingPage}
                                                className="w-10 h-10"
                                            >
                                                1
                                            </Button>
                                            {currentPage > 4 && (
                                                <span className="text-muted-foreground px-2">...</span>
                                            )}
                                        </>
                                    )}

                                    {/* Current Page Range */}
                                    {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {
                                        let pageNum;
                                        if (totalPages <= 5) {
                                            pageNum = index + 1;
                                        } else if (currentPage <= 3) {
                                            pageNum = index + 1;
                                        } else if (currentPage >= totalPages - 2) {
                                            pageNum = totalPages - 4 + index;
                                        } else {
                                            pageNum = currentPage - 2 + index;
                                        }

                                        if (pageNum < 1 || pageNum > totalPages) return null;
                                        if (totalPages > 5 && currentPage > 3 && pageNum === 1) return null;
                                        if (totalPages > 5 && currentPage < totalPages - 2 && pageNum === totalPages) return null;

                                        return (
                                            <Button
                                                key={pageNum}
                                                variant={pageNum === currentPage ? "default" : "outline"}
                                                size="sm"
                                                onClick={() => handlePageChange(pageNum)}
                                                disabled={isLoadingPage}
                                                className="w-10 h-10"
                                            >
                                                {pageNum}
                                            </Button>
                                        );
                                    })}

                                    {/* Last Page */}
                                    {currentPage < totalPages - 2 && totalPages > 5 && (
                                        <>
                                            {currentPage < totalPages - 3 && (
                                                <span className="text-muted-foreground px-2">...</span>
                                            )}
                                            <Button
                                                variant={totalPages === currentPage ? "default" : "outline"}
                                                size="sm"
                                                onClick={() => handlePageChange(totalPages)}
                                                disabled={isLoadingPage}
                                                className="w-10 h-10"
                                            >
                                                {totalPages}
                                            </Button>
                                        </>
                                    )}
                                </div>

                                {/* Next Button */}
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages || isLoadingPage}
                                    className="flex items-center space-x-2"
                                >
                                    <span>Next</span>
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
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
                                src={selectedImage.url}
                                alt={`Generated image: ${selectedImage.prompt}`}
                                className="max-w-full max-h-full object-contain rounded-lg"
                            />
                        </div>

                        {/* Image Info */}
                        <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-3">
                                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                                            {selectedImage.style}
                                        </span>
                                        <span className="text-gray-400 text-sm">
                                            {new Date(selectedImage.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 text-sm">{selectedImage.prompt}</p>
                                </div>

                                <div className="flex items-center justify-end">
                                    <div className="flex space-x-2">
                                        <Button variant="outline" size="sm">
                                            <Share2 className="w-4 h-4 mr-2" />
                                            Share
                                        </Button>
                                        <Button
                                            className="btn-primary"
                                            size="sm"
                                            onClick={() => {
                                                // Create download link
                                                const link = document.createElement('a');
                                                link.href = selectedImage.url;
                                                link.download = `generated-image-${selectedImage.id}.png`;
                                                document.body.appendChild(link);
                                                link.click();
                                                document.body.removeChild(link);
                                            }}
                                        >
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