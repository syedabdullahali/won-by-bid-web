import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/lastlogo.jpg";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const handleDownloadAppClick = () => {
    window.open("https://www.transferx.in/trnsfr.YSloVo", "_blank");
  };

  return (
    <header className="bg-black shadow-md top-0 z-50">
      <div className=" flex justify-between items-center p-4">
        {/* Logo on the left */}
        <Link to="/" className="flex items-center">
          <img
            src={image1}
            alt="Logo"
            className="h-16 w-16 mr-2 rounded-full object-cover"
          />
          <h3 className="text-white text-xl font-bold">WONBYBID</h3>
        </Link>

        {/* Download button on the right */}
        <button
          onClick={handleDownloadAppClick}
          className="group flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Download App
        </button>
      </div>
    </header>
  );
};

export default Header;