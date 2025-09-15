import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useSmoothScroll } from './SmoothScrollProvider';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: string;
  textColor?: string;
  overlayOpacity?: number;
}

export const ParallaxHero = ({
  title,
  subtitle,
  backgroundImage,
  height = 'h-screen',
  textColor = 'text-white',
  overlayOpacity = 0.4,
}: ParallaxHeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scroll } = useSmoothScroll();

  useEffect(() => {
    if (!heroRef.current || !bgRef.current || !contentRef.current) return;

    const hero = heroRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;

    // Background parallax effect
    gsap.to(bg, {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        scroller: '[data-scroll-container]',
      },
    });

    // Content fade out effect
    gsap.to(content, {
      opacity: 0,
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        scroller: '[data-scroll-container]',
      },
    });

    // Floating elements animation
    const floatingElements = hero.querySelectorAll('[data-float]');
    floatingElements.forEach((element, index) => {
      gsap.to(element, {
        y: -20 * (index + 1),
        rotation: 5 * (index + 1),
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          scroller: '[data-scroll-container]',
        },
      });
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, [scroll]);

  return (
    <div
      ref={heroRef}
      className={`relative ${height} flex items-center justify-center overflow-hidden`}
      data-scroll
      data-scroll-speed="-1"
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: 'translateY(-10%)',
          }}
        />
      )}

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"
        style={{ opacity: overlayOpacity }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div
          data-float
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <div
          data-float
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          style={{ animationDelay: '2s' }}
        />
        <div
          data-float
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
          style={{ animationDelay: '4s' }}
        />

        {/* Geometric shapes */}
        <div
          data-float
          className="absolute top-20 right-20 w-4 h-4 bg-primary/30 rotate-45"
        />
        <div
          data-float
          className="absolute bottom-32 left-32 w-6 h-6 bg-accent/30 rounded-full"
        />
        <div
          data-float
          className="absolute top-1/3 left-1/3 w-2 h-2 bg-white/50 rounded-full"
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-30 text-center px-4 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1
            className={`text-4xl md:text-6xl lg:text-8xl font-bold mb-6 ${textColor} tracking-tight`}
          >
            <span className="block overflow-hidden">
              <motion.span
                className="block bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              >
                {title}
              </motion.span>
            </span>
          </h1>

          {subtitle && (
            <motion.p
              className={`text-xl md:text-2xl lg:text-3xl ${textColor.replace('text-', 'text-').replace('-', '-')}/80 max-w-4xl mx-auto leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-white/70 text-sm uppercase tracking-wider">
                Scroll to explore
              </span>
              <motion.div
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.div
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxHero;