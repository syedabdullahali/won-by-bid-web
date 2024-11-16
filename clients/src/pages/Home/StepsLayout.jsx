import React, { useState } from 'react';
import { Play, Monitor, Users, Trophy } from 'lucide-react';
import image1 from '../../assets/WhatsApp Image 2024-11-11 at 15.09.43_2fc3a4c6.jpg';

const StepsLayout = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    const videoElement = document.getElementById('mainVideo');
    if (videoElement) {
      videoElement.play();
    }
  };

  const steps = [
    {
      title: "Select a Contest  ",
      description: "Choose from our range of live and upcoming contests.",
      icon: <Monitor className="w-6 h-6 sm:w-7 sm:h-7" />
    },
    {
      title: "Place Your Unique Bid  ",
      description: "Strategically place a unique bid to increase your chances of winning big.",
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />
    },
    {
      title: "Create Private Contests",
      description: "   Add excitement and boost your earnings potential by hosting private contests. Invite friends to compete and enjoy the thrill of exclusive, high-stakes bidding!",
      icon: <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-red-700 to-red-800 px-4 py-8 sm:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video Section */}
          <div className="relative w-full aspect-video max-w-[600px] mx-auto">
            <div className="absolute inset-0 bg-black/5 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <video
                id="mainVideo"
                className="w-full h-full object-cover"
                controls={isPlaying}
                poster={image1}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="https://youtu.be/kkB9O-hbnKM" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm hover:bg-black/50 transition-all duration-300 cursor-pointer group"
                  onClick={handlePlayClick}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 transform group-hover:scale-110">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Video Title Overlay */}
              {!isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-6">
                  <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
                    How to play on #WON BY BID
                  </h3>
                </div>
              )}
            </div>
          </div>

          {/* Steps Section */}
          <div className=" grid grid-row-3 text-white mt-8 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center lg:text-left">
              <span className="block text-white/80 text-xl sm:text-2xl mb-2">Getting Started</span>
              3 Easy Steps
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 sm:p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-lg flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center w-8 h-8 bg-white/20 rounded-full text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsLayout;