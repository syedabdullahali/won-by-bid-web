import React from 'react';
import Carousel from "../../components/SliderCarousel";
import MissCallSection from './MissCallSection';
import UserRating from './UserRating';
import StepsLayout from './StepsLayout';
import FantasyCricketLanding from './FantasyCricketLanding';
import SportsContent from './SportsContent';
import FAQAccordion from './FAQAccordion';
import TestimonialSlider from './TestimonialSlider';

const Home = () => {
  const handleDownloadAppClick = () => {
    window.open("https://www.transferx.in/trnsfr.YSloVo", "_blank");
  };
  return (
    <div>
      <Carousel />
      <MissCallSection />
      <StepsLayout />
      <FantasyCricketLanding />
      <SportsContent />
      <FAQAccordion />
      <TestimonialSlider />
      <div className=" lg:fixed bottom-0 right-0 p-4 bg-red-500 shadow-md rounded-t-xl sm hidden lg:block ">
        <button onClick={handleDownloadAppClick} className="text-sm font-medium">Download WonByBid app</button>
      </div>
    </div>
  );
};

export default Home;