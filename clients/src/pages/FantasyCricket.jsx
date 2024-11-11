import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Carousel from "../components/SliderCarousel";
import MissCallSection from "./Home/MissCallSection";
import UserRating from "./Home/UserRating";

const FantasyCricket = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionKey) => {
    if (activeSection === sectionKey) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionKey);
    }
  };

  return (
    <div>
      <Carousel />
      <MissCallSection />
      <UserRating />
      <div className="max-w-6xl mx-auto p-6">
        <div>
          <h1 className="text-2xl font-bold mb-4">
            Fantasy Cricket League & Win Real Cash
          </h1>

          <p className="text-gray-700 mb-8 px-8">
            Cricket is the only sport India that is played in every corner of
            the country and unites everyone. But there are moments where you
            feel you want to be part of the game. You can do this by getting
            My11Circle on your phone. It is a fantasy sports app that has
            revived the cricketing experience right at your fingertips. This
            game of skill allows you to be part of the Fantasy Cricket League,
            use your cricket knowledge to put a winning fantasy team together,
            manage the team, and win cash prizes daily. You can also play
            Fantasy Cricket League with former cricket legend, Sourav Ganguly
            and also win an opportunity to meet him. Download the most preferred
            Fantasy Cricket app- My11Circle and enjoy the sport thoroughly and
            leisurely.
          </p>

          <button className="bg-red-600 text-white px-4 py-2 rounded mb-6">
            Today's Match Prediction
          </button>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <button
              className="w-full bg-gray-100 px-4 py-3 flex justify-between items-center"
              onClick={() => toggleSection("what-is-fantasy-cricket")}
            >
              <h2 className="text-lg font-medium">
                What is Fantasy Cricket League
              </h2>
              {activeSection === "what-is-fantasy-cricket" ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {activeSection === "what-is-fantasy-cricket" && (
              <div className="px-4 py-3 border-t">
                <p className="text-gray-700">
                  Fantasy cricket is a game of skill where users create a
                  virtual team of real cricket players and earn points based on
                  the performance of those players in real-life matches. The
                  users' teams compete against each other, and the winner is the
                  user whose team scores the most points.
                </p>
              </div>
            )}
          </div>

          <div>
            <button
              className="w-full bg-gray-100 px-4 py-3 flex justify-between items-center"
              onClick={() => toggleSection("how-to-play")}
            >
              <h2 className="text-lg font-medium">
                How to play Fantasy cricket League
              </h2>
              {activeSection === "how-to-play" ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {activeSection === "how-to-play" && (
              <div className="px-4 py-3 border-t">
                <p className="text-gray-700">
                  To play the Fantasy Cricket League, users need to download the
                  My11Circle app, create an account, and start building their
                  fantasy teams. They can choose players from the available
                  teams and earn points based on the real-life performance of
                  those players. Users can also participate in various contests
                  and leagues to win cash prizes.
                </p>
              </div>
            )}
          </div>

          <div>
            <button
              className="w-full bg-gray-100 px-4 py-3 flex justify-between items-center"
              onClick={() => toggleSection("how-to-download")}
            >
              <h2 className="text-lg font-medium">
                How to Download the Fantasy Cricket App?
              </h2>
              {activeSection === "how-to-download" ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {activeSection === "how-to-download" && (
              <div className="px-4 py-3 border-t">
                <p className="text-gray-700">
                  To download the Fantasy Cricket app, users can visit the
                  My11Circle website or their respective app stores (Google Play
                  Store or Apple App Store) and search for "My11Circle". They
                  can then install the app and create an account to start
                  playing.
                </p>
              </div>
            )}
          </div>

          <div>
            <button
              className="w-full bg-gray-100 px-4 py-3 flex justify-between items-center"
              onClick={() => toggleSection("why-play-on-my11circle")}
            >
              <h2 className="text-lg font-medium">
                Why play fantasy cricket league on My11Circle
              </h2>
              {activeSection === "why-play-on-my11circle" ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {activeSection === "why-play-on-my11circle" && (
              <div className="px-4 py-3 border-t">
                <p className="text-gray-700">
                  My11Circle is a popular fantasy sports app that has revived
                  the cricketing experience for users. It allows users to create
                  a virtual team of real players and earn points based on their
                  performance. Users can also play Fantasy Cricket League with
                  former cricket legend, Sourav Ganguly, and win cash prizes
                  daily.
                </p>
              </div>
            )}
          </div>

          <div>
            <button
              className="w-full bg-gray-100 px-4 py-3 flex justify-between items-center"
              onClick={() => toggleSection("match-schedule")}
            >
              <h2 className="text-lg font-medium">
                Cricket Match Schedule and Details
              </h2>
              {activeSection === "match-schedule" ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {activeSection === "match-schedule" && (
              <div className="px-4 py-3 border-t">
                <p className="text-gray-700">
                  The My11Circle app provides detailed information about
                  upcoming cricket matches, including the teams involved, match
                  timing, and other relevant details. Users can use this
                  information to make informed decisions when building their
                  fantasy teams.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FantasyCricket;
