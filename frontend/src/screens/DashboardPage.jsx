import React, { useEffect, useState } from 'react';
import config from '../constants.js';

const DashboardPage = ({ user, restaurants, onLogout, onLoadRestaurants, onCreateRestaurant }) => {
  const [newRestaurant, setNewRestaurant] = useState({ name: '', description: '', cuisine: '' });

  useEffect(() => {
    if (user) {
      onLoadRestaurants();
    }
  }, [user, onLoadRestaurants]);

  const handleCreateRestaurant = async (e) => {
    e.preventDefault();
    if (!newRestaurant.name || !newRestaurant.cuisine) {
      alert('Please fill in all fields.');
      return;
    }
    await onCreateRestaurant(newRestaurant);
    setNewRestaurant({ name: '', description: '', cuisine: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">FoodFleet</h1>
            <p className="text-gray-600">Welcome, {user.name}! ({user.role})</p>
          </div>
          <div className="flex items-center space-x-4">
             <a 
              href={`${config.BACKEND_URL}/admin`} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition"
            >
              Admin
            </a>
            <button 
              onClick={onLogout}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Create New Restaurant Form */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Add a New Restaurant</h2>
          <form onSubmit={handleCreateRestaurant} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <input
                type="text"
                placeholder="Restaurant Name"
                value={newRestaurant.name}
                onChange={(e) => setNewRestaurant({...newRestaurant, name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                required
              />
               <input
                type="text"
                placeholder="Cuisine Type (e.g., Italian)"
                value={newRestaurant.cuisine}
                onChange={(e) => setNewRestaurant({...newRestaurant, cuisine: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                required
              />
              <textarea
                placeholder="Short Description"
                value={newRestaurant.description}
                onChange={(e) => setNewRestaurant({...newRestaurant, description: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-md md:col-span-2 focus:ring-green-500 focus:border-green-500"
                rows="1"
              />
              <button type="submit" className="w-full md:w-auto md:col-span-1 bg-green-600 text-white px-4 py-3 rounded-md font-semibold hover:bg-green-700 transition">
                Add Restaurant
              </button>
            </div>
          </form>
        </div>

        {/* Restaurants List */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Restaurants</h2>
          {restaurants.length === 0 ? (
            <div className="text-center bg-white p-8 rounded-lg shadow">
                <p className="text-gray-500">No restaurants found. Add one above to get started!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map(restaurant => (
                <div key={restaurant.id} className="bg-white rounded-lg shadow overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                    {/* Image placeholder - In a real app, you would use restaurant.image.url */}
                    <span>Image (Upload in Admin)</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{restaurant.name}</h3>
                    <p className="text-sm text-green-700 font-medium my-1">{restaurant.cuisine}</p>
                    <p className="text-gray-600 text-sm line-clamp-2">{restaurant.description}</p>
                    <p className="text-xs text-gray-400 mt-2">Owner: {restaurant.owner?.name || 'N/A'}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
