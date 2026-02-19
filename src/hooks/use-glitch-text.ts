import { useState, useCallback, useRef } from "react";

const glitchChars = "01";

export const useGlitchText = (originalText: string) => {
  const [displayText, setDisplayText] = useState(originalText);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startGlitch = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Instant flip to binary
    setDisplayText(
      originalText
        .split("")
        .map((char) => char === " " ? " " : glitchChars[Math.floor(Math.random() * 2)])
        .join("")
    );

    // Snap back after a brief hold
    timeoutRef.current = setTimeout(() => {
      setDisplayText(originalText);
    }, 150);
  }, [originalText]);

  const stopGlitch = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDisplayText(originalText);
  }, [originalText]);

  return { displayText, startGlitch, stopGlitch };
};
