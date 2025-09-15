import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { 
    Sparkles, 
    Check, 
    X, 
    Zap, 
    Crown, 
    Rocket,
    Star,
    Shield,
    Clock,
    Download,
    Cpu,
    Users,
    Infinity,
    MessageCircle,
    Award,
    ArrowRight
} from "lucide-react";
import { useState } from "react";

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const pricingPlans = [
        {
            name: "Starter",
            icon: Sparkles,
            description: "Perfect for beginners and casual creators",
            monthlyPrice: 0,
            annualPrice: 0,
            color: "from-blue-500 to-cyan-500",
            borderColor: "border-blue-500/20",
            features: [
                { text: "10 images per month", included: true },
                { text: "512x512 resolution", included: true },
                { text: "Basic AI models", included: true },
                { text: "5 art styles", included: true },
                { text: "Standard generation speed", included: true },
                { text: "Community support", included: true },
                { text: "High resolution (2K+)", included: false },
                { text: "Premium AI models", included: false },
                { text: "API access", included: false },
                { text: "Priority support", included: false }
            ],
            popular: false,
            cta: "Get Started Free"
        },
        {
            name: "Pro",
            icon: Zap,
            description: "Best for professionals and content creators",
            monthlyPrice: 19,
            annualPrice: 15,
            color: "from-purple-500 to-pink-500",
            borderColor: "border-primary/50",
            features: [
                { text: "500 images per month", included: true },
                { text: "Up to 2K resolution", included: true },
                { text: "All AI models", included: true },
                { text: "25+ art styles", included: true },
                { text: "Fast generation speed", included: true },
                { text: "Priority email support", included: true },
                { text: "Batch processing", included: true },
                { text: "Style mixing", included: true },
                { text: "API access (1000 calls/month)", included: true },
                { text: "Commercial license", included: false }
            ],
            popular: true,
            cta: "Start Pro Trial"
        },
        {
            name: "Enterprise",
            icon: Crown,
            description: "For teams and large-scale operations",
            monthlyPrice: 99,
            annualPrice: 79,
            color: "from-amber-500 to-orange-500",
            borderColor: "border-amber-500/20",
            features: [
                { text: "Unlimited images", included: true },
                { text: "Up to 4K resolution", included: true },
                { text: "Latest AI models", included: true },
                { text: "50+ art styles", included: true },
                { text: "Lightning-fast speed", included: true },
                { text: "24/7 priority support", included: true },
                { text: "Advanced batch processing", included: true },
                { text: "Custom style training", included: true },
                { text: "Unlimited API access", included: true },
                { text: "Full commercial license", included: true }
            ],
            popular: false,
            cta: "Contact Sales"
        }
    ];

    const additionalFeatures = [
        {
            icon: Shield,
            title: "Content Safety",
            description: "Advanced filters ensure safe and appropriate content generation"
        },
        {
            icon: Clock,
            title: "24/7 Uptime",
            description: "Reliable service with 99.9% uptime guarantee"
        },
        {
            icon: Download,
            title: "Multiple Formats",
            description: "Download in PNG, JPG, WebP, and SVG formats"
        },
        {
            icon: Cpu,
            title: "API Integration",
            description: "Seamlessly integrate with your existing workflows"
        }
    ];

    const faqs = [
        {
            question: "Can I change my plan anytime?",
            answer: "Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the next billing cycle."
        },
        {
            question: "What happens if I exceed my monthly limit?",
            answer: "You'll be notified when you're close to your limit. You can either upgrade your plan or wait until the next billing cycle for your credits to refresh."
        },
        {
            question: "Do you offer refunds?",
            answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll provide a full refund."
        },
        {
            question: "Is there a free trial for paid plans?",
            answer: "Yes! Pro plan comes with a 7-day free trial. Enterprise customers can request a custom trial period."
        },
        {
            question: "Can I use generated images commercially?",
            answer: "Pro and Enterprise plans include commercial usage rights. Starter plan is for personal use only."
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
                        <Crown className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Choose Your Creative Plan</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Simple, Transparent{" "}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Pricing
                        </span>
                    </h1>
                    
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Start creating for free, then choose the perfect plan as you grow. 
                        All plans include our core AI features with no hidden fees.
                    </p>
                    
                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center space-x-4">
                        <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                                isAnnual ? 'bg-primary' : 'bg-muted'
                            }`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                        </button>
                        <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                            Annual
                        </span>
                        {isAnnual && (
                            <span className="bg-green-500/10 text-green-500 text-xs font-medium px-2 py-1 rounded-full">
                                Save 20%
                            </span>
                        )}
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {pricingPlans.map((plan, index) => {
                            const Icon = plan.icon;
                            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
                            
                            return (
                                <div 
                                    key={index}
                                    className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                                        plan.popular 
                                            ? 'border-primary bg-gradient-to-br from-primary/5 to-accent/5 shadow-xl shadow-primary/10' 
                                            : `${plan.borderColor} bg-gradient-to-br from-white/5 to-transparent`
                                    }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-gradient-to-r from-primary to-accent px-4 py-1 rounded-full text-sm font-medium text-white">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}
                                    
                                    <div className="space-y-6">
                                        {/* Plan Header */}
                                        <div className="space-y-4">
                                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.color}`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            
                                            <div>
                                                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                                                <p className="text-muted-foreground">{plan.description}</p>
                                            </div>
                                            
                                            <div className="space-y-2">
                                                <div className="flex items-baseline space-x-2">
                                                    <span className="text-4xl font-bold text-foreground">
                                                        ${price}
                                                    </span>
                                                    {plan.monthlyPrice > 0 && (
                                                        <span className="text-muted-foreground">
                                                            /{isAnnual ? 'month' : 'month'}
                                                        </span>
                                                    )}
                                                </div>
                                                {isAnnual && plan.monthlyPrice > 0 && (
                                                    <p className="text-sm text-muted-foreground">
                                                        Billed annually (${price * 12}/year)
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        
                                        {/* Features List */}
                                        <div className="space-y-3">
                                            {plan.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center space-x-3">
                                                    {feature.included ? (
                                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    ) : (
                                                        <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                                                    )}
                                                    <span className={`text-sm ${
                                                        feature.included ? 'text-foreground' : 'text-muted-foreground line-through'
                                                    }`}>
                                                        {feature.text}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {/* CTA Button */}
                                        <Button 
                                            className={`w-full ${
                                                plan.popular 
                                                    ? 'btn-primary' 
                                                    : 'border border-white/20 hover:bg-white/5'
                                            }`}
                                            variant={plan.popular ? 'default' : 'outline'}
                                        >
                                            {plan.cta}
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-black/20 to-black/40">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            What's Included in Every Plan
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            All our plans include these essential features to help you create amazing AI art
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
                                    <div className="space-y-4">
                                        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300 w-fit">
                                            <Icon className="w-6 h-6" />
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

            {/* FAQ Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Get answers to common questions about our pricing and plans
                        </p>
                    </div>
                    
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 hover:to-white/5 transition-all duration-300"
                            >
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enterprise CTA */}
            <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
                <div className="container mx-auto text-center space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                            <Users className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">Enterprise Solutions</span>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Need Something Custom?
                        </h2>
                        
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We offer custom solutions for large organizations, including dedicated infrastructure, 
                            custom AI model training, and enterprise-grade security.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button className="btn-primary text-lg px-8 py-3">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Contact Sales
                        </Button>
                        <Button variant="outline" className="text-lg px-8 py-3 border-primary/20 hover:bg-primary/5">
                            <Award className="w-5 h-5 mr-2" />
                            Schedule Demo
                        </Button>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    );
};

export default Pricing;