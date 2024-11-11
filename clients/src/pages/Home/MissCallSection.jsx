import React from 'react';
import image1 from '../../assets/misscsll.png';
const MissCallSection = () => {
  return (
    <div className="">
      {/* Section Wrapper */}
     

       

        {/* Image Section */}
        <div className="w-full  flex justify-center">
          <img 
            // src="https://rcmg.in/fantasy/landingimg/acquistion/newlp2/give-a-missed-call-top-banner.jpg" 
            src={image1}
            alt="My11Circle Logo"
            className="h-[150px] w-full object-cover"
          />
        </div>

 
    </div>
  );
};

export default MissCallSection;
