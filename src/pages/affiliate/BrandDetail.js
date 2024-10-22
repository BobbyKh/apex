import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BrandDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/brand/${id}/products/`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [id]);

  return (
    <div className="flex flex-wrap justify-center bg-[#181921] p-4">
      {error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        products.map((product) => (
          <div key={product.id} className="w-full md:w-1/2 xl:w-1/3 p-6 mt-10" data-aos="fade-up">
            <div className="bg-[#282828] rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-t-2xl" />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-green-400">{product.name}</h2>
                <p className="text-gray-400">{product.description}</p>
                <p className="text-xl font-bold text-green-400">${product.price}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BrandDetail;
