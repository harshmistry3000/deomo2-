import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, useAnimation, useInView } from 'motion/react';

export function TypingText({
  text,
  className,
  delay = 0,
  speed = 30, // ms per character
}) {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView || !text) return;

    let timeout;
    
    const typeWriter = (currentLength) => {
      if (currentLength < text.length) {
        setDisplayedLength(currentLength + 1);
        timeout = setTimeout(() => typeWriter(currentLength + 1), speed);
      } else {
        setIsComplete(true);
      }
    };
    
    // Initial delay before starting to type
    const initialDelay = setTimeout(() => {
      typeWriter(0);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(initialDelay);
    };
  }, [text, speed, delay, isInView]);

  const displayedText = text ? text.substring(0, displayedLength) : "";

  return (
    <div ref={ref} className={cn("inline-block relative", className)}>
      <span>{displayedText}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isComplete ? 0 : [0, 1, 0] }}
        transition={{ repeat: isComplete ? 0 : Infinity, duration: 0.8 }}
        className="ml-[1px] inline-block h-[1em] w-[2px] bg-slate-400 translate-y-[2px]"
      />
    </div>
  );
}
