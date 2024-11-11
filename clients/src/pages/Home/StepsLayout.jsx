import React, { useState } from 'react';
import image1 from '../../assets/WhatsApp Image 2024-11-11 at 15.09.43_2fc3a4c6.jpg'
// import video1 from '../../assets/Recording 2024-08-29 114848.mp4'
const StepsLayout = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    const videoElement = document.getElementById('mainVideo');
    if (videoElement) {
      videoElement.play();
    }
  };

  return (
    <div className="bg-red-700 p-4 sm:p-6 lg:p-8">
      <div className=" mx-auto">
        {/* Changed to stack on mobile, side-by-side on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left side - Video Section */}
          <div className="relative w-auto aspect-video max-w-[600px] mx-auto bg-black rounded-lg overflow-hidden">
            <video
              id="mainVideo"
              className="w-[500px] h-full object-cover"
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
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer"
                tabIndex={0}
                onClick={handlePlayClick}
              >
                <div className="w-24 sm:w-32 h-12 sm:h-16 bg-red-600 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-red-700 transition-colors">
                  <svg 
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1 sm:ml-2" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}

            {/* Video Title Overlay */}
            {!isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
                <h3 className="text-white text-base sm:text-lg lg:text-xl font-semibold">How to play on #WON BY BID</h3>
              </div>
            )}
          </div>

          {/* Right side - 3 Easy Steps */}
          <div className="text-white mt-6 lg:mt-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">3 Easy Steps</h2>
            
            {/* Changed to vertical stack on mobile/tablet, horizontal on large screens */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-6">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <path d="M8 12h8" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">Select a Match</h3>
                <p className="text-sm sm:text-base text-gray-200">Select an upcoming match of your choice</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
                    <circle cx="9" cy="7" r="4" strokeWidth="2"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">Create Your own Private Contests</h3>
                <p className="text-sm sm:text-base text-gray-200">Use your sports knowledge to create a team using 100 credits</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2v6m0 12v2M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m12 0h2M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">Join Contests</h3>
                <p className="text-sm sm:text-base text-gray-200">Participate in Cash or Practice Contests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsLayout;