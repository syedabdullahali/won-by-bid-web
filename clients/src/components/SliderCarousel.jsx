import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/WhatsApp Image 2024-11-11 at 15.09.50_b465db99.jpg";
import image2 from "../assets/WhatsApp Image 2024-11-11 at 15.09.43_19d63217.jpg";
import image3 from "../assets/first.jpg";

const images = [image3, image1, image2];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDownloadAppClick = () => {
    window.open("https://www.transferx.in/trnsfr.YSloVo", "_blank");
  };

  const handleVisitWebsiteClick = () => {
    window.open("https://example.com/website", "_blank");
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Carousel Track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* Carousel Images */}
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-full relative aspect-video"
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6 lg:p-8">
                <div className="max-w-lg">
                  <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
                    WON BY BID
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 max-w-md">
                    Join millions of users and start winning big with India's favorite fantasy sports platform.
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownloadAppClick}
                      className="flex items-center justify-center px-4 py-2 sm:px-6 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm sm:text-base transition-colors duration-300 gap-2"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 3a1 1 0 011 1v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1h6zM7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7z"/>
                        <path d="M10 16a1 1 0 100-2 1 1 0 000 2z"/>
                      </svg>
                      Download App
                    </button>
                    <button
                      onClick={handleVisitWebsiteClick}
                      className="flex items-center justify-center px-4 py-2 sm:px-6 bg-white hover:bg-gray-100 text-blue-600 rounded-full text-sm sm:text-base transition-colors duration-300 gap-2"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"/>
                      </svg>
                      Visit Website
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots and Controls */}
        <div className="absolute bottom-4 w-full flex justify-center items-center gap-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-1.5 bg-black/30 hover:bg-black/50 rounded-full text-white/75 hover:text-white transition-all duration-300 text-xs sm:text-sm"
            aria-label={isAutoPlaying ? "Pause" : "Play"}
          >
            {isAutoPlaying ? "⏸" : "▶"}
          </button>
          
          <div className="flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300
                  ${currentIndex === idx 
                    ? "bg-white scale-110" 
                    : "bg-white/50 hover:bg-white/75"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;