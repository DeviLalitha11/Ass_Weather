import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Weather() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const API_KEY = 'c0194c8de52145f082e143342242407'; // Replace with your WeatherAPI key

  const SubmitHandler = async (data) => {
    try {
      // Fetch weather data for the entered location
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${data.location}`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data. Please check the location.');
      }

      const weatherData = await response.json();
console.log(weatherData);
      toast.success('Weather data fetched successfully!');
      setTimeout(() => {
        navigate('/weatherdetails', { state:weatherData });
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className='w-screen h-screen bg-gradient-to-r from-yellow-500 to-red-400'>
      <div className="flex items-center justify-center mb-12">
        <motion.div
          className="mt-10 max-w-md w-92 mx-auto p-8 rounded-xl bg-white"
          initial={{ opacity: 0, y: -20, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.h1 initial={{ scale: 0.7 }} animate={{ scale: 1 }} transition={{ duration: 2 }} className="text-xl md:text-2xl font-semibold text-center mb-8">Enter Location</motion.h1>
          <form onSubmit={handleSubmit(SubmitHandler)}>
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
            <div className="mb-6">
              <motion.label initial={{ scale: 0.7 }} animate={{ scale: 1 }} transition={{ duration: 2 }} className="block text-gray-900 mb-2 text-lg md:text-xl" htmlFor="location">
                Location
              </motion.label>
              <motion.input
                {...register('location')}
                type="text"
                id="location"
                className="w-64 px-3 py-2 text-lg md:text-base border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your location"
                required
                initial={{ opacity: 0, x: -20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 2 }}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <motion.button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white text-lg md:text-xl py-2 px-4 mb-4 rounded-lg focus:outline-none focus:shadow-outline w-full md:w-auto"
                initial={{ opacity: 0, y: 20, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 2 }}
              >
                Search
              </motion.button>
            </div>
          </form>
        </motion.div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Weather;
