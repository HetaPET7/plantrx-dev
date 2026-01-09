import Link from "next/link";
import { motion } from "framer-motion";

interface LogoProps {
    isLink?: boolean;
    className?: string;
    animationStage?: number;
    size?: "sm" | "md" | "lg";
  }  

const letters = ["P", "l", "a", "n", "t", "R", "x"];
const sizeMap = {
    sm: "text-[32px]",
    md: "text-[40px]",
    lg: "text-[48px]",
};  

function Logo({
    isLink = true,
    animationStage,
    size = "lg",
  }: LogoProps) {
    const shouldAnimate = animationStage !== undefined;
    const fontSizeClass = sizeMap[size];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.20,
      },
    },
  };

  const letterVariants = {
    hidden: (index: number) => {
      const fromTop = index % 2 === 0;
      const isR = letters[index] === "R";

      return {
        y: isR ? 0 : fromTop ? -120 : 120,
        scale: 1,
        opacity: 0,
      };
    },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.55,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const logoContent = (
<motion.h1
      className={`logo-heading ${fontSizeClass} font-bold text-primary leading-none whitespace-nowrap`}
      variants={containerVariants}
      initial={shouldAnimate ? "hidden" : false}
      animate={shouldAnimate ? "visible" : false}
    >
      {letters.map((letter, index) => {
        const isR = letter === "R";

        return shouldAnimate ? (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariants as any}
            className={`inline-block ${fontSizeClass} ${
              isR ? "text-secondary" : ""
            }`}
          >
            {letter}
          </motion.span>
        ) : (
          <span
            key={index}
            className={`inline-block ${fontSizeClass} ${
              isR ? "text-secondary" : ""
            }`}
          >
            {letter}
          </span>
        );
      })}
    </motion.h1>
  );

  return isLink ? <Link href="/">{logoContent}</Link> : logoContent;
}

export default Logo;
