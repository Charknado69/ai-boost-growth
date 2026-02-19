import { useGlitchText } from "@/hooks/use-glitch-text";

interface GlitchButtonTextProps {
  text: string;
}

const GlitchButtonText = ({ text }: GlitchButtonTextProps) => {
  const { displayText, startGlitch, stopGlitch } = useGlitchText(text);

  return (
    <span
      onMouseEnter={startGlitch}
      onMouseLeave={stopGlitch}
      className="inline-block"
    >
      {displayText}
    </span>
  );
};

export default GlitchButtonText;
