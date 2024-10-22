import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await axios.get(
        "http://127.0.0.1:8000/api/userprofile/"
      );
      setProfile(data[0]);
    };
    fetchProfile();
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-in"
      className="container mx-auto px-6 md:px-12 bg-[#181921] rounded-lg p-6"
    >
      <div className="flex flex-col items-center justify-between">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-[#f1f1f1] text-center">
            Profile
          </h1>
          <p className="mt-2 text-[#e2d3d3]">Your profile information.</p>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <div className="flex flex-col">
            <div
              data-aos="fade-up"
              className="bg-[#2f3640] rounded-lg p-4 mt-4 "
            >
              <p className="font-bold text-[#f1f1f1]">Profile Image:</p>
              <img
                src={profile.image}
                alt="profile"
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />
            </div>
            <div
              data-aos="fade-up"
              className="bg-[#2f3640] rounded-lg p-4 mt-4 "
            >
              <p className="font-bold text-[#f1f1f1]">Name:</p>
              <p className="text-[#f1f1f1]">{profile.user}</p>
            </div>
            <div
              data-aos="fade-up"
              className="bg-[#2f3640] rounded-lg p-4 mt-4"
            >
              <p className="font-bold text-[#f1f1f1]">Phone:</p>
              <p className="text-[#f1f1f1]">{profile.phone}</p>
            </div>
            <div
              data-aos="fade-up"
              className="bg-[#2f3640] rounded-lg p-4 mt-4"
            >
              <p className="font-bold text-[#f1f1f1]">Subscription:</p>
              <p className="text-[#f1f1f1]">{profile.suscription}</p>
            </div>
            <div
              data-aos="fade-up"
              className="bg-[#2f3640] rounded-lg p-4 mt-4"
            >
              <p className="font-bold text-[#f1f1f1]">Joined:</p>
              <p className="text-[#f1f1f1]">{profile.joined_date}</p>
            </div>
            <div
              data-aos="fade-up"
              className="bg-[#2f3640] rounded-lg p-4 mt-4"
            >
              <p className="font-bold text-[#f1f1f1]">Expiry Date:</p>
              <p className="text-[#f1f1f1]">{profile.expiry_date}</p>
            </div>
            <div
              data-aos="fade-up"
              className="bg-[#2f3640] rounded-lg p-4 mt-4"
            >
              <p className="font-bold text-[#f1f1f1]">Status:</p>
              <p className="text-[#f1f1f1]">
                {profile.status ? "Active" : "Expired"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

