'use client'
import { motion } from 'framer-motion';

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
