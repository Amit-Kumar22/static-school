'use client'

import { motion } from 'framer-motion'
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  ComputerDesktopIcon 
} from '@heroicons/react/24/outline'

const About = () => {
  const features = [
    {
      icon: AcademicCapIcon,
      title: 'Quality Education',
      description: 'Comprehensive curriculum designed to nurture academic excellence and critical thinking skills for holistic development.'
    },
    {
      icon: UserGroupIcon,
      title: 'Experienced Faculty',
      description: 'Dedicated and qualified teachers committed to providing personalized attention and innovative teaching methodologies.'
    },
    {
      icon: ComputerDesktopIcon,
      title: 'Smart Classrooms',
      description: 'Modern infrastructure with digital learning tools and technology-enabled classrooms for enhanced educational experience.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4"
          >
            About Our School
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-2"
          >
            At Bright Future International School, we are committed to providing world-class education 
            that prepares students for the challenges of tomorrow. Our innovative approach combines 
            traditional values with modern teaching methodologies, creating an environment where every 
            student can thrive and reach their full potential. We believe in nurturing not just academic 
            excellence, but also character, creativity, and critical thinking skills.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
              }}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 sm:col-span-1 lg:col-span-1"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto"
              >
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 text-center">
                {feature.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >
          {[
            { number: '1000+', label: 'Students' },
            { number: '50+', label: 'Teachers' },
            { number: '25+', label: 'Years Experience' },
            { number: '3', label: 'Branches' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center p-3 sm:p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1"
              >
                {stat.number}
              </motion.div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About