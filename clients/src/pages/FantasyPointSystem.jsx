import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FantasyPointSystem = () => {
  const [activeTab, setActiveTab] = useState('Cricket');
  const [activeFormat, setActiveFormat] = useState('T20');
  const [expandedSection, setExpandedSection] = useState('Batting');

  const games = [
    { id: 'Cricket', icon: '🏏', active: true },
    { id: 'Kabaddi', icon: '🤼', active: false },
    { id: 'Football', icon: '⚽', active: false },
    { id: 'Basketball', icon: '🏀', active: false }
  ];

  const formats = [
    { id: 'T20', label: 'T20' },
    { id: 'ODI', label: 'ODI' },
    { id: 'Test', label: 'Test' },
    { id: 'T10', label: 'T10' },
    { id: 'H100', label: 'H100' }
  ];

  const battingPoints = [
    { label: 'Runs', points: 1 },
    { label: 'Four Bonus', points: 1 },
    { label: 'Six Bonus', points: 2 },
    { label: '30 Runs Bonus', points: 4 },
    { label: 'Half Century Bonus', points: 8 },
    { label: 'Century Bonus', points: 16 },
    { label: 'Dismissal for Duck (excluding bowlers)', points: -2 }
  ];

  const fieldingPoints = [
    { label: 'Catches', points: 4 },
    { label: 'Run-Outs', points: 6 },
    { label: 'Direct Hit Run-Out Bonus', points: 3 },
    { label: 'Stumping', points: 6 },
    { label: 'Catch Efficiency (per catch)', points: 1 },
    { label: 'Fielding Strike Rate', points: '+2 per 10 balls fielded' }
  ];

  const bowlingPoints = [
    { label: 'Wicket', points: 10 },
    { label: 'Maiden Over', points: 4 },
    { label: '3 Wicket Bonus', points: 6 },
    { label: '5 Wicket Bonus', points: 12 },
    { label: 'Bowling Economy', points: '2 per economical over' }
  ];

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-6">
        Fantasy Point System on My11Circle
      </h1>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-8">
        Are you just getting started with Fantasy games? Select a format and game to see the scoring system.
      </p>

      {/* Game Tabs */}
      <div className="flex justify-between border-b mb-6">
        {games.map((game) => (
          <button
            key={game.id}
            onClick={() => setActiveTab(game.id)}
            className={`flex flex-col items-center pb-4 px-8 relative ${
              activeTab === game.id 
                ? 'text-red-600 border-b-2 border-red-600 -mb-[2px]'
                : 'text-gray-500'
            }`}
          >
            <span className="text-2xl mb-1">{game.icon}</span>
            <span className="text-sm font-medium">{game.id}</span>
          </button>
        ))}
      </div>

      {/* Format Tabs */}
      <div className="flex gap-4 mb-8">
        {formats.map((format) => (
          <button
            key={format.id}
            onClick={() => setActiveFormat(format.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeFormat === format.id
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {format.label}
          </button>
        ))}
      </div>

      {/* Points Sections */}
      <div className="space-y-4">
        {/* Batting Section */}
        <div className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection('Batting')}
            className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <span className="text-blue-600">🏏</span>
              <span className="font-medium">Batting</span>
            </div>
            {expandedSection === 'Batting' ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSection === 'Batting' && (
            <div className="border-t">
              {battingPoints.map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between p-4 border-b last:border-b-0 hover:bg-gray-50"
                >
                  <span className="text-gray-700">{item.label}</span>
                  <span className={`font-medium ${
                    item.points < 0 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {item.points > 0 ? `+${item.points}` : item.points}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bowling Section */}
        <div className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection('Bowling')}
            className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <span className="text-blue-600">🎳</span>
              <span className="font-medium">Bowling</span>
            </div>
            {expandedSection === 'Bowling' ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSection === 'Bowling' && (
            <div className="border-t">
              {bowlingPoints.map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between p-4 border-b last:border-b-0 hover:bg-gray-50"
                >
                  <span className="text-gray-700">{item.label}</span>
                  <span className={`font-medium ${
                    typeof item.points === 'string' ? 'text-blue-700' : item.points < 0 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {typeof item.points === 'string' ? item.points : item.points > 0 ? `+${item.points}` : item.points}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Fielding Section */}
        <div className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection('Fielding')}
            className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <span className="text-blue-600">🧤</span>
              <span className="font-medium">Fielding</span>
            </div>
            {expandedSection === 'Fielding' ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSection === 'Fielding' && (
            <div className="border-t">
              {fieldingPoints.map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between p-4 border-b last:border-b-0 hover:bg-gray-50"
                >
                  <span className="text-gray-700">{item.label}</span>
                  <span className={`font-medium ${
                    typeof item.points === 'string' ? 'text-blue-700' : item.points < 0 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {typeof item.points === 'string' ? item.points : item.points > 0 ? `+${item.points}` : item.points}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* strike rate */}
        <div className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection('Fielding')}
            className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50"
          >
            <div className="flex items-center gap-2">
              <span className="text-blue-600">🧤</span>
              <span className="font-medium">Srike rate</span>
            </div>
            {expandedSection === 'Fielding' ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSection === 'Fielding' && (
            <div className="border-t">
              {fieldingPoints.map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between p-4 border-b last:border-b-0 hover:bg-gray-50"
                >
                  <span className="text-gray-700">{item.label}</span>
                  <span className={`font-medium ${
                    typeof item.points === 'string' ? 'text-blue-700' : item.points < 0 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {typeof item.points === 'string' ? item.points : item.points > 0 ? `+${item.points}` : item.points}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* eco */}
      </div>


      <div className="border-t p-4">
      <div className="flex items-center gap-2">
              <span className="text-yellow-600">⚠️</span>
              <span className="font-medium text-xl">Points to Remember</span>
            </div>
              <ul className="text-gray-700 space-y-3">
                <li>The new point system is effective from matches that go live from 4th March, 2023 onwards.</li>
                <li>Line-up information is public, but users should verify it through their own sources.</li>
                <li>In ISPL, the batting team can call a "50-50 over" challenge for a specific bowler to score 16 runs or more.</li>
                <li>If the batting team scores 16 or more in the challenge, they receive a 50% run bonus (e.g., 30 runs if they score 20).</li>
                <li>If they score less than 16 runs, only 50% of their total score is added (e.g., 4 runs if they score 8).</li>
                <li>For odd run totals, the lower number is considered for the bonus calculation. For example, 50% of 21 rounds down to 10, making the total 31 runs.</li>
              </ul>
            </div>
    </div>
  );
};

export default FantasyPointSystem;
