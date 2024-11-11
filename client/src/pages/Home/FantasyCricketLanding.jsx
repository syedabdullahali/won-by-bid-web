import React from "react";
import image1 from "../../assets/Web_Photo_Editor.jpg";

const FantasyCricketLanding = () => {
  return (
    <div className=" bg-white px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start lg:items-center">
          {/* Left Column - Content */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-700 leading-tight">
              Play Contests on Won by Bid App
            </h1>

            <div className="space-y-4 lg:text-xl text-justify sm:text-base">
              <p className="text-gray-700 leading-relaxed">
                Craving the excitement of fantasy sports but struggling to find
                the time? Look no further than Won by Bid! Our app brings your
                favorite fantasy sports to life, offering fantasy cricket,
                football, and kabaddi right at your fingertips. Choose your dream
                teams, play the games, and win big!
              </p>

              <p className="text-gray-700 leading-relaxed">
                <span className="text-red-400">WonByBid.com</span>, Part of Games24x7, Won by Bid delivers the best
                fantasy gaming experience. Our platform ensures the same top-notch
                gameplay and reliability that has made RummyCircle India's leading
                rummy destination with over 10 million players. Sign up, select
                your game, and start winning real cash daily. Don't wait—join now
                and immerse yourself in the thrill of fantasy sports!
              </p>

              <p className="text-gray-700 leading-relaxed">
                Playing fantasy cricket, football, or any other fantasy game on
                Won by Bid not only enhances your skills but also lets you earn
                real cash rewards. Our secure and user-friendly platform allows
                you to enjoy fantasy sports anytime, anywhere. Get started and
                experience the action on India's fastest-growing online fantasy
                cricket app today.
              </p>
            </div>

            <div className="pt-2 sm:pt-4">
              <button className="w-full sm:w-auto bg-white text-red-600 px-6 py-3 rounded-lg border-2 border-red-600 hover:bg-red-50 transition-colors duration-200 font-medium text-sm sm:text-base">
                Today's Match Preview
              </button>
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