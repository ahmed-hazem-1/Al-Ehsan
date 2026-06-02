import { useState, useEffect, useRef } from 'react';

export default function useInView(options = {}) {
  const [ref, setRef] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.triggerOnce !== false) {
          observer.unobserve(ref);
        }
      } else {
        if (options.triggerOnce === false) {
          setIsInView(false);
        }
      }
    }, {
      threshold: options.threshold ?? 0.15,
      rootMargin: options.rootMargin ?? '0px',
      root: options.root ?? null,
    });

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options.threshold, options.rootMargin, options.triggerOnce, options.root]);

  return [setRef, isInView];
}
