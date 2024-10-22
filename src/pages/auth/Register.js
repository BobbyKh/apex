import React, { useState } from 'react'
import { FaGoogle, FaInstagram, FaFacebook } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: false,
  delay: 100,
  anchorPlacement: 'top-bottom',
  mirror: false
});

const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/users/', {
        username,
        email,
        password
      })
      if (res.status === 201) {
        window.location.href = '/login'
      } else {
        setError(res.data.message)
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="h-screen bg-[#1A202C] flex flex-col items-center justify-center" data-aos="fade-in">
      <h1 className="text-6xl font-bold text-white">Register</h1>
      <form className="mt-12 flex flex-col w-1/3" data-aos="fade-up" data-aos-delay="200" onSubmit={handleSubmit}>
        <label htmlFor="username" className="text-white text-sm font-bold mb-2">
          Username 
        </label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your username" required />

        <label htmlFor="email" className="text-white text-sm font-bold mb-2 mt-4">
          Email
        </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" required />

        <label htmlFor="password" className="text-white text-sm font-bold mb-2 mt-4">
          Password
        </label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" required />

        <label htmlFor="confirmPassword" className="text-white text-sm font-bold mb-2 mt-4">
          Confirm Password
        </label>
        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" id="confirmPassword" name="confirmPassword" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Confirm your password" required />

        <p className="text-red-500 text-sm font-bold mt-2">{error}</p>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Register
        </button>

        <p className="text-white text-sm font-bold mt-4">or signup with</p>
        
        <div className="flex justify-center items-center mt-4">
          <a href="#" className="text-white hover:text-blue-500">
            <FaFacebook className="mr-2 text-2xl" />
            
          </a>
          <a href="" className="text-white hover:text-blue-500 ml-4">
            <FaGoogle className="mr-2 text-2xl" />
          </a>
          <a href="#" className="text-white hover:text-blue-500 ml-4">
            <FaInstagram className="mr-2 text-2xl" />
          </a>
        </div>
      </form>
    </div>
  )
}

export default Register


