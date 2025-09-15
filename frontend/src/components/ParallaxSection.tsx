import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSmoothScroll } from './SmoothScrollProvider';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  backgroundImage?: string;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  parallaxElements?: Array<{
    selector: string;
    speed: number;
    direction?: 'up' | 'down' | 'left' | 'right';
  }>;
}

export const ParallaxSection = ({
  children,
  speed = 0.5,
  className = '',
  backgroundImage,
  overlay = false,
  overlayColor = 'black',
  overlayOpacity = 0.5,
  parallaxElements = [],
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const { scroll } = useSmoothScroll();

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const bg = bgRef.current;

    // Background parallax effect
    if (bg) {
      gsap.to(bg, {
        yPercent: -50 * speed,
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

    // Individual element parallax effects
    parallaxElements.forEach(({ selector, speed: elementSpeed, direction = 'up' }) => {
      const elements = section.querySelectorAll(selector);
      
      elements.forEach((element) => {
        let transform = {};
        
        switch (direction) {
          case 'up':
            transform = { yPercent: -100 * elementSpeed };
            break;
          case 'down':
            transform = { yPercent: 100 * elementSpeed };
            break;
          case 'left':
            transform = { xPercent: -100 * elementSpeed };
            break;
          case 'right':
            transform = { xPercent: 100 * elementSpeed };
            break;
        }

        gsap.fromTo(element, 
          { ...transform },
          {
            yPercent: direction.includes('up') || direction.includes('down') ? 0 : undefined,
            xPercent: direction.includes('left') || direction.includes('right') ? 0 : undefined,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              scroller: '[data-scroll-container]',
            },
          }
        );
      });
    });

    // Fade in animation
    gsap.fromTo(section, 
      { 
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          scroller: '[data-scroll-container]',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.killAll();
    };
  }, [speed, parallaxElements, scroll]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
      data-scroll
      data-scroll-speed={speed}
    >
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
      
      {overlay && (
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}

      <div className="relative z-20">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;