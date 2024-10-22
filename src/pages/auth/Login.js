import React, { useState } from 'react'
import { FaGamepad, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://127.0.0.1:8000/api/login/', {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data)
        localStorage.setItem('token', response.data.token)
        window.location.href = '/'
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setErrors(error.response.data)
        } else {
          setErrors({ non_field_errors: 'Oops! Something went wrong.' })
        }
      })
  }

  const handleGoogleLogin = () => {
    window.open(
      'http://127.0.0.1:8000/api/auth/google-oauth2/?next=/',
      '_self'
    )
  }

  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://assetsio.gnwcdn.com/grand-theft-auto-5-1647623589100.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp)' }}>
      <div className="container mx-auto p-4 flex justify-center items-center h-screen">
        <div className="w-full md:w-1/3 bg-gray-900 p-6 rounded-lg shadow-lg" data-aos="fade-in" data-aos-delay="200">
          <h1 className="text-4xl font-bold text-white">Login</h1>
          <form className="mt-4" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="400">
            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                Email
              </label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
                Password
              </label>
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
              <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={handleGoogleLogin}>
                <FaGoogle className="mr-2" />
                Sign up with Google
              </button>
              <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                <FaGamepad className="mr-2" />
                Register
              </Link>
            </div>
            {Object.keys(errors).length > 0 && (
              <div className="mt-4">
                {Object.keys(errors).map((key) => (
                  <p key={key} className="text-red-500 text-sm">{errors[key]}</p>
                ))}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

