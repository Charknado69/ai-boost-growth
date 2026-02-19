import { useState, useCallback, useRef } from "react";

const glitchChars = "アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF";

export const useGlitchText = (originalText: string) => {
  const [displayText, setDisplayText] = useState(originalText);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startGlitch = useCallback(() => {
    let iteration = 0;
    const maxIterations = originalText.length * 2;

    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        originalText
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < Math.floor(iteration / 1.5)) return originalText[i];
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join("")
      );

      iteration++;
      if (iteration > maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(originalText);
      }
    }, 70);
  }, [originalText]);

  const stopGlitch = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDisplayText(originalText);
  }, [originalText]);

  return { displayText, startGlitch, stopGlitch };
};
