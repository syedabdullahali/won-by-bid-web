import React from "react";
import image1 from "../../assets/Web_Photo_Editor.jpg";

const FantasyCricketLanding = () => {
  return (
    <div className=" bg-white px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start lg:items-center">
          {/* Left Column - Content */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-red-700 leading-tight">
              Play Contests on WonByBid
            </h1>

            <div className="space-y-4 lg:text-xl text-justify sm:text-base">
              <p className="text-gray-700 leading-relaxed">
                "Looking for quick results and real winnings?{" "}
                <span className=" font-bold"> WonByBid</span> is here to
                redefine the thrill of competition! Our unique, skill-based
                bidding platform offers an exciting way to win big with instant
                results. With <span className=" font-bold">WonByBid.com</span>,
                there’s no waiting – just place your unique bid and see if
                you've secured the prize.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Our platform combines fast-paced contests, secure gameplay, and
                real cash rewards. Whether you’re a sports enthusiast or simply
                love strategic bidding,{" "}
                <span className=" font-bold"> WonByBid</span> lets you jump in,
                play, and win on your terms – anytime, anywhere.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Join <span className=" font-bold"> WonByBid</span> today, where
                quick results, instant rewards, and the excitement of strategic
                bidding come together. Don’t miss out – start bidding and
                winning now!"
              </p>
            </div>

            <div className="pt-2 sm:pt-4">
              {/* <button className="w-full sm:w-auto bg-white text-red-600 px-6 py-3 rounded-lg border-2 border-red-600 hover:bg-red-50 transition-colors duration-200 font-medium text-sm sm:text-base">
                Today's Match Preview
              </button> */}
            </div>
          </div>

          {/* Right Column - App Screenshots */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Phone Image */}
            <div className="relative z-10 max-w-[500px] mx-auto">
              <img
                src={image1}
                alt="WonbyBid App Interface"
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>

            {/* Optional: Add a decorative background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-50 to-transparent rounded-full blur-3xl opacity-60" />
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 border-b-2 border-gray-100 w-full" />
      </div>
    </div>
  );
};

export default FantasyCricketLanding;
