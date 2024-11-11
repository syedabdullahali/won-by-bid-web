import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "Why Fantasy Games?",
      answer: "Fantasy games offer an exciting way to engage with sports, allowing players to create their own dream teams and compete based on real-world performance. They enhance the viewing experience and create a more interactive way to enjoy sports."
    },
    {
      id: 2,
      question: "Unique Features of WonbyBid",
      answer: "WonbyBid offers unique features including real-time scoring, multiple contest formats, secure transactions, and user-friendly interface. Players can participate in various leagues and win rewards based on their team's performance."
    },
    {
      id: 3,
      question: "Playing Fantasy Cricket & Football is Safe, Secure & Legal",
      answer: "Fantasy sports are completely legal in most regions and classified as games of skill. WonbyBid ensures secure transactions, data protection, and fair play through advanced security measures and compliance with local regulations."
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="w-full border-t  border-b  p-8">
      {faqData.map((item) => (
        <div key={item.id} className=" border-gray-200">
          <div 
            className="py-4 px-4 md:px-6 flex justify-between items-center cursor-pointer hover:bg-gray-50"
            onClick={() => toggleItem(item.id)}
          >
            <h3 className="text-lg md:text-2xl font-medium text-gray-900">
              {item.question}
            </h3>
            <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100">
              {openItems[item.id] ? (
                <Minus className="w-5 h-5 text-gray-500" />
              ) : (
                <Plus className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>
          
          {openItems[item.id] && (
            <div className="px-4 md:px-6 pb-4">
              <p className="text-gray-600 text-sm md:text-base">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
