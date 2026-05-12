'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const stats = [
    { value: '2000+', label: 'Students', icon: '👨‍🎓' },
    { value: '500+', label: 'Guardians', icon: '👪' },
    { value: '100+', label: 'Teachers', icon: '📚' },
    { value: '3', label: 'Branches', icon: '🏫' }
  ]

  return (
    <section id="hero" className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 overflow-hidden">
      {/* School Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/school.jpg"
          alt="Bright Future International School Campus"
          fill
          className="object-cover"
          priority
        />
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-white text-center lg:text-left"
          >
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-2"
            >
              Your Child's Future
              <br />
              <span className="text-blue-100">Begins Here</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base text-blue-100 mb-3 max-w-lg mx-auto lg:mx-0"
            >
              A centralized digital platform to manage school 
              admissions with ease — from discovery to enrollment.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('admission')}
                className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
              >
                Sign up to Apply
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="border-2 border-white text-white font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm"
              >
                Explore Schools
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-white/10 rounded-full"></div>
              
              {/* School Logo/Image */}
              <div className="absolute inset-4 overflow-hidden rounded-full">
                <Image
                  src="/circle.jpg"
                  alt="Bright Future International School"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-full p-3"
              >
                <span className="text-2xl">🎓</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm rounded-full p-3"
              >
                <span className="text-2xl">📚</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-3 lg:mt-4"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-1.5 text-center text-white"
              >
                <div className="text-base mb-1">{stat.icon}</div>
                <div className="text-base font-bold text-blue-100">{stat.value}</div>
                <div className="text-xs text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero