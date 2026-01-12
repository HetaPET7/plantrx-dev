'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const lines = [
  'Crafted for modern minds, Mushroom Focus Strips',
  'turn ancient functional mushrooms into a clean,',
  'chocolate-flavored ritual. Each strip is designed to',
  'sharpen focus and support clarity—simple,',
  'portable, and made to fit seamlessly into your day.',
]

function ProductStory() {
  const sectionRef = useRef<HTMLDivElement>(null)  

  const { scrollYProgress } = useScroll({  
    target: sectionRef,
    offset: ['start 10%', 'end 90%'],
  })

  return (
    <section
      ref={sectionRef}
      className="product-story-section relative h-[200vh]"
    >
      <motion.div className="sticky top-[10vh] h-[90vh] flex flex-col justify-start container">
        <div className='story-inner container flex flex-col items-center'>
          <h3 className="font-heading capitalize text-2xl font-normal text-font mt-10 mb-15">
            The story of Focus Strips
          </h3>

          <div className="relative z-10 text-black 2xl:text-[54px] 2xl:leading-[66px] xl:text-40 xl:leading-12 md:text-32 md:leading-9 *:font-light *:font-body-light text-center">
            {lines.map((text, index) => {
              const total = lines.length
              const start = index / total
              const end = (index + 1) / total

              const clipPath = useTransform(
                scrollYProgress,
                [start, end],
                [
                  'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
                  'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ]
              )

              return (
                <motion.div
                  key={index}
                  style={{
                    clipPath,
                    overflow: 'hidden',
                    willChange: 'clip-path',
                  }}
                >
                  {text}
                </motion.div> 
              ) 
            })}
          </div>
        </div> 
      </motion.div>
    </section> 
  )
}

export default ProductStory
