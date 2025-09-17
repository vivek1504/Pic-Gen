import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import FocusedCarousel from "@/components/FocusedCourosel";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfiniteCards from "@/components/InfiniteCards";
import InfoCard from "@/components/InfoCard";
import NewGenerators from "@/components/NewGenerators";
import StatsSection from "@/components/StatsSection";

const Index = () => {

    return (
        <div className="flex flex-col bg-gradient-to-b from-[hsl(var(--bg-start))] to-[hsl(var(--bg-end))] text-[hsl(var(--text-primary))]">
            <Header />
            <main>
                <HeroSection />
                <StatsSection />
                <FeaturesSection />
                <InfiniteCards />
                <InfoCard />
                <FocusedCarousel />
                <NewGenerators />
                <FAQSection />
                <FooterSection />
            </main>

        </div>

    );
};

export default Index;
