import React, { useState, useEffect } from "react";
import { ArrowRight, MoreVertical } from "lucide-react";
import image1 from "../assets/WhatsApp Image 2024-11-11 at 15.09.50_b465db99.jpg";
import image2 from "../assets/WhatsApp Image 2024-11-11 at 15.09.43_19d63217.jpg";
import image3 from "../assets/first.jpg";

const images = [image3, image1, image2];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDotClick = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDownloadAppClick = () => {
    window.open("https://www.transferx.in/trnsfr.YSloVo", "_blank");
  };

  const handleVisitWebsiteClick = () => {
    window.open("https://example.com/website", "_blank");
  };

  return (
    <div className="relative w-full mx-auto group">
      <div className="relative overflow-hidden  ">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="relative min-w-full">
              {/* Image Container */}
              <div className="relative">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[400px] sm:h-[600px] md:h-[600px] lg:h-[630px] object-cover"
                />
                {/* Three Dot Overlay */}
                <div className="absolute top-4 right-4 flex flex-col items-center">
                  <button 
                    className="p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                    aria-label="More options"
                  >
                    <MoreVertical className="w-6 h-6 text-white" />
                  </button>
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>

              {/* Content Container */}
              {/* <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="max-w-lg space-y-4 sm:space-y-6">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white tracking-tight">
                    WON BY BID
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-md">
                    Join millions of users and start winning big with India's
                    favorite fantasy sports platform.
                  </p>

                
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      onClick={handleDownloadAppClick}
                      className="group flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Download App
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={handleVisitWebsiteClick}
                      className="group flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white hover:bg-gray-100 text-blue-600 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Visit Website
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 transform hover:scale-125
                ${
                  currentIndex === idx
                    ? "bg-white scale-110 w-4 sm:w-6"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;