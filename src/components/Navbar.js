import React, { useState, useEffect } from 'react'
import { FaGamepad, FaHome, FaRobot, FaStream, FaUser , FaPowerOff, FaSignInAlt } from 'react-icons/fa'
import { BiGame } from 'react-icons/bi'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import { FaBucket, FaGoogle } from 'react-icons/fa6'
import axios from 'axios'

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  delay: 100,
  anchorPlacement: 'top-bottom',
  mirror: false,
})

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // Control dropdown state
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token')
    if (token) {
      setUser(token)
    }

    fetch('http://127.0.0.1:8000/api/users/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.email)
      })
      .catch((error) => {
        console.log(error)
      })

    // Refresh AOS

    AOS.refresh()
  }, [])

  const [profile, setProfile] = useState({})

  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await axios.get('http://127.0.0.1:8000/api/userprofile/')
      setProfile(data[0])
    }
    fetchProfile()
    console.log(profile)
  }, [])


  return (
    <nav className="bg-[#181921] " data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-duration="100" data-aos-once="true" data-aos-offset="200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between sm:items-stretch">
            {/* Logo and Home Link */}
            <Link to="/" className="flex items-center">
              <img className="h-8 w-auto sm:h-10" src="apex.jpg" alt="Workflow" data-aos="fade-right" />
              <span className="text-white px-3 py-2 rounded-md text-sm font-medium">Apex Beyond</span>
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)} data-aos="fade-right">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Links */}
            
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium flex items-center" data-aos="fade-right">
                <FaHome className="mr-2" />
                Home
              </Link>

              <div className="relative">
              

                {!user && (
                  <Link to="/login" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center" data-aos="fade-right" data-aos-delay="200">
                    <FaGamepad className="mr-2" />
                    Tournaments
                    <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                )}
                {user && (
                  <button
                    className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <FaGamepad className="mr-2" />
                    Tournaments
                    <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              

                {isDropdownOpen && (
                  <div className="absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 right-0 top-full mt-2">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <Link to="/tournaments" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Active Tournaments
                        </Link>
                      </li>
                      <li>
                        <Link to="/upcoming" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Upcoming Events
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <Link to="/live" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center" data-aos="fade-right" data-aos-delay="300">
                <FaStream className="mr-2" />
                Watch Live
              </Link>

              <Link to="/affiliate" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center" data-aos="fade-right" data-aos-delay="400">
                <FaUser className="mr-2" />
                Affiliate
              </Link>

              <Link to="/about" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center" data-aos="fade-right" data-aos-delay="500">
                <FaRobot className="mr-2" />
                About
              </Link>
              {localStorage.getItem('token') ? (
                <>

                  <Link to="/profile" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center" data-aos="fade-right" data-aos-delay="600">
                    
                    <FaUser className="mr-2" />
                    {profile.user}
                  
                  </Link>
                  <button className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center" onClick={() => { localStorage.removeItem('token'); window.location.href = '/login' }} data-aos="fade-right" data-aos-delay="700">
                    <FaPowerOff className="mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center" data-aos="fade-right" data-aos-delay="600">
                  <FaSignInAlt className="mr-2" />
                  Login
                </Link>
              )}
{localStorage.getItem('token') ? (
    <Link to="/subscribe" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center" data-aos="fade-right" data-aos-delay="700">
        <FaBucket className="mr-2" />
        Suscribe
    </Link>
) : null}
              {/* Other Links */}
            </div>
          </div>

          {/* Mobile Links */}
         
        </div>
        <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden  flex-col gap-2 z-10 bg-gray-900 p-4 rounded-md shadow-lg` }  >
            <Link to="/" className="text-gray-400 px-3 py-2 rounded-md text-sm font-medium flex items-center hover:text-white transition duration-300 ease-in-out" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link to="/tournaments" className="text-gray-400 px-3 py-2 rounded-md text-sm font-medium flex items-center hover:text-white transition duration-300 ease-in-out" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="200">
              <FaGamepad className="mr-2" />
              Tournaments
            </Link>
            <Link to="/live" className="text-gray-400 px-3 py-2 rounded-md text-sm font-medium flex items-center hover:text-white transition duration-300 ease-in-out" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="300">
              <FaStream className="mr-2" />
              Watch Live
            </Link>
            <Link to="/affiliate" className="text-gray-400 px-3 py-2 rounded-md text-sm font-medium flex items-center hover:text-white transition duration-300 ease-in-out" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="400">
              <FaBucket className="mr-2" />
              Affiliates
            </Link>
            <Link to="/about" className="text-gray-400 px-3 py-2 rounded-md text-sm font-medium flex items-center hover:text-white transition duration-300 ease-in-out" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="500">
              <FaRobot className="mr-2" />
              About
            </Link>
            <Link to="/login" className="text-gray-400 px-3 py-2 rounded-md text-sm font-medium flex items-center hover:text-white transition duration-300 ease-in-out" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="600">
              <FaUser className="mr-2" />
              Login
            </Link>
            <Link to="/suscribe" className="text-gray-400 px-3 py-2 rounded-md text-sm font-medium flex items-center hover:text-white transition duration-300 ease-in-out" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="700">
              <FaGamepad className="mr-2" />
              Suscribe
            </Link>
            {/* Add other mobile links here */}
          </div>
      </div>
      
    </nav>
  )
}

export default Navbar

