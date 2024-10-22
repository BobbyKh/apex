import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });

    axios.get("http://127.0.0.1:8000/api/team/")
      .then(response => {
        setTeams(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="bg-white py-24 sm:py-32" data-aos="fade-up">
        <div
          className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="max-w-2xl" data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {teams.map((team) => (
              <li key={team._id}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={team.image}
                    alt={team.name}
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {team.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {team.position}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 bg-[#1A202C]">
        <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h2 className="font-manrope text-5xl text-center font-bold text-white">
            Our Team{" "}
          </h2>
        </div>
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
          {teams.map((team) => (
            <div className="block group md:col-span-2 lg:col-span-1" key={team._id} data-aos="fade-up">
              <div className="relative mb-6">
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-all duration-500"></div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                {team.name}
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                {team.position}
              </span>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Team;

