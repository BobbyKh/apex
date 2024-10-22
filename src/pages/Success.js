import React from 'react';
import { FaGamepad } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Success = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-black to-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <FaGamepad className="text-5xl text-yellow-500 mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">Subscription Successful!</h1>
        <p className="text-gray-300 mb-6">Thank you for subscribing. We're excited to have you on board!</p>
        <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full hover:bg-yellow-600 transition-transform transform hover:scale-105">
          <Link to="/profile" className="text-gray-900">Profile Page</Link>
        </button>
      </div>
    </div>
  );
};

export default Success;

