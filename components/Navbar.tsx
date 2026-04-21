'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const menuItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Admission', id: 'admission' },
    { name: 'Address', id: 'address' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10 sm:h-12 md:h-14">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-base">BF</span>
            </div>
            <div>
              <h1 className={`font-bold text-base sm:text-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}>
                Bright Future
              </h1>
              <p className={`text-xs transition-colors duration-300 hidden sm:block ${
                isScrolled ? 'text-gray-600' : 'text-gray-600'
              }`}>
                International School
              </p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium text-sm lg:text-base transition-all duration-300 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <motion.div
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className={`h-0.5 w-6 transition-colors duration-300 ${
                    isScrolled ? 'bg-gray-700' : 'bg-gray-700'
                  }`}
                />
                <motion.div
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`h-0.5 w-6 transition-colors duration-300 ${
                    isScrolled ? 'bg-gray-700' : 'bg-gray-700'
                  }`}
                />
                <motion.div
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className={`h-0.5 w-6 transition-colors duration-300 ${
                    isScrolled ? 'bg-gray-700' : 'bg-gray-700'
                  }`}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar