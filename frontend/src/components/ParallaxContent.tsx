import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useSmoothScroll } from './SmoothScrollProvider';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxContentProps {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  layout?: 'left' | 'right' | 'center' | 'split';
  background?: 'dark' | 'light' | 'gradient' | 'image';
  backgroundImage?: string;
  className?: string;
  parallaxSpeed?: number;
  animationDelay?: number;
}

export const ParallaxContent = ({
  children,
  title,
  subtitle,
  description,
  image,
  layout = 'center',
  background = 'dark',
  backgroundImage,
  className = '',
  parallaxSpeed = 0.5,
  animationDelay = 0,
}: ParallaxContentProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { scroll } = useSmoothScroll();

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const content = contentRef.current;
    const imageEl = imageRef.current;

    // Content animation
    if (content) {
      gsap.fromTo(content,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 85%',
            end: 'bottom 15%',
            scroller: '[data-scroll-container]',
            toggleActions: 'play none none reverse',
          },
          delay: animationDelay,
        }
      );
    }

    // Image parallax effect
    if (imageEl) {
      gsap.to(imageEl, {
        yPercent: -30 * parallaxSpeed,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          scroller: '[data-scroll-container]',
        },
      });
    }

    // Stagger animation for child elements
    const childElements = content?.querySelectorAll('.animate-item');
    if (childElements) {
      gsap.fromTo(childElements,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: content,
            start: 'top 80%',
            scroller: '[data-scroll-container]',
            toggleActions: 'play none none reverse',
          },
          delay: animationDelay + 0.3,
        }
      );
    }

    return () => {
      ScrollTrigger.killAll();
    };
  }, [parallaxSpeed, animationDelay, scroll]);

  const getBackgroundClasses = () => {
    switch (background) {
      case 'light':
        return 'bg-white text-gray-900';
      case 'gradient':
        return 'bg-gradient-to-br from-primary/10 via-background to-accent/10 text-foreground';
      case 'image':
        return 'bg-black/20 text-white';
      default:
        return 'bg-background text-foreground';
    }
  };

  const getLayoutClasses = () => {
    switch (layout) {
      case 'left':
        return 'text-left max-w-4xl mr-auto';
      case 'right':
        return 'text-right max-w-4xl ml-auto';
      case 'split':
        return 'grid lg:grid-cols-2 gap-12 items-center';
      default:
        return 'text-center max-w-4xl mx-auto';
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`relative py-20 lg:py-32 overflow-hidden ${getBackgroundClasses()} ${className}`}
      data-scroll
      data-scroll-speed={parallaxSpeed}
    >
      {/* Background Image */}
      {background === 'image' && backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-12 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
        <div className="absolute bottom-1/3 -right-12 w-32 h-32 bg-accent/5 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={getLayoutClasses()}>
          {layout === 'split' ? (
            <>
              {/* Split Layout */}
              <div ref={contentRef} className="space-y-8">
                {subtitle && (
                  <motion.p className="animate-item text-sm uppercase tracking-wider text-primary font-semibold">
                    {subtitle}
                  </motion.p>
                )}
                {title && (
                  <motion.h2 className="animate-item text-4xl lg:text-6xl font-bold leading-tight">
                    {title}
                  </motion.h2>
                )}
                {description && (
                  <motion.p className="animate-item text-lg lg:text-xl text-muted-foreground leading-relaxed">
                    {description}
                  </motion.p>
                )}
                {children && (
                  <motion.div className="animate-item">
                    {children}
                  </motion.div>
                )}
              </div>

              {image && (
                <div
                  ref={imageRef}
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                  data-scroll
                  data-scroll-speed="0.8"
                >
                  <img
                    src={image}
                    alt={title || 'Content image'}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}
            </>
          ) : (
            <>
              {/* Standard Layouts */}
              <div ref={contentRef} className="space-y-8">
                {subtitle && (
                  <motion.p className="animate-item text-sm uppercase tracking-wider text-primary font-semibold">
                    {subtitle}
                  </motion.p>
                )}
                {title && (
                  <motion.h2 className="animate-item text-4xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
                      {title}
                    </span>
                  </motion.h2>
                )}
                {description && (
                  <motion.p className="animate-item text-lg lg:text-xl text-muted-foreground leading-relaxed">
                    {description}
                  </motion.p>
                )}
                {image && (
                  <motion.div 
                    ref={imageRef}
                    className="animate-item relative overflow-hidden rounded-2xl shadow-2xl max-w-2xl mx-auto"
                    data-scroll
                    data-scroll-speed="0.8"
                  >
                    <img
                      src={image}
                      alt={title || 'Content image'}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                )}
                {children && (
                  <motion.div className="animate-item">
                    {children}
                  </motion.div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default ParallaxContent;