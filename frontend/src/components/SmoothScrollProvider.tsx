import { createContext, useContext, useEffect, useRef, ReactNode } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

interface SmoothScrollContextType {
  scroll: LocomotiveScroll | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scroll: null,
});

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error('useSmoothScroll must be used within a SmoothScrollProvider');
  }
  return context;
};

interface SmoothScrollProviderProps {
  children: ReactNode;
  options?: any;
}

export const SmoothScrollProvider = ({ 
  children, 
  options = {} 
}: SmoothScrollProviderProps) => {
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    const initializeScroll = () => {
      scrollRef.current = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]') as HTMLElement,
        smooth: true,
        multiplier: 1,
        class: 'is-revealed',
        scrollbarClass: 'c-scrollbar',
        scrollingClass: 'has-scroll-scrolling',
        draggingClass: 'has-scroll-dragging',
        smoothClass: 'has-scroll-smooth',
        initClass: 'has-scroll-init',
        getSpeed: true,
        getDirection: true,
        ...options,
      });

      // Update scroll on route changes
      scrollRef.current.on('scroll', () => {
        // Custom scroll event handling if needed
      });
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initializeScroll, 100);

    return () => {
      clearTimeout(timer);
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }
    };
  }, [options]);

  // Update scroll when content changes
  useEffect(() => {
    if (scrollRef.current) {
      const timer = setTimeout(() => {
        scrollRef.current?.update();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [children]);

  return (
    <SmoothScrollContext.Provider value={{ scroll: scrollRef.current }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export default SmoothScrollProvider;