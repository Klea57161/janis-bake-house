import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const ProductModal = ({ product, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-dark-brown/60 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-warm-white rounded-sm max-w-2xl w-full max-h-96 overflow-y-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="h-64 md:h-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <p className="section-label mb-2">{product.category}</p>
                <h2 className="font-serif text-4xl text-dark-brown mb-4">{product.name}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {product.fullDescription}
                </p>
              </div>
              <button
                onClick={onClose}
                className="btn-primary w-full"
              >
                Mbyll
              </button>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-dark-brown/10 hover:bg-dark-brown/20 p-2 rounded-full transition-colors"
          >
            <X size={24} className="text-dark-brown" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProductModal