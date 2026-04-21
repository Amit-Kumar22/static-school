'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Welcome to Bright Future'
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
        setInterval(() => {
          setShowCursor(prev => !prev)
        }, 500)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="hero" className="relative min-h-[35vh] bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="School Background"
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-300/40 to-purple-300/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 0.8, 1.1],
            rotate: [0, -8, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [0.8, 1.3, 0.8],
            rotate: [0, 15, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-300/30 to-blue-300/30 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Small Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200 shadow-sm"
            >
              <span className="mr-2"></span>
             
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
              >
                {displayedText}
                <span className={`inline-block w-0.5 h-8 bg-blue-600 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold"
              >
              <motion.span 
                animate={{
                  backgroundPosition: ['0%', '100%', '0%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_100%]"
              >
                International School
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800"
            >
              Empowering Education
            </motion.p>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.5 }}
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              <span className="font-semibold text-blue-600">"Shaping Minds, Building Futures"</span> - 
              Where academic excellence meets character development in a nurturing environment.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4 }}
              className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
             
             
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4.3 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mt-2"
            >
              {['Smart Classrooms', 'Expert Faculty', '25+ Years Legacy'].map((feature, index) => (
                <motion.span
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 4.5 + index * 0.1 }}
                  className="px-3 py-1 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-xs text-gray-700 shadow-sm"
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>

            {/* Enhanced Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full text-sm transition-all duration-300 shadow-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-2">🚀</span>
                  Explore Excellence
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  backgroundColor: 'rgb(37, 99, 235)',
                  color: 'white'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('address')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-full text-sm transition-all duration-300 backdrop-blur-sm bg-white/50"
              >
                <span className="flex items-center">
                  <span className="mr-2">📍</span>
                  Visit Campus
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Enhanced Background Shape */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-[3rem] transform rotate-6"
              />
              <motion.div
                animate={{
                  scale: [1.02, 0.98, 1.02],
                  rotate: [2, -2, 2]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-tl from-purple-400/15 to-pink-400/15 rounded-[2.5rem] transform -rotate-3"
              />
              
              {/* Enhanced Main Image Container */}
              <motion.div 
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-[2rem] p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                  <Image
                    src="/hero.png"
                    alt="Bright Future International School Campus"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    priority
                  />
                  
                  {/* Enhanced Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent rounded-2xl" />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-4 left-4 right-4 text-white"
                  >
                    <h3 className="font-bold text-lg mb-1">Excellence in Education</h3>
                    <p className="text-sm opacity-90 flex items-center">
                      <span className="mr-1">⭐</span>
                      Award-winning infrastructure & faculty
                    </p>
                  </motion.div>
                  
                  {/* Stats Overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md"
                  >
                    <div className="text-center">
                      <div className="text-blue-600 font-bold text-lg">25+</div>
                      <div className="text-xs text-gray-600">Years</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Enhanced Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg p-3 border border-blue-100"
              >
                <div className="text-blue-600">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🎓</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg p-3 border border-purple-100"
              >
                <div className="text-purple-600">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📚</span>
                  </div>
                </div>
              </motion.div>
              
              {/* New Achievement Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [-5, 5, -5]
                }}
                transition={{ 
                  opacity: { delay: 1.5 },
                  x: { delay: 1.5 },
                  y: { duration: 3, repeat: Infinity }
                }}
                className="absolute top-1/2 -left-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full p-2 shadow-lg transform -translate-y-1/2"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <span className="text-sm font-bold">A+</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 6 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ 
            y: [0, 8, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center space-y-2 cursor-pointer group"
          onClick={() => scrollToSection('about')}
        >
          <div className="relative">
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 0 0 rgba(59, 130, 246, 0.4)',
                  '0 0 0 10px rgba(59, 130, 246, 0)',
                  '0 0 0 0 rgba(59, 130, 246, 0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-12 border-2 border-blue-500 rounded-full flex justify-center relative bg-white/50 backdrop-blur-sm"
            >
              <motion.div
                animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mt-2"
              />
            </motion.div>
          </div>
          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-600 text-xs font-medium tracking-wider group-hover:text-blue-600 transition-colors"
          >
            DISCOVER MORE
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero