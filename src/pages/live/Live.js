import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Live = () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    mirror: false,
  })

  return (
    <section className="bg-[#181921]  py-8" data-aos="fade-up">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl font-bold text-green-800">Now Live Streams</h2>
          <p className="mt-2 text-xl text-gray-600">
            Watch live game streams from popular streamers and gamers around the world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-white rounded-lg">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <div className="bg-white rounded-lg ">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <div className="bg-white rounded-lg ">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Live
