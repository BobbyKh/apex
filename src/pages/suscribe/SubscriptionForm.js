import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const SubscriptionForm = () => {
  const { planId, planName } = useParams(); // Retrieve the plan ID and name from the URL
  const [formData, setFormData] = useState({  name: '', email: '', address: '', phone: '', suscription: '', payment_by: '', payment_receipt: ''  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataObj = new FormData();
    Object.keys(formData).forEach(key => {
      formDataObj.append(key, formData[key]);
    });

    axios.post(`http://127.0.0.1:8000/api/subscribe/${planId}/`, formDataObj)
      .then(() => {
        setLoading(false);
        alert('Subscription successful!');
        navigate('/Success')
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert('Subscription failed. Please try again.');
      });
  };

  return (
    <div className="bg-gradient-to-r from-[#141a20] to-[#1a202c] flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-white">Subscribe {planName} </h1>
      <form onSubmit={handleSubmit} className="bg-[#1a202c] p-8 rounded-lg shadow-lg w-full max-w-md" encType='multipart/form-data'>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Game Username</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Suscription</label>
          <select
            name="suscription"
            value={formData.suscription}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black rounded"
            required
          >
            <option value="">Select a suscription</option>
            <option value="1">Gold</option>
            <option value="2">Silver</option>
            <option value="3">Bronze</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Payment Method</label>
          <select
            name="payment_by"
            value={formData.payment_by}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black rounded"
            required
          >
            <option value="">Select a payment method</option>
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank_transfer">Bank Transfer</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Payment Receipt</label>
          <input
            type="file"
            name="payment_receipt"
            onChange={handleChange}
            className="w-full px-3 py-2 text-black rounded"
            required
          />
        </div>
        <button
          type="submit"
          className={`bg-[#34d399] hover:bg-[#2d8763] text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default SubscriptionForm;

