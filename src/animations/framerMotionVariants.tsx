'use client'
import { Variants } from 'framer-motion'

export const wordContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

export const wordRisePerspective: Variants = {
  hidden: {
    y: '120%',
    rotateX: 25,
  },
  visible: {
    y: '0%',
    rotateX: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.45,
    },
  },
}

export const slideDownVariants = {
  hidden: {
    '--slide-y': '-40px',
    opacity: 0,
    transform: 'translateY(var(--slide-y))',
  },
  visible: {
    '--slide-y': '0px',
    opacity: 1,
    transform: 'translateY(var(--slide-y))',
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};
export const slideUpVariants = {
  hidden: {
    '--slide-y': '20px',
    opacity: 0,
    transform: 'translateY(var(--slide-y))',
  },
  visible: {
    '--slide-y': '0px',
    opacity: 1,
    transform: 'translateY(var(--slide-y))',
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },
};
