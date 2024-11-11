import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FantasySportsTips = () => {
  const [activeTab, setActiveTab] = useState('CRICKET');
  const [expandedSection, setExpandedSection] = useState('');

  const cricketMatches = [
    {
      id: 'eng-pak-2',
      title: 'England vs Pakistan, 2nd Test: Fantasy Cricket Tips',
      content: 'Tips and analysis for the second test match...'
    },
    {
      id: 'eng-pak-1',
      title: 'England vs Pakistan, 1st Test: Fantasy Cricket Tips',
      content: 'Tips and analysis for the first test match...'
    },
    {
      id: 'eng-ire-3',
      title: 'England vs Ireland, 3rd ODI: Fantasy Cricket Tips',
      content: 'Tips and analysis for the third ODI...'
    }
  ];

  const fantasyTricks = [
    {
      title: "If you are playing fantasy cricket, then look out for toss",
      content: "Make a practice of tracking the toss and make last moment changes before the match start based on who is playing first."
    },
    {
      title: "Match prediction helps",
      content: "Read the match prediction which is generally published many hours before the match to understand the upcoming match details from the experts."
    },
    {
      title: "Post-match presentations",
      content: "Always look for the previous post-match presentations to understand the strategy or any important announcements made."
    },
    {
      title: "Type of contest",
      content: "There are multiple contests around an upcoming match, and based on your expertise and knowledge, you choose the same wisely. For example, if you are a beginner, you can start with a low-fee contest and test your skills, and once you gain enough confidence in prediction and strategizing in making your team, you can go ahead for higher-fee contests as well."
    },
    {
      title: "Check for our promo codes",
      content: "There are different promotions happening at different points of time, and at times there are promo codes offered for the limited time period where the platform gives you discounts and offers which can help you play more."
    },
    {
      title: "Best time to make fantasy teams",
      content: "This is a little tricky, but at times this can help a lot when keeping a close look over players' news: you get to know last-minute injuries or players not playing, eventually helping you in making decisions before the match takes place."
    },
    {
      title: "Pick the best players from each team",
      content: "It would be wise to select the best players from each team and also the players you know are popular and likely to score more points."
    },
    {
      title: "Creating multiple teams & joining multiple contests",
      content: "The trick works better for better skilled users, because creating multiple teams or joining multiple contests is thought to increase your chances of winning but also need more expertise as you would be putting up more entry fees as well."
    }
  ];

  const toggleSection = (id) => {
    if (expandedSection === id) {
      setExpandedSection('');
    } else {
      setExpandedSection(id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">Tips and Tricks for Fantasy Cricket and Fantasy Football</h1>
      
      {/* Introduction */}
      <p className="text-gray-700 mb-8">
        Fantasy cricket and Fantasy football are amongst the most popular fantasy games in India today. 
        Online gaming enthusiasts have a huge interest in playing fantasy games related to sports especially 
        cricket and football as it brings the game at their fingertips. Here, the users create a virtual team 
        of real players and with the right skill and strategy, win the game. Each player has a point and the 
        scoring happens based on how the selected players perform in the LIVE matches.
      </p>

      {/* Tab Navigation */}
      <div className="flex border-b mb-6">
        <button 
          className={`px-6 py-2 font-semibold ${activeTab === 'CRICKET' ? 
            'text-red-600 border-b-2 border-red-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('CRICKET')}
        >
          CRICKET
        </button>
        <button 
          className={`px-6 py-2 font-semibold ${activeTab === 'FOOTBALL' ? 
            'text-red-600 border-b-2 border-red-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('FOOTBALL')}
        >
          FOOTBALL
        </button>
      </div>

      {/* Content Section */}
      {activeTab === 'CRICKET' && (
        <div>
          <h2 className="text-xl font-bold text-red-600 mb-4">
            QUICK FANTASY CRICKET TIPS FOR THE UPCOMING MATCHES:
          </h2>
          
          <div className="space-y-2 mb-8">
            {cricketMatches.map((match) => (
              <div key={match.id} className="border rounded-lg bg-gray-50">
                <button
                  className="w-full px-4 py-3 flex justify-between items-center"
                  onClick={() => toggleSection(match.id)}
                >
                  <span className="font-medium">{match.title}</span>
                  {expandedSection === match.id ? 
                    <ChevronUp className="w-5 h-5" /> : 
                    <ChevronDown className="w-5 h-5" />
                  }
                </button>
                {expandedSection === match.id && (
                  <div className="px-4 py-3 border-t">
                    {match.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-red-600 mb-4">
            MORE FANTASY TRICKS TO PLAY BETTER:
          </h2>

          <p className="text-gray-700 italic mb-4">
            Other tricks which will help you in both fantasy cricket and football are below:
          </p>

          <div className="space-y-4">
            {fantasyTricks.map((trick, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">{trick.title}</h3>
                <p className="text-gray-700">{trick.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold mb-2">Summary</h3>
            <p className="text-gray-700">
              You should always make sure that you have made the perfect team with the best information 
              available on all players and expert opinions as well. Tweaking your team until the start 
              of the match as you get more updates is also advisable and keeping track of players' form, 
              fitness level and past records will help you make a more informed decision.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'FOOTBALL' && (
        <div className="text-center py-8 text-gray-600">
          Football tips content coming soon...
        </div>
      )}
    </div>
  );
};

export default FantasySportsTips;