import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import { useState, useEffect } from 'react'




const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
            mirror: false
        })

        axios.get('http://127.0.0.1:8000/api/service/').then(res => {
            setServices(res.data)
        }).catch(err => {
            console.error(err)

        })

    }, [])

  return (
    <section className="bg-[#181921] py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl font-bold text-white" data-aos="fade-up" data-aos-delay="400">Our Services</h2>
          <p className="mt-2 text-xl text-gray-300" data-aos="fade-up" data-aos-delay="600">
            We offer a wide range of services to help you improve your gaming experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div className="bg-[#2f3640] rounded-lg p-8 shadow-lg" key={service._id} data-aos="fade-up" data-aos-delay={800 + (service._id * 200)}>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white overflow-hidden">
                    <img src={service.image} className="w-full h-full object-cover" alt={service.name} />
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-cyan-50" data-aos="fade-up" data-aos-delay={1000 + (service._id * 200)}>{service.name}</h3>
                <p className="mt-2 text-white" data-aos="fade-up" data-aos-delay={1200 + (service._id * 200)}>{service.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Services

