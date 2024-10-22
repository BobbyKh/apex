import React, { useEffect, useState } from "react";
import { FaGamepad } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: false,
  mirror: false,
});

const Suscribe = () => {
  const [selectedPlan, setSelectedPlan] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/suscription/")
      .then((response) => {
        setSelectedPlan(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#141a20] to-[#1a202c] flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-white" data-aos="fade-up">
        Choose Your Plan
      </h1>
      <div
        key={selectedPlan}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
      >
        {selectedPlan.map((plan) => (
          <div
            key={plan.id}
            className="bg-[#1a202c] p-4 rounded-lg shadow-lg"
            data-aos="flip-down"
            data-aos-delay="200"
          >
            <h1 className="text-3xl font-bold text-white">{plan.name}</h1>
            <span className="text-white font-bold">{plan.price}</span>
            <p className="text-white">{plan.description}</p>
            <Link to={`/form/${plan.id}/${plan.name}`}>
              <button className="bg-[#34d399] hover:bg-[#2d8763] text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110 mt-4 flex items-center">
                <FaGamepad className="mr-2" />
                Subscribe
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suscribe;
