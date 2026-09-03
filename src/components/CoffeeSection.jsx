import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { imageData } from '../data/imageData'

const CoffeeSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  return (
    <section id="coffee" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageData.coffeeSection}
          alt="Coffee and Croissant"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark-brown/50"></div>
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 md:px-8 max-w-3xl"
      >
        <p className="section-label mb-4 text-muted-gold">Rituali i mëngjesit</p>
        <h2 className="serif-heading text-warm-white mb-8">Combo Perfekte</h2>
        <p className="text-lg md:text-xl text-warm-white/90 mb-12 leading-relaxed">
          Një pastiçeri e përsosur kërkon një filxhan po aq të përsosur. Brioshjet piqen çdo mëngjes në furrën tonë, të freskta dhe plot shije.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary bg-muted-gold text-dark-brown hover:bg-opacity-90"
        >
          Zbulo ofertën
        </motion.button>
      </motion.div>
    </section>
  )
}

export default CoffeeSection