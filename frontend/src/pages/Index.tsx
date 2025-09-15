import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import FocusedCarousel from "@/components/FocusedCourosel";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfiniteCards from "@/components/InfiniteCards";
import InfoCard from "@/components/InfoCard";
import NewGenerators from "@/components/NewGenerators";
import ParallaxSection from "@/components/ParallaxSection";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import StatsSection from "@/components/StatsSection";

const Index = () => {
    return (
        <SmoothScrollProvider>
            <div data-scroll-container className="min-h-screen">
                <Header />
                <main>
                    {/* Hero Section with parallax effect */}
                    <ParallaxSection
                        speed={0.3}
                        className="relative"
                        parallaxElements={[
                            { selector: '.hero-bg-element', speed: 0.5, direction: 'up' },
                        ]}
                    >
                        <HeroSection />
                    </ParallaxSection>

                    {/* Stats Section with smooth scroll */}
                    <div data-scroll data-scroll-speed="0.1">
                        <StatsSection />
                    </div>

                    {/* Features Section with parallax */}
                    <ParallaxSection
                        speed={0.4}

                        parallaxElements={[
                            { selector: '.feature-card', speed: 0.2, direction: 'up' },
                        ]}
                    >
                        <FeaturesSection />
                    </ParallaxSection>

                    {/* Infinite Cards with enhanced parallax */}
                    <div data-scroll data-scroll-speed="0.2">
                        <InfiniteCards />
                    </div>

                    {/* Info Card with parallax */}
                    <ParallaxSection
                        speed={0.3}
                        className="relative"
                        parallaxElements={[
                            { selector: '.info-element', speed: 0.4, direction: 'down' },
                        ]}
                    >
                        <InfoCard />
                    </ParallaxSection>

                    {/* Focused Carousel with smooth scroll */}
                    <div data-scroll data-scroll-speed="0.15">
                        <FocusedCarousel />
                    </div>

                    {/* New Generators with parallax */}
                    <ParallaxSection
                        speed={0.25}

                    >
                        <NewGenerators />
                    </ParallaxSection>

                    {/* FAQ Section with smooth scroll */}
                    <div data-scroll data-scroll-speed="0.1">
                        <FAQSection />
                    </div>
                </main>
                <FooterSection />

            </div>

        </SmoothScrollProvider>
    );
};

export default Index;
