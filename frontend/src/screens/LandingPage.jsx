import React from 'react';
import config from '../constants.js';

const LandingPage = ({ onLogin }) => {
  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Background food platter" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Welcome to FoodFleet
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Your next favorite meal is just a click away. Discover and order from the best local restaurants.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => onLogin('customer@manifest.build', 'password')}
            className="w-full sm:w-auto bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Try Demo
          </button>
          <a 
            href={`${config.BACKEND_URL}/admin`} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Admin Panel
          </a>
        </div>
         <p className="text-sm text-gray-300 mt-8">
            Admin Login: admin@manifest.build / admin
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
