'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  ComputerDesktopIcon,
  TrophyIcon,
  HeartIcon,
  SparklesIcon,
  StarIcon,
  BookOpenIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const About = () => {
  const features = [
    {
      icon: AcademicCapIcon,
      title: 'Quality Education',
      description: 'Comprehensive curriculum designed to nurture academic excellence and critical thinking skills for holistic development.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Experienced Faculty',
      description: 'Dedicated and qualified teachers committed to providing personalized attention and innovative teaching methodologies.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ComputerDesktopIcon,
      title: 'Smart Classrooms',
      description: 'Modern infrastructure with digital learning tools and technology-enabled classrooms for enhanced educational experience.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: TrophyIcon,
      title: 'Academic Excellence',
      description: 'Proven track record of outstanding academic achievements and student success in various competitive examinations.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: HeartIcon,
      title: 'Nurturing Environment',
      description: 'Safe and supportive atmosphere where students feel valued, respected, and encouraged to express their creativity.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: SparklesIcon,
      title: 'Innovation & Creativity',
      description: 'Fostering innovation through STEM programs, arts, and creative thinking to prepare students for future challenges.',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const achievements = [
    { number: '95%', label: 'Board Results', icon: StarIcon },
    { number: '1000+', label: 'Happy Students', icon: UserGroupIcon },
    { number: '25+', label: 'Years Legacy', icon: BookOpenIcon },
    { number: '50+', label: 'Expert Teachers', icon: AcademicCapIcon },
    { number: '3', label: 'Branches', icon: GlobeAltIcon },
    { number: '100+', label: 'Awards Won', icon: TrophyIcon }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0
    }
  }

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Main Hero Section with Background */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6"
            >
              <SparklesIcon className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-700 font-semibold text-sm">About Our School</span>
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Shaping Minds,
              </span>
              <br />
              <span className="text-gray-800">Building Futures</span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-5"
            >
              At Bright Future International School, we create an environment where academic excellence 
              meets character development, preparing students for a rapidly evolving world.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
              >
                Explore Programs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300 text-sm"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                className="relative group"
              >
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md border border-gray-100 h-full relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${feature.color}`}></div>
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-10 h-10 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-3 shadow-md`}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                  
                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="absolute bottom-6 right-6 text-gray-400 group-hover:text-gray-600"
                  >
                    →
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3"
            >
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-base text-gray-300 max-w-2xl mx-auto"
            >
              Numbers that reflect our commitment to educational excellence and student success
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white/20 hover:border-white/40 transition-all duration-300">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mx-auto mb-3"
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="text-xl sm:text-2xl font-bold text-white mb-2"
                  >
                    {achievement.number}
                  </motion.div>
                  
                  <div className="text-sm sm:text-base text-gray-300 font-medium">
                    {achievement.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="relative bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-center"
          >
            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 sm:p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm"></div>
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <HeartIcon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2">Our Mission</h4>
                  <p className="text-sm leading-relaxed opacity-90">
                    To provide holistic education that nurtures academic excellence, character development, 
                    and innovative thinking, preparing students to become responsible global citizens and leaders of tomorrow.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-4 sm:p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <StarIcon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2">Our Vision</h4>
                  <p className="text-sm leading-relaxed opacity-90">
                    To be a premier educational institution that inspires lifelong learning, fosters creativity and innovation, 
                    and shapes confident individuals who contribute positively to society and the world.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About