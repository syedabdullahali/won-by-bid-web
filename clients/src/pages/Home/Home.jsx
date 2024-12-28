import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { FaArrowDown } from "react-icons/fa";
import Carousel from "../../components/SliderCarousel";
import MissCallSection from "./MissCallSection";
import UserRating from "./UserRating";
import StepsLayout from "./StepsLayout";
import FantasyCricketLanding from "./FantasyCricketLanding";
import SportsContent from "./SportsContent";
import FAQAccordion from "./FAQAccordion";
import TestimonialSlider from "./TestimonialSlider";
import Toprated from "./Toprated";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleDownloadAppClick = () => {
    window.open("https://www.transferx.in/trnsfr.YSloVo", "_blank");
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const downloadBtn = document.querySelector(".download-btn");
    const arrowIcon = document.querySelector(".arrow-icon");
    const borderElement = document.querySelector(".animated-border");

    if (downloadBtn && arrowIcon && borderElement) {
      if (scrolled) {
        // Button slide in animation
        gsap.to(".download-btn", {
          duration: 0.5,
          opacity: 1,
          y: 610,
          ease: "power2.out",
        });

        // Continuous rotate animation for arrow
        gsap.to(arrowIcon, {
          rotation: 360,
          duration: 2,
          repeat: -1,
          ease: "none",
        });

        // Pulsing border animation
        gsap.to(borderElement, {
          scale: 1.2,
          opacity: 0,
          duration: 1.5,
          repeat: -1,
          ease: "power1.inOut",
        });
      } else {
        // Reset animations when scrolling back up
        gsap.to(".download-btn", {
          duration: 0.5,
          opacity: 0,
          y: -100,
          ease: "power2.out",
          onComplete: () => {
            gsap.killTweensOf(arrowIcon);
            gsap.killTweensOf(borderElement);
          },
        });
      }
    }
  }, [scrolled]);

  return (
    <div className="relative">
      <Carousel />
      <MissCallSection />
      <Toprated />
      <StepsLayout />
      <FantasyCricketLanding />
      <SportsContent />
      <FAQAccordion />
      {/* <TestimonialSlider /> */}

      {/* Download Button for Mobile View */}
      <div className="lg:hidden  fixed top-7 right-4 overflow-visible">
        {/* Animated border element */}
        <div className="animated-border hidden absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 rounded-full" />

        {/* Main button */}
        <div className="download-btn relative p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 shadow-md rounded-full overflow-hidden opacity-0 -translate-y-24">
          <button
            onClick={handleDownloadAppClick}
            className="text-sm font-medium flex items-center justify-center rounded-full w-6 h-6 bg-white bg-opacity-20 backdrop-blur-sm"
          >
            <FaArrowDown className="arrow-icon text-white" />
          </button>
        </div>
      </div>

      {/* Download Button for Desktop View */}
      <div className="lg:fixed bottom-0 right-0 p-4 bg-red-500 shadow-md rounded-t-xl hidden lg:block">
        <button
          onClick={handleDownloadAppClick}
          className="text-sm font-medium text-white"
        >
          Download WonByBid app
        </button>
      </div>
    </div>
  );
};

export default Home;
