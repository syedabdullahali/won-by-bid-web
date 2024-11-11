import React from 'react';
import {
  Download, PlayCircle, Phone,
} from 'lucide-react';
import AppInstallationSteps from './ApiInstalltion';
import image1 from '../assets/WhatsApp Image 2024-11-11 at 15.09.43_19d63217.jpg';

const WonByBidGuide = () => {
  const downloadSteps = [
    {
      title: "Direct Download",
      description: "Click on the DOWNLOAD NOW button to start downloading Won by Bid app",
      icon: <Download className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "Play Store",
      description: "Search 'Won by Bid' on Google Play Store",
      icon: <PlayCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Missed Call",
      description: "Give a missed call on 6305094797 to receive download link via SMS",
      icon: <Phone className="w-6 h-6 text-green-600" />,
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Header Image */}
      <div className="relative">
        <img src={image1} alt="Download Guide" className="w-full h-[500px] object-cover rounded-b-xl shadow-md" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
          <h1 className="text-4xl text-white font-bold p-6">How to Download the WonbyBid App</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="mb-6 text-lg leading-relaxed">
          A Quick Reference Guide to Download the Wonbybid App on your device.
        </p>

        <div className="space-y-6">
          {/* Download Options */}
          <div className="bg-white shadow rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold">For Android Users</h3>
            <p>
              You can download Wonbybid from the button below, search “wonbybid” on Google Play Store, or give a missed call to receive a download link via SMS.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="link-to-download" // Replace with the actual link
                className="bg-red-600 text-white font-semibold text-center py-3 px-6 rounded-md hover:bg-red-700 transition"
              >
                DOWNLOAD NOW
              </a>
              <a
                href="tel:6305094797"
                className="bg-blue-600 text-white font-semibold text-center py-3 px-6 rounded-md hover:bg-blue-700 transition"
              >
                GIVE A MISSED CALL
              </a>
            </div>
          </div>
          <AppInstallationSteps />

          {/* Download Steps */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Download Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {downloadSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Guide */}
          <div className="bg-white shadow rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold mb-4">Detailed Guide to Download & Install wonbybid App</h3>
            <p>Once you initiate the APK download, you may see a warning message. This is standard for third-party downloads; rest assured that the wonbybid app is safe and virus-free.</p>
          </div>
        </div>
      </div>

      {/* Installation Steps */}
      
    </div>
  );
};

export default WonByBidGuide;
