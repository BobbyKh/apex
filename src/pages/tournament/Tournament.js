import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import tournmanentvideo from "../../assets/video/tournament.mp4";
import {Link} from 'react-router-dom'

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: false,
  delay: 100,
  anchorPlacement: "top-bottom",
  mirror: false,
});
const styles = {
  container: {
    backgroundColor: "#1a202c",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  title: {
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    color: "#fff",
    fontSize: "16px",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#34d399",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#2d8763",
    },
  },
};
const Tournament = () => {
  return (
    <div className="bg-gray-900 py-20 relative">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        data-aos="fade-in"
      >
        <source src={tournmanentvideo} type="video/mp4" />
      </video>
      <div className="container mx-auto p-4" style={styles.container}>
        <h1
          className="text-6xl font-bold text-white"
          data-aos="fade-up"
          style={styles.title}
        >
          Live Tournament
        </h1>
        <p
          className="text-2xl text-white"
          data-aos="fade-up"
          data-aos-delay="200"
          style={styles.description}
        >
          Compete against other teams and players in epic tournaments and win
          prizes
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div
            className="bg-gray-900 shadow-lg rounded-lg overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="bg-gray-800 p-4">
              <div className="flex items-center">
                <img
                  src="https://i.imgur.com/4JrJX3c.png"
                  className="w-24 h-24 mx-auto"
                  alt="PUBG Logo"
                />
                <div className="ml-4">
                  <h2 className="text-3xl font-bold text-white">PUBG</h2>
                  <p className="text-xl text-white">Earn Per Kill</p>
                  <p className="text-lg text-white">Now Playing: 200</p>
                  <p className="text-lg text-white">Live</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 p-4">
              <button
                className="bg-blue-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full w-full"
                data-aos="zoom-in"
                data-aos-delay="600"
                style={styles.button}
              >
                Watch Live
              </button>
            </div>
          </div>
          <div
            className="bg-gray-900 shadow-lg rounded-lg overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <div className="bg-gray-800 p-4">
              <div className="flex items-center">
                <img
                  src="https://i.imgur.com/3bTqS3K.png"
                  className="w-24 h-24 mx-auto"
                  alt="Call of Duty Logo"
                />
                <div className="ml-4">
                  <h2 className="text-3xl font-bold text-white">
                    Call of Duty
                  </h2>
                  <p className="text-xl text-white">Online</p>
                  <p className="text-lg text-white">Total Players: 500</p>
                  <p className="text-lg text-white">Live</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 p-4">
              <button
                className="bg-blue-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full w-full"
                data-aos="zoom-in"
                data-aos-delay="1000"
                style={styles.button}
              >
                Join Now
              </button>
            </div>
          </div>
          <div
            className="bg-gray-900 shadow-lg rounded-lg overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="1200"
          >
            <div className="bg-gray-800 p-4">
              <div className="flex items-center">
                <img
                  src="https://i.imgur.com/4JrJX3c.png"
                  className="w-24 h-24 mx-auto"
                  alt="PUBG Logo"
                />
                <div className="ml-4">
                  <h2 className="text-3xl font-bold text-white">PUBG</h2>
                  <p className="text-xl text-white">Earn per kill</p>
                  <p className="text-lg text-white">Now Playing: 200</p>
                  <p className="text-lg text-white">Live</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-700 p-4">
              <Link to="/entryform">
                <button
                  className="bg-blue-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full w-full"
                  data-aos="zoom-in"
                  data-aos-delay="1400"
                  style={styles.button}
                >
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
