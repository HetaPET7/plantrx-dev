'use client'

import { motion } from 'framer-motion'
import { wordContainer, wordRisePerspective } from '@/animations/framerMotionVariants'
import { JSX, ReactNode, useMemo } from 'react'

type RevealTextProps = {
  children: ReactNode
  className?: string
  tag?: keyof JSX.IntrinsicElements
}

export default function RevealText({
  children,
  className,
  tag = 'div',
}: RevealTextProps) {
  const text = useMemo(() => {
    if (typeof children === 'string') {
      return children
    }
    return ''
  }, [children])

  const words = useMemo(
    () =>
      text
        .replace(/\s+/g, ' ')
        .trim()
        .split(' '),
    [text]
  )

  const MotionTag: React.ElementType = (motion as any)[tag] || motion.div

  return (
    <span style={{ perspective: '1200px' }}>
      <MotionTag
        variants={wordContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4 }}
        className={className}
        style={{ transformStyle: 'preserve-3d' }} 
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden"
          >
            <motion.span
              variants={wordRisePerspective}
              className="inline-block backface-hidden"
            >
              {word}
              <span>&nbsp;</span>
            </motion.span>
          </span>
        ))}
      </MotionTag>
    </span>
  )
}
