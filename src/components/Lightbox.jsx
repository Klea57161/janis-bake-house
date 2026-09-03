import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { imageData } from '../data/imageData'

const Lightbox = ({ image, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(
    imageData.gallery.findIndex(img => img.id === image.id)
  )

  const currentImage = imageData.gallery[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imageData.gallery.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + imageData.gallery.length) % imageData.gallery.length)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-dark-brown/95 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full h-full max-w-4xl max-h-96 md:max-h-screen flex items-center justify-center"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-warm-white/20 hover:bg-warm-white/40 p-2 rounded-full transition-colors"
          >
            <X size={28} className="text-warm-white" />
          </button>

          {/* Image */}
          <motion.img
            key={currentImage.id}
            src={currentImage.image}
            alt={currentImage.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full object-contain"
          />

          {/* Navigation Buttons */}
          {imageData.gallery.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 bg-warm-white/20 hover:bg-warm-white/40 p-2 rounded-full transition-colors"
              >
                <ChevronLeft size={24} className="text-warm-white" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 bg-warm-white/20 hover:bg-warm-white/40 p-2 rounded-full transition-colors"
              >
                <ChevronRight size={24} className="text-warm-white" />
              </button>
            </>
          )}

          {/* Caption */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 text-center"
          >
            <p className="text-warm-white font-serif text-lg">{currentImage.title}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Lightbox