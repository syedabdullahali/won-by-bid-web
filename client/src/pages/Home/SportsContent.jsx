



import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SportsContent = () => {
  const [activeTab, setActiveTab] = useState('cricket');
  const [expandedSection, setExpandedSection] = useState('');

  const simpleContestFaqs = [
    {
      id: 'what-is-simple-contest',
      title: 'What is a Simple Contest on WonbyBid?',
      content: {
        heading: 'Understanding Simple Contests',
        subheading: 'Overview of Simple Gaming',
        paragraphs: [
          `A Simple Contest on Won by Bid allows players to join straightforward competitions without complex rules or structures.`,
          `These contests are perfect for beginners and casual players who want to experience the thrill of fantasy sports with minimal effort.`,
          `Participants can create or join contests easily, making it an accessible option for anyone looking to enjoy fantasy gaming.`
        ]
      }
    },
    {
      id: 'how-to-participate',
      title: 'How do I participate in a Simple Contest?',
      content: {
        heading: 'Joining a Simple Contest',
        subheading: 'Steps to Get Started',
        paragraphs: [
          `To participate in a Simple Contest, open the Won by Bid app and navigate to the Simple Contest section.`,
          `Choose from the available contests that suit your interest, and click on Join to enter.`,
          `Follow the prompts to create your team, and you’re ready to compete with others for exciting prizes!`
        ]
      }
    },
    {
      id: 'prizes',
      title: 'What prizes can I win in Simple Contests?',
      content: {
        heading: 'Winning Rewards',
        subheading: 'Exciting Prizes Await',
        paragraphs: [
          `Simple Contests on Won by Bid offer various cash prizes depending on the contest type and entry fees.`,
          `Winning a contest not only brings financial rewards but also the satisfaction of outsmarting your competitors.`,
          `Stay tuned for special contests with bonus prizes and other incentives throughout the season!`
        ]
      }
    },
    {
      id: 'tips-for-success',
      title: 'Tips for Success in Simple Contests',
      content: {
        heading: 'Maximizing Your Chances to Win',
        subheading: 'Helpful Strategies',
        paragraphs: [
          `Research player performances and stats to make informed choices for your fantasy team.`,
          `Diversify your team selection by picking players from different teams to maximize scoring potential.`,
          `Stay updated on player injuries and match conditions, as they can significantly impact your team's performance!`
        ]
      }
    },
    {
      id: 'community',
      title: 'Is there a community for Simple Contest players?',
      content: {
        heading: 'Join Our Community',
        subheading: 'Connect with Fellow Players',
        paragraphs: [
          `Yes! Won by Bid has an active community where players can share tips, strategies, and experiences.`,
          `Engage with other players through forums and social media to enhance your gaming experience.`,
          `Participate in community events and discussions to learn from seasoned players and improve your skills!`
        ]
      }
    }
  ];
  

  const privateContestFaqs = [
    {
      id: 'what-is-private-contest',
      title: 'What is a Private Contest on WonbyBid?',
      content: {
        heading: 'Understanding Private Contests',
        subheading: 'Overview of Private Gaming',
        paragraphs: [
          `A Private Contest on Won by Bid allows you to create a personalized gaming experience where you can compete with your friends and family.`,
          `You can customize the rules, entry fees, and prize pools to make the contest more exciting and tailored to your group's preferences.`,
          `These contests enhance camaraderie and competition, making your fantasy sports experience more engaging and fun!`
        ]
      }
    },
    {
      id: 'how-to-create-private-contest',
      title: 'How do I Create a Private Contest?',
      content: {
        heading: 'Steps to Create a Private Contest',
        subheading: 'Quick Guide',
        paragraphs: [
          `To create a Private Contest on WonbyBid, navigate to the Private Contest section in the app.`,
          `Set your desired entry fee, game preferences, and rules. Once done, click on Create Contest.`,
          `Share the unique invite link with your friends so they can join in on the fun!`
        ]
      }
    },
    {
      id: 'benefits-of-private-contests',
      title: 'What are the Benefits of Private Contests?',
      content: {
        heading: 'Advantages of Playing Private Contests',
        subheading: 'Why Choose Private?',
        paragraphs: [
          `Private contests foster a friendly rivalry, making the gaming experience more enjoyable and personalized.`,
          `They allow for customization in terms of rules, entry fees, and prize structures to suit your group's dynamics.`,
          `Playing with friends enhances engagement, as you can celebrate wins and strategize together for better outcomes.`
        ]
      }
    },
    {
      id: 'tips-for-success',
      title: 'Tips for Success in Private Contests',
      content: {
        heading: 'Maximizing Your Chances of Winning',
        subheading: 'Pro Strategies',
        paragraphs: [
          `Research player performance and statistics to make informed selections for your team.`,
          `Communicate with your friends about strategies while maintaining a competitive edge.`,
          `Utilize insights and tips from the Won by Bid platform to stay ahead of the competition!`
        ]
      }
    },
    {
      id: 'tracking-performance',
      title: 'How Can I Track My Performance?',
      content: {
        heading: 'Monitoring Your Contest Progress',
        subheading: 'Stay Updated',
        paragraphs: [
          `In your private contest, you can easily track your team's performance in real time through the leaderboard.`,
          `Check how your players are performing and see where you stand against your friends.`,
          `Stay engaged throughout the match by following live updates on points and rankings!`
        ]
      }
    }
  ];
  

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? '' : sectionId);
  };

  const FaqItem = ({ faq }) => (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <button 
        className="w-full px-4 sm:px-6 py-5 flex justify-between items-center cursor-pointer group"
        onClick={() => toggleSection(faq.id)}
        aria-expanded={expandedSection === faq.id}
      >
        <h2 className="text-base lg:text-xl  sm:text-lg font-semibold text-gray-900 text-left pr-4">
          {faq.title}
        </h2>
        <div className={`flex-shrink-0 ml-2 transform transition-transform duration-200 
          ${expandedSection === faq.id ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-red-600" />
        </div>
      </button>
      
      {expandedSection === faq.id && (
        <div className="px-4 sm:px-6 pb-5 space-y-3 text-gray-600 border-t border-gray-100">
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pt-4">
            {faq.content.heading}
          </h3>
          <h4 className="text-base font-medium text-gray-700">
            {faq.content.subheading}
          </h4>
          <div className="space-y-2">
            {faq.content.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-sm lg:text-md sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8  sm:py-8 ">
      {/* Tab Headers */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <button
            onClick={() => setActiveTab('cricket')}
            className={`py-3 px-1 relative font-medium lg:text-3xl sm:text-lg focus:outline-none
              transition-colors duration-200 mb-2 sm:mb-0
              ${activeTab === 'cricket' 
                ? 'text-red-600 border-b-2 border-red-600' 
                : 'text-gray-500 hover:text-gray-700'}`}
          >
            Simple Contest
          </button>
          
          <button
            onClick={() => setActiveTab('football')}
            className={`py-3 px-1 relative font-medium lg:text-3xl sm:text-lg focus:outline-none
              transition-colors duration-200
              ${activeTab === 'football' 
                ? 'text-red-600 border-b-2 border-red-600' 
                : 'text-gray-500 hover:text-gray-700'}`}
          >
            Private Contest
          </button>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="space-y-4">
        <div className="grid gap-4">
          {activeTab === 'cricket' 
            ? simpleContestFaqs.map(faq => <FaqItem key={faq.id} faq={faq} />)
            : privateContestFaqs.map(faq => <FaqItem key={faq.id} faq={faq} />)
          }
        </div>
      </div>
    </div>
  );
};

export default SportsContent;