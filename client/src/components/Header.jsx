import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/WhatsApp Image 2024-10-25 at 16.48.22_7e29096e.jpg'
const Header = ({ isLoggedIn, handleLogout }) => {
  return (
    <header className="bg-black shadow-md top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo on the left */}
        <Link to="/" className="flex items-center">
          <img 
            src={image1}
            alt="Logo" 
            className="h-12 w-12 mr-2 rounded-full object-cover" 
          />
          <h3 className="text-white text-xl font-bold">WONBYBID</h3>
        </Link>
        
        {/* Right-side Links */}
        <div className="flex items-center space-x-6">
          {/* <Link to="/" className="text-white text-xl transition  hidden lg:block">
            Not a Member Yet? <span className='text-red-500 hover:text-white'> Register Now</span>
          </Link> */}

          {/* Conditional Rendering: Links and Login/Logout */}
          {/* {isLoggedIn ? (
            <>
              <nav className="space-x-6 hidden md:flex">
                <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 transition">
                  Dashboard
                </Link>
                <Link to="/create-team" className="text-gray-600 hover:text-blue-600 transition">
                  Create Team
                </Link>
                <Link to="/contests" className="text-gray-600 hover:text-blue-600 transition">
                  Contests
                </Link>
              </nav>
              <button 
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="border text-white px-4 py-2 rounded hover:bg-red-50 hover:text-red-500 transition">
              Login
            </Link>
          )} */}
        </div>
        
      </div>
    </header>
  );
};

export default Header;
