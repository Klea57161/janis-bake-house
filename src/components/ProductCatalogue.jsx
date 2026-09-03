import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { productsData, categories } from '../data/productsData'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

const ProductCatalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter(p => p.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="products" className="py-20 md:py-32 px-4 md:px-8 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="section-label mb-4">Koleksioni</p>
          <h2 className="serif-heading text-dark-brown mb-8">Produktet Tona</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-2 font-medium text-sm uppercase tracking-wider transition-all duration-300 rounded-sm ${
                  selectedCategory === cat.value
                    ? 'bg-dark-brown text-warm-white'
                    : 'bg-transparent border-2 border-dark-brown text-dark-brown hover:bg-dark-brown hover:text-warm-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onClick={() => setSelectedProduct(product)}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  )
}

export default ProductCatalogue