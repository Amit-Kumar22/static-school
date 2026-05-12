'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', 'Annual Day', 'Sports Day', 'Science Exhibition', 'Cultural Fest', 'Independence Day']

  const galleryImages = [
    // Annual Day Events
    {
      src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Annual Function Performance',
      description: 'Students showcasing their talents on stage during annual celebration',
      category: 'Annual Day'
    },
    {
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Prize Distribution Ceremony',
      description: 'Recognizing outstanding academic and extracurricular achievements',
      category: 'Annual Day'
    },
    {
      src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Chief Guest Address',
      description: 'Distinguished guests addressing students and parents',
      category: 'Annual Day'
    },

    // Sports Day Events
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Track & Field Events',
      description: 'Students participating in 100m sprint and relay races',
      category: 'Sports Day'
    },
    {
      src: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Basketball Tournament',
      description: 'Inter-house basketball championship matches',
      category: 'Sports Day'
    },
    {
      src: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Victory Celebration',
      description: 'Winners celebrating with medals and trophies',
      category: 'Sports Day'
    },

    // Science Exhibition
    {
      src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Student Science Projects',
      description: 'Innovative science models and experiments on display',
      category: 'Science Exhibition'
    },
    {
      src: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Chemistry Lab Demo',
      description: 'Students demonstrating chemical reactions and experiments',
      category: 'Science Exhibition'
    },
    {
      src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Robotics Showcase',
      description: 'Student-built robots and technology demonstrations',
      category: 'Science Exhibition'
    },

    // Cultural Fest
    {
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Classical Dance Performance',
      description: 'Students performing traditional Indian classical dance',
      category: 'Cultural Fest'
    },
    {
      src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Music Orchestra',
      description: 'School band and orchestra musical performance',
      category: 'Cultural Fest'
    },
    {
      src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Art & Craft Exhibition',
      description: 'Student artwork, paintings and handicraft displays',
      category: 'Cultural Fest'
    },

    // Independence Day
    {
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Flag Hoisting Ceremony',
      description: 'Principal hoisting the national flag with students in assembly',
      category: 'Independence Day'
    },
    {
      src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Patriotic March Past',
      description: 'Students in uniform marching with national pride',
      category: 'Independence Day'
    },
    {
      src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Cultural Program',
      description: 'Patriotic songs and dance celebrating freedom fighters',
      category: 'Independence Day'
    }
  ]
  // Filter images based on active category
  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  }

  const buttonVariants = {
    inactive: {
      backgroundColor: '#374151',
      color: '#9CA3AF',
      scale: 1
    },
    active: {
      backgroundColor: '#F97316',
      color: '#FFFFFF',
      scale: 1.05
    }
  }

  return (
    <section id="gallery" className="py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-6 sm:mb-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          >
            Gallery
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-4 rounded-full"
          />
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto"
          >
            Explore the vibrant moments and achievements that define our school community
          </motion.p>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={buttonVariants}
              animate={activeFilter === category ? 'active' : 'inactive'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg border-2 border-transparent"
              style={{
                backgroundColor: activeFilter === category ? '#F97316' : '#374151',
                color: activeFilter === category ? '#FFFFFF' : '#9CA3AF',
                borderColor: activeFilter === category ? '#F97316' : 'transparent'
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${activeFilter}-${image.title}-${index}`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 bg-white"
              >
                <div className="relative h-40 sm:h-44 lg:h-48">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-orange-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-md">
                      {image.category}
                    </span>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-base sm:text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {image.description}
                    </p>
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg 
                        className="w-6 h-6 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                        />
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Statistics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">500+</div>
            <div className="text-sm sm:text-base text-gray-600">Photos</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-sm sm:text-base text-gray-600">Events</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">25+</div>
            <div className="text-sm sm:text-base text-gray-600">Activities</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">12+</div>
            <div className="text-sm sm:text-base text-gray-600">Years</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery