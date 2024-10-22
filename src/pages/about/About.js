import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 200
    })
  }, [])
  return (
    <>
    <div className="relative isolate overflow-hidden bg-gray-900  py-24 sm:py-32" data-aos="fade-up">
      <img src="https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529367.jpg?w=996&t=st=1727967789~exp=1727968389~hmac=68903bdfb0312b22507fbcc4c1c304554a531b85e1234db42db62efe0dadc86a" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" data-aos="fade-up" data-aos-delay="200"></img>
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true" data-aos="fade-up" data-aos-delay="600">
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-up" data-aos-delay="300">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Who we are </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none" data-aos="fade-up" data-aos-delay="400">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <a href="#">Open roles <span aria-hidden="true">&rarr;</span></a>
            <a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>
            <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
            <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up" data-aos-delay="`400`">
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Offices worldwide</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Full-time colleagues</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Hours per week</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Paid time off</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    </>
  )
}

export default About


