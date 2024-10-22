import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Product = ({ brandName }) => {
  const [product, setProduct] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      delay: 100,
      anchorPlacement: 'top-bottom',
      mirror: false,
    })

    axios
      .get(`http://127.0.0.1:8000/api/product/`)
      .then(response => {
        setProduct(response.data)
        setLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setLoading(false)
      })
  }, [brandName])

  return (
    <div className="flex  items-center justify-center bg-[#181921]   ">
      <h1 className=" text-4xl font-bold text-green-400 text-center">{product.brand} Products</h1>

      {error ? (
        <div className="text-red-600 text-center">{error}</div>
      ) : (
        product.map((product) => (
          <>
            
            <div
              key={product.id}
              className="w-full md:w-1/2 xl:w-1/3 p-6  mt-10 "
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div className="bg-[#282828] rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-green-400">
                    {product.name}
                  </h2>
                  <p className="text-lg text-white">{product.description}</p>
                </div>
              </div>
            </div>
          </>
        ))
      )}  
    </div>

  )
}

export default Product


