'use client'

import { motion } from 'framer-motion'

const Admission = () => {
  const admissionSteps = [
    {
      step: 'STEP 01',
      title: 'Registration',
      description: 'Fill out the online application form with student details and academic history',
      icon: '📝',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      step: 'STEP 02',
      title: 'Document Submission',
      description: 'Submit required documents including certificates and ID proofs',
      icon: '📄',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      step: 'STEP 03',
      title: 'Interaction & Assessment',
      description: 'Attend entrance test and personal interaction with faculty members',
      icon: '🎯',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10'
    },
    {
      step: 'STEP 04',
      title: 'Fee Payment',
      description: 'Complete admission fee payment after selection confirmation',
      icon: '💳',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10'
    },
    {
      step: 'STEP 05',
      title: 'Admission Confirmed',
      description: 'Receive admission confirmation and welcome to Bright Future family',
      icon: '⭐',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10'
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="admission" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white text-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-3"
          >
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase shadow-lg">
              ADMISSIONS
            </span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            Begin Your Journey
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Join our community of learners and unlock your potential. Our streamlined admission process ensures a smooth transition into academic excellence.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="relative"
        >
          {/* Timeline Line - Desktop */}
          <div className="hidden xl:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent transform -translate-y-1/2" />
          
          {/* Timeline Line - Mobile */}
          <div className="xl:hidden absolute left-6 sm:left-7 lg:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300/50 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-4 lg:gap-3 xl:gap-4">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={stepVariants}
                whileHover={{ y: -5 }}
                className="relative flex lg:flex-col items-start lg:items-center"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br ${step.color} p-0.5 shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center border-2 border-gray-100">
                      <span className="text-base sm:text-lg lg:text-base">{step.icon}</span>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-4 lg:ml-0 lg:mt-4 w-full bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-200/50 shadow-md hover:shadow-lg transition-all duration-300 flex-1 lg:flex-none`}>
                  <div className="text-left lg:text-center">
                    <div className={`inline-block bg-gradient-to-r ${step.color} text-white px-2 py-1 rounded-full text-xs font-semibold mb-2`}>
                      {step.step}
                    </div>
                    
                    <h3 className="text-sm sm:text-base lg:text-sm font-bold mb-2 text-gray-800">
                      {step.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm lg:text-xs text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line for Desktop */}
                {index < admissionSteps.length - 1 && (
                  <div className="hidden xl:block absolute top-6 sm:top-7 lg:top-6 left-12 sm:left-14 lg:left-12 w-full h-px bg-gradient-to-r from-gray-300/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex flex-col sm:flex-row gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
            >
              Start Application
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300 bg-white"
            >
              Download Brochure
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto"
          >
            <div className="text-center">
              <div className="text-xl font-bold text-orange-500 mb-1">100%</div>
              <div className="text-xs text-gray-500">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-orange-500 mb-1">24/7</div>
              <div className="text-xs text-gray-500">Support</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-orange-500 mb-1">3-5</div>
              <div className="text-xs text-gray-500">Working Days</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Admission