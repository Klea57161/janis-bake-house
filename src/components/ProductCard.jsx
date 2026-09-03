import React from 'react'
import { motion } from 'framer-motion'

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 md:h-72 overflow-hidden rounded-sm bg-gray-200 border border-dark-brown/10">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark-brown/0 group-hover:bg-dark-brown/10 transition-colors duration-300"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-6"
      >
        <p className="text-xs uppercase tracking-widest text-muted-gold mb-2">{product.category}</p>
        <h3 className="font-serif text-2xl text-dark-brown mb-3 group-hover:text-muted-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {product.description}
        </p>
        <motion.button
          className="text-muted-gold font-medium text-sm uppercase tracking-wider hover:text-dark-brown transition-colors"
          whileHover={{ x: 4 }}
        >
          Shiko më shumë →
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default ProductCard