import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    delay: 100,
    anchorPlacement: 'top-bottom',
    mirror: false
})

const Store = () => {

  const [brand, setBrand] = useState([])
  const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/brand/')
          .then(response => {
            setBrand(response.data)
          })
          .catch(error => {
            setError(error.message)
          })
      }, [])

  return (
    
    <div className="flex flex-wrap-reverse items-center justify-center bg-[#181921]   " >
      {error ? (
        <div className="text-red-600 text-center">{error}</div>
      ) : (
        brand.map((brand) => (
          <>
       
          <Link key={brand.id} to={`/brand/${brand.id}`} className="w-full md:w-1/2 xl:w-1/3 p-6  mt-10 " data-aos="zoom-in" data-aos-duration="2000">
            
            <div className="bg-[#282828] rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <img src={brand.image} alt={brand.name} className="w-full h-60 object-cover rounded-t-2xl" />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-green-400">{brand.name}</h2>
                <p className="text-gray-400">{brand.description}</p>
                <p className="text-xl font-bold text-green-400">{brand.price}</p>
              </div>
            </div>
          </Link>
          </>
        ))
      )}
        
    </div>

    
  )
}

export default Store


