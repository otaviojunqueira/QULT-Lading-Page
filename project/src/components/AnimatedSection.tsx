import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  threshold = 0.1 
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref} 
      className={`animate-on-scroll ${inView ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;