'use client'

import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline'

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About Us', id: 'about' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Our Branches', id: 'address' }
  ]

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' }
  ]

  const contactInfo = [
    {
      icon: MapPinIcon,
      label: 'Main Campus',
      value: 'Kankarbagh, Patna, Bihar 800020'
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+91 9876543210'
    },
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'info@brightfutureschool.edu.in'
    },
    {
      icon: GlobeAltIcon,
      label: 'Website',
      value: 'www.brightfutureschool.edu.in'
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* School Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">BF</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Bright Future</h3>
                <p className="text-xs text-gray-300">International School</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
              <span className="text-blue-400 font-semibold">&quot;Shaping Minds, Building Futures&quot;</span>
              <br /><br />
              Empowering students with world-class education, innovative teaching methodologies, 
              and a nurturing environment that prepares them for the challenges of tomorrow. 
              Join us in creating a brighter future for your child.
            </p>

            {/* Social Links */}
            <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  title={social.name}
                >
                  <span className="text-sm sm:text-base">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm block w-full text-center sm:text-left"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
              <li>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base block text-center sm:text-left"
                >
                  Admissions
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base block text-center sm:text-left"
                >
                  Academic Calendar
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contact Info</h4>
            <ul className="space-y-2 sm:space-y-3">
              {contactInfo.map((info) => (
                <li key={info.label} className="flex items-start justify-center sm:justify-start space-x-1 sm:space-x-2">
                  <info.icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="text-center sm:text-left">
                    <p className="text-xs text-gray-400">{info.label}</p>
                    <p className="text-gray-300 text-xs break-words">{info.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Office Hours */}
            <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <h5 className="font-semibold text-blue-400 mb-1 text-xs sm:text-sm text-center sm:text-left">Office Hours</h5>
              <p className="text-xs text-gray-300 text-center sm:text-left">
                Monday - Friday: 8:00 AM - 4:00 PM<br />
                Saturday: 8:00 AM - 1:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-white/10 py-4 sm:py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-gray-400 text-xs text-center md:text-left">
              © 2024 Bright Future International School. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-3 sm:space-x-4 text-xs">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer