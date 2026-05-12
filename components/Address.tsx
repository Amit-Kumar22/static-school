'use client'

import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon 
} from '@heroicons/react/24/outline'

const Address = () => {
  const branches = [
    {
      name: 'Main Branch',
      location: 'Kankarbagh',
      address: 'Plot No. 123, Kankarbagh Road, Near Buddha Colony, Patna, Bihar 800020',
      phone: '+91 9876543210',
      email: 'kankarbagh@brightfutureschool.edu.in',
      timings: 'Mon - Sat: 7:30 AM - 2:30 PM',
      isMain: true
    },
    {
      name: 'Branch 2',
      location: 'Boring Road',
      address: 'House No. 456, Boring Road, Opposite Hanuman Mandir, Patna, Bihar 800001',
      phone: '+91 9876543211',
      email: 'boringroad@brightfutureschool.edu.in',
      timings: 'Mon - Sat: 7:30 AM - 2:30 PM',
      isMain: false
    },
    {
      name: 'Branch 3',
      location: 'Danapur',
      address: 'Sector 7, Danapur Cantonment, Near Railway Station, Patna, Bihar 801503',
      phone: '+91 9876543212',
      email: 'danapur@brightfutureschool.edu.in',
      timings: 'Mon - Sat: 7:30 AM - 2:30 PM',
      isMain: false
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
    <section id="address" className="py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-6 sm:mb-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3"
          >
            Visit Our Branches
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"
          />
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm md:text-base text-gray-600 max-w-xs sm:max-w-xl lg:max-w-2xl mx-auto px-2"
          >
            We have three conveniently located branches across Patna. 
            Visit us to experience our world-class facilities and meet our dedicated team.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          {branches.map((branch, index) => (
            <motion.div
              key={branch.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              className={`relative bg-white rounded-xl p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 border-2 sm:col-span-1 lg:col-span-1 ${
                branch.isMain ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50' : 'border-gray-100'
              }`}
            >
              {branch.isMain && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    Main Campus
                  </span>
                </div>
              )}

              <div className="text-center mb-2 sm:mb-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-1 sm:mb-2 mx-auto"
                >
                  <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </motion.div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-1">
                  {branch.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-600">
                  {branch.location}, Patna
                </p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-start space-x-2">
                  <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {branch.address}
                  </p>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3">
                  <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                  <a 
                    href={`tel:${branch.phone}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {branch.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3">
                  <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                  <a 
                    href={`mailto:${branch.email}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xs sm:text-sm break-all"
                  >
                    {branch.email}
                  </a>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3">
                  <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {branch.timings}
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full mt-2 sm:mt-3 py-1.5 rounded-full font-semibold text-xs transition-all duration-300 ${
                  branch.isMain
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg'
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                Get Directions
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Map Embed for Main Branch */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-purple-50 border-b">
            <h3 className="text-sm sm:text-base font-bold text-gray-800 text-center">
              Main Campus Location
            </h3>
            <p className="text-xs text-gray-600 text-center mt-0.5">
              Kankarbagh, Patna
            </p>
          </div>
          <div className="aspect-[2/1] sm:aspect-[3/1]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.0958892447647!2d85.1758507!3d25.5940795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82e92!2sKankarbagh%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1635757825150!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Address