import React from 'react';
import { motion } from 'framer-motion';
import {useLocation} from 'react-router-dom'

const WeatherDetails = ( ) => {
  const data = useLocation();
  const weatherData = data.state;

  console.log(weatherData);

  const itemVariants = {
    hidden: { opacity: 0, y: 50, duration: 2, delay: 1 },
    visible: { opacity: 1, y: 0, duration: 2, delay: 1 }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-purple-500">
      <motion.div transition={{ duration: 2, delay: 1 }} className="max-w-md w-full p-8 bg-white rounded-3xl shadow-lg">
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1, y: 10 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-cyan-500 mb-8"
        >
          Weather Details
        </motion.h1>
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl font-medium text-gray-600">Location: {weatherData.location.name}</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl font-medium text-gray-600">Temperature: {weatherData.current.temp_c}°C</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl font-medium text-gray-600">Weather: {weatherData.current.condition.text}</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl font-medium text-gray-600">Humidity: {weatherData.current.humidity}%</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl font-medium text-gray-600">Wind Speed: {weatherData.current.wind_kph} kph</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WeatherDetails;
