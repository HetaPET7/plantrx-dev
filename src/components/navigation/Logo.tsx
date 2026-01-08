import Link from "next/link";
import { motion } from "framer-motion";

interface LogoProps {
  isLink?: boolean;
  className?: string;
  animationStage?: number;
}

const letters = ["P", "l", "a", "n", "t", "R", "x"];

function Logo({
  isLink = true,
  className = "md:text-40 text-32",
  animationStage,
}: LogoProps) {
  const shouldAnimate = animationStage !== undefined;

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
      className={`logo-heading ${className} font-bold text-primary leading-none whitespace-nowrap`}
      variants={containerVariants}
      initial={shouldAnimate ? "hidden" : false}
      animate={shouldAnimate ? "visible" : false}
    >
      {letters.map((letter, index) => {
        const isR = letter === "R";

        if (!shouldAnimate) {
          return (
            <span
              key={index}
              className={`md:text-40 text-32 inline-block ${isR ? "text-secondary" : ""}`}
            >
              {letter}
            </span>
          );
        }

        return (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariants as any}
            className={`md:text-40 text-32 inline-block ${isR ? "text-secondary" : ""}`}
          >
            {letter}
          </motion.span>
        );
      })}
    </motion.h1>
  );

  return isLink ? <Link href="/">{logoContent}</Link> : logoContent;
}

export default Logo;
