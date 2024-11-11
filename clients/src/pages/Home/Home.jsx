import React from 'react'
import Carousel from "../../components/SliderCarousel";
import MissCallSection from './MissCallSection';
import UserRating from './UserRating';
import StepsLayout from './StepsLayout';
import FantasyCricketLanding from './FantasyCricketLanding';
import SportsContent from './SportsContent';
import FAQAccordion from './FAQAccordion';
import TestimonialSlider from './TestimonialSlider';

const Home = () => {
  return (
    <div>
      <Carousel />
      <MissCallSection/>
      <UserRating/>
      <StepsLayout/>
      <FantasyCricketLanding/>
      <SportsContent/>
      <FAQAccordion/>
      <TestimonialSlider/>
      
    </div>
  )
}

export default Home
