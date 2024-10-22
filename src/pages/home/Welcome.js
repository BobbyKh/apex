import React from 'react'
import { FaGamepad, FaRobot } from 'react-icons/fa'
import racingVideo from '../../assets/video/welcome.mp4'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    delay: 100,
    anchorPlacement: 'top-bottom',

    mirror: false
})



const Welcome = () => {
  return (
    <div className=" overflow-auto h-screen bg-gray-900 flex flex-col justify-center relative">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={racingVideo} type="video/mp4" />
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-6xl font-bold text-white animate-pulse" data-aos="fade-up">Apex Beyond</h1>
        <div className="flex items-center justify-center mt-4" data-aos="fade-up" data-aos-delay="200">
          <FaGamepad className="text-6xl text-white mr-4" />
          <FaRobot className="text-6xl text-white" />
        </div>
        <h2 className="text-3xl text-white" data-aos="fade-up" data-aos-delay="400">"Experience the Future of Gaming"</h2>
      </div>
    </div>
  )
}

export default Welcome

