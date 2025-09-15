import { SmoothScrollProvider } from './SmoothScrollProvider';
import ParallaxHero from './ParallaxHero';
import ParallaxSection from './ParallaxSection';
import ParallaxContent from './ParallaxContent';
import InfiniteCards from './InfiniteCards';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Star } from 'lucide-react';

const ParallaxDemo = () => {
  return (
    <SmoothScrollProvider>
      <div data-scroll-container className="relative">
        {/* Hero Section */}
        <ParallaxHero
          title="Parallax Perfection"
          subtitle="Experience the future of web interactions with buttery smooth scrolling and immersive parallax effects powered by GSAP and Locomotive Scroll"
          backgroundImage="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          overlayOpacity={0.6}
        />

        {/* Features Section */}
        <ParallaxContent
          subtitle="Revolutionary Technology"
          title="Smooth as Silk"
          description="Our parallax components combine the power of Locomotive Scroll with GSAP animations to create web experiences that feel native and responsive."
          layout="center"
          background="gradient"
          parallaxSpeed={0.3}
        >
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="animate-item text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">Optimized for performance with hardware acceleration</p>
            </div>
            
            <div className="animate-item text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-accent/20" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Beautiful Effects</h3>
              <p className="text-muted-foreground">Stunning visual effects that captivate your audience</p>
            </div>
            
            <div className="animate-item text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-purple-500/20" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">Enterprise-grade components for professional projects</p>
            </div>
          </div>
        </ParallaxContent>

        {/* Image Parallax Section */}
        <ParallaxSection
          speed={0.8}
          backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2344&q=80"
          overlay={true}
          overlayOpacity={0.7}
          className="min-h-screen flex items-center"
          parallaxElements={[
            { selector: '.floating-element-1', speed: 0.3, direction: 'up' },
            { selector: '.floating-element-2', speed: 0.6, direction: 'down' },
            { selector: '.floating-element-3', speed: 0.4, direction: 'left' },
          ]}
        >
          <div className="container mx-auto px-4 text-center text-white relative z-20">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Immersive
                </span>{' '}
                <br />
                <span className="text-white">Experiences</span>
              </h2>
              <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Create websites that tell stories through motion, engaging users with every scroll and interaction.
              </p>
              <Button className="btn-primary text-lg px-8 py-4">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Floating Elements */}
            <div className="floating-element-1 absolute top-1/4 left-1/4 w-6 h-6 bg-white/30 rounded-full blur-sm" />
            <div className="floating-element-2 absolute bottom-1/3 right-1/4 w-8 h-8 bg-primary/40 rotate-45" />
            <div className="floating-element-3 absolute top-1/2 right-1/3 w-4 h-4 bg-accent/50 rounded-full" />
          </div>
        </ParallaxSection>

        {/* Infinite Cards Section */}
        <div className="bg-background">
          <InfiniteCards />
        </div>

        {/* Split Layout Content */}
        <ParallaxContent
          subtitle="Advanced Features"
          title="Next Level Interactions"
          description="Every element is carefully crafted to provide the smoothest possible user experience. From micro-interactions to grand gestures, we've got you covered."
          image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          layout="split"
          background="dark"
          parallaxSpeed={0.4}
          animationDelay={0.2}
        >
          <div className="space-y-6">
            <div className="animate-item flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-primary rounded-full" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Hardware Acceleration</h4>
                <p className="text-muted-foreground">Utilizes GPU for smooth 60fps animations</p>
              </div>
            </div>

            <div className="animate-item flex items-start space-x-4">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-accent rounded-full" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Responsive Design</h4>
                <p className="text-muted-foreground">Adapts beautifully to all screen sizes</p>
              </div>
            </div>

            <div className="animate-item flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-purple-400 rounded-full" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Easy Integration</h4>
                <p className="text-muted-foreground">Drop-in components that work out of the box</p>
              </div>
            </div>
          </div>
        </ParallaxContent>

        {/* Performance Section */}
        <ParallaxSection
          speed={0.6}
          className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-32"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-8 mb-16">
                <h2 className="text-4xl lg:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
                    Performance
                  </span>{' '}
                  Metrics
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our components are built for speed and optimized for the best user experience possible.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { number: '60', unit: 'FPS', label: 'Smooth Animations' },
                  { number: '<100', unit: 'KB', label: 'Bundle Size' },
                  { number: '99', unit: '%', label: 'Performance Score' },
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-white/10"
                    data-scroll
                    data-scroll-speed="0.8"
                    data-scroll-delay={index * 0.1}
                  >
                    <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">
                      {metric.number}
                      <span className="text-2xl text-accent ml-1">{metric.unit}</span>
                    </div>
                    <p className="text-muted-foreground text-lg">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* Final CTA Section */}
        <ParallaxContent
          title="Ready to Transform Your Website?"
          description="Join thousands of developers who are already creating amazing experiences with our parallax components."
          layout="center"
          background="dark"
          className="py-32"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button size="lg" className="btn-primary text-lg px-8 py-4">
              Start Building <Sparkles className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              View Examples
            </Button>
          </div>
        </ParallaxContent>

        {/* Footer spacer */}
        <div className="h-20 bg-background" />
      </div>
    </SmoothScrollProvider>
  );
};

export default ParallaxDemo;