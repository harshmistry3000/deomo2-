import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export function Code({ children, className }) {
  return (
    <div className={cn("w-full mx-auto rounded-xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-left", className)}>
      {children}
    </div>
  );
}

export function CodeHeader({ title = "terminal", className }) {
  return (
    <div className={cn("flex items-center px-4 py-3 border-b border-slate-800 bg-slate-900", className)}>
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-rose-500"></div>
        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
      </div>
      <div className="flex-1 text-center text-xs text-slate-400 font-medium tracking-wider">
        {title}
      </div>
      <div className="w-11"></div>
    </div>
  );
}

export function CodeBlock({ lines = [], className, showLineNumbers = true }) {
  const [displayedLineCount, setDisplayedLineCount] = useState(0);
  
  // Stable dependency string
  const linesDep = lines.join('|');
  
  useEffect(() => {
    setDisplayedLineCount(0); // Reset on mount or when content changes
    
    if (!lines || lines.length === 0) return;
    
    // Safely increment via numeric count, avoiding stale closures over the array
    const interval = setInterval(() => {
      setDisplayedLineCount(prevCount => {
        if (prevCount < lines.length) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 700);
    
    return () => clearInterval(interval);
  }, [linesDep, lines.length]);

  // Derive the sliced array directly from the numeric counter
  const displayedLines = lines.slice(0, displayedLineCount);

  return (
    <div className={cn("p-5 text-sm sm:text-base leading-relaxed text-slate-300 overflow-x-auto h-64", className)}>
      {displayedLines.map((line, i) => (
        <div key={i} className="flex">
          {showLineNumbers && (
            <span className="text-slate-600 select-none mr-4 font-mono w-4 text-right">{i + 1}</span>
          )}
          <span className={cn(
            "font-mono whitespace-pre", 
            line.includes("✓") ? "text-emerald-400" : 
            line.includes("🚀") ? "text-cyan-400 font-bold" : 
            "text-slate-300"
          )}>{line}</span>
        </div>
      ))}
      <div className="flex">
        {showLineNumbers && (
          <span className="text-slate-600 select-none mr-4 font-mono w-4 text-right">
            {displayedLineCount < lines.length ? displayedLineCount + 1 : ""}
          </span>
        )}
        {displayedLineCount < lines.length && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 bg-slate-400 translate-y-1 h-[1em]"
          >&nbsp;</motion.span>
        )}
      </div>
    </div>
  );
}
