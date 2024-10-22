import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-12 pb-8 text-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2">
            <div className="text-xl font-bold">Apex Beyond</div>
            <p className="mt-2">The ultimate gaming experience.</p>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <div className="flex items-center justify-center">
              <a href="https://www.instagram.com/">
                <FaInstagram className="w-8 h-8 ml-4 mr-4" />
              </a>
              <a href="https://www.facebook.com/">
                <FaFacebook className="w-8 h-8 ml-4 mr-4" />
              </a>
              <a href="https://twitter.com/">
                <FaTwitter className="w-8 h-8 ml-4 mr-4" />
              </a>
              <a href="https://www.youtube.com/">
                <FaYoutube className="w-8 h-8 ml-4 mr-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer