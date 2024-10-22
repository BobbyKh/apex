import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaGamepad } from 'react-icons/fa'

const Event = () => {
  const [bgColor, setBgColor] = useState('#1A202C')
  const handleScroll = () => {
    const top = window.scrollY || document.documentElement.scrollTop
    const newBgColor = top > 100 ? '#2F3640' : '#1A202C'
    setBgColor(newBgColor)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    delay: 100,
    anchorPlacement: 'top-bottom',
    mirror: false
  })
  return (
    <div style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Upcoming Events</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
          <div className="col-span-1 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6">
              <FaGamepad className="h-10 w-10 text-gray-900" />
              <h3 className="text-lg font-medium leading-6 text-gray-900 mt-2">
                Sci-Fi Animation
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6">
              <FaGamepad className="h-10 w-10 text-gray-900" />
              <h3 className="text-lg font-medium leading-6 text-gray-900 mt-2">
                Gaming Animation
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6">
              <FaGamepad className="h-10 w-10 text-gray-900" />
              <h3 className="text-lg font-medium leading-6 text-gray-900 mt-2">
                Online Gaming
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6">
              <FaGamepad className="h-10 w-10 text-gray-900" />
              <h3 className="text-lg font-medium leading-6 text-gray-900 mt-2">
                Gaming Tournaments
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6">
              <FaGamepad className="h-10 w-10 text-gray-900" />
              <h3 className="text-lg font-medium leading-6 text-gray-900 mt-2">
                Game Development
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6">
              <FaGamepad className="h-10 w-10 text-gray-900" />
              <h3 className="text-lg font-medium leading-6 text-gray-900 mt-2">
                Game Design
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event

