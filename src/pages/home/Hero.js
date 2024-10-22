import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: false,
  mirror: false
})

const Hero = () => {
  return (
    <div className="bg-[#1A202C] overflow-auto text-white h-screen flex flex-col items-center justify-center opacity-90" style={{ backgroundImage: 'url(https://assetsio.gnwcdn.com/grand-theft-auto-5-1647623589100.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp)', backgroundSize: 'cover', opacity: 0.9 }} >
      <h1 className="text-6xl font-bold" data-aos="fade-up">
        Game On!
      </h1>
      
      <p className="text-2xl mt-4" data-aos="fade-up" data-aos-delay="200">
        Explore the world of gaming, from the latest news to reviews and walkthroughs.
      </p>
      <div className="mt-12 flex" data-aos="fade-up" data-aos-delay="400">
        <a href="#" className="bg-white text-gray-900 px-6 py-3 rounded-md mr-4">
          Read More
        </a>
        <a href="#" className="bg-gray-700 text-white px-6 py-3 rounded-md">
          Watch Trailer
        </a>
      </div>
    </div>
  )
}

export default Hero

