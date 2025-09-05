import FeaturesSection from "@/components/FeaturesSection";
import FocusedCarousel from "@/components/FocusedCourosel";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfiniteCards from "@/components/InfiniteCards";
import InfoCard from "@/components/InfoCard";
import StatsSection from "@/components/StatsSection";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <HeroSection />
                <StatsSection />
                <FeaturesSection />
                <InfiniteCards />
                <InfoCard />
                <FocusedCarousel />
                <FooterSection />


            </main>
        </div>
    );
};

export default Index;
