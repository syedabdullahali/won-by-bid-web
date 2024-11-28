import React from "react";
import { ArrowRight, Download, Star, Coins } from "lucide-react";
import { FaRupeeSign } from "react-icons/fa";
const WonByBidLanding = () => {
  const handleDownloadAppClick = () => {
    window.open("https://www.transferx.in/trnsfr.YSloVo", "_blank");
  };

  const handleVisitWebsiteClick = () => {
    // Add your visit website logic here
  };

  return (
    <div className="bg-gray-50 flex flex-col justify-between ">
      <div className=" text-black py-4 flex-grow-0">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center max-w-5xl gap-2">
          {/* <p className="text-lg sm:text-xl md:text-2xl p-2 bg-slate-100 text-black/90  rounded-lg  leading-relaxed">
            "Join thousands of winners and start bidding big on India's top
            skill-based biding platform – where every unique bid brings you
            closer to victory!"
          </p> */}

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold p-3  text-red-600 tracking-tight">
            World's First APP
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl  text-black/90 font-bold bg-slate-100 p-2 rounded-lg  leading-relaxed">
            World's First Skill-Based App Delivering 20x Faster Results
          </p>

          <p className="text-lg sm:text-xl md:text-2xl text-black/90 font-medium p-2 bg-slate-100 rounded-lg  leading-relaxed">
            Experience outcomes in minutes, not hours. WonByBid brings you the
            best and most exciting gaming experience.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl  p-2 bg-slate-100 font-bold text-black/90  rounded-lg  leading-relaxed">
            "Joined thousands of winners and start bidding big on India's top
            skill-based biding platform – where every unique bid brings you
            closer to victory!"
          </p>

          <p className="text-lg sm:text-xl md:text-2xl bg-slate-100 font-medium text-black/90 p-4 rounded-lg  leading-relaxed">
            In just 10 days, WonByBid has become the talk of the town, bringing
            unmatched fun and excitement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 p-4">
            <button
              onClick={handleDownloadAppClick}
              className="group flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Download App
              {/* <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" /> */}
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 flex-grow-0">
        <h2 className="text-2xl font-bold text-center mb-8">
          Below are the stats that speak for themselves
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className=" bg-blue-50 rounded-2xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col items-center">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.8/5</div>
              <div className="text-gray-600 font-bold">Rating</div>
            </div>
          </div>
          <div className="bg-blue-50 rounded-2xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col items-center">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <Download className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-gray-600 font-bold">Downloads</div>
            </div>
          </div>
          <div className="bg-blue-50 rounded-2xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col items-center">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <FaRupeeSign className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                ₹1.5 Crore
              </div>
              <div className="text-gray-600 font-bold"> Earnings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WonByBidLanding;
