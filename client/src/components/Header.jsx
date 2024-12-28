import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/lastlogo.jpg";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const handleDownloadAppClick = () => {
    window.open("https://www.transferx.in/trnsfr.YSloVo", "_blank");
  };

  return (
    <>
      <header className=" shadow-md top-0 z-50">
        <div className=" flex justify-between items-center p-2">
          {/* Logo on the left */}
          <Link to="/" className="flex items-center">
            <img
              src={image1}
              alt="Logo"
              className="h-16 w-16 mr-2 rounded-full object-cover"
            />
            <h3 className="text-white text-md lg:text-xl font-bold">WONBYBID</h3>
          </Link>

          {/* Download button on the right */}
          <button
            onClick={handleDownloadAppClick}
            className=" lg:block group flex  items-center justify-center lg:px-6 lg:py-3 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Download App
          </button>
        </div>
      </header>

      <div id="#123">

      </div>
    </>
  );
};

export default Header;
