import React from "react";
import { Link } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { title: "Home", link: "#" },
    { title: "How to Play", link: "/how-to-play" },
    { title: "How to Download", link: "/how-to-download" },
    { title: "Points System", link: "/points-system" },
    { title: "Tips & Tricks", link: "/tips-tricks" },
    { title: "Fantasy Cricket League", link: "/fantasy-cricket" },
    { title: "Help", link: "/help" },
    { title: "Withdraw Cash", link: "/withdraw-cash" },
    { title: "Today's Match Prediction", link: "/todays-match-prediction" },
    { title: "T20 World Cup", link: "/t20-world-cup" },
  ];

  const secondColumnLinks = [
    { title: "Fantasy Cricket on iOS", link: "#" },
    { title: "Fantasy Cricket on Android", link: "#" },
    { title: "Cricket Schedule", link: "#" },
    { title: "TATA IPL 2024", link: "#" },
    { title: "About Us", link: "#" },
    { title: "Hacking Awareness", link: "#" },
    { title: "Brand Asset Center", link: "#" },
    { title: "Legality", link: "#" },
    { title: "Terms of Service", link: "#" },
    { title: "Privacy Policy", link: "#" },
    { title: "Blog", link: "#" },
  ];

  const socialLinks = [
    { icon: <FaFacebook color="#4267B2" />, label: "Facebook" },
    { icon: <FaTwitter color="#1DA1F2" />, label: "Twitter" },
    { icon: <FaInstagram color="#C13584" />, label: "Instagram" },
    { icon: <FaLinkedin color="#0077B5" />, label: "LinkedIn" },
    { icon: <FaTelegram color="#0088CC" />, label: "Telegram" },
  ];

  const paymentPartners = [
    "Paytm",
    "TechProcess",
    "Razorpay",
    "Cashfree",
    "TimesofMoney",
  ];

  return (
    <div className="bg-red-800 text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="space-y-6 text-center sm:text-left sm:col-span-3 lg:col-span-1">
            <div className="text-xl sm:text-2xl font-bold">WON BY BID</div>
            <div className="social-links flex justify-center sm:justify-start gap-3 sm:gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={link.label}
                  className="text-3xl sm:text-4xl transition-transform hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Columns Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 gap-8 sm:gap-4">
            {/* Quick Links Column 1 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center sm:text-left">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-center sm:text-left">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className="border-b hover:text-gray-300 transition-colors inline-block"
                    >
                      » {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column 2 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center sm:text-left">
                &nbsp;
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-center sm:text-left">
                {secondColumnLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className="border-b hover:text-gray-300 transition-colors inline-block"
                    >
                      » {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Security and Payment Partners */}
          <div className="space-y-6 text-center sm:text-left">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Security & Game Integrity
              </h3>
              <div className="flex justify-center sm:justify-start space-x-2">
                <div className="bg-white p-1 sm:p-2 rounded">
                  <img
                    src="https://rcmg.in/fantasy/landingimg/acquistion/newlp2/responsible-play-v1.png"
                    alt="responsive"
                    className="h-8 sm:h-10 w-auto"
                  />
                </div>
                <div className="bg-white p-1 sm:p-2 rounded">
                  <img
                    src="https://rcmg.in/fantasy/landingimg/acquistion/newlp2/18plus-icon-v1.png"
                    alt="responsive"
                    className="h-8 sm:h-10 w-auto"
                  />
                </div>
                <div className="bg-white p-1 sm:p-2 rounded">
                  <img
                    src="https://rcmg.in/fantasy/landingimg/acquistion/newlp2/my11-egf-e-gaming-federation.png"
                    alt="responsive"
                    className="h-8 sm:h-10 w-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Our Payment Partners
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {paymentPartners.map((partner, index) => (
                  <div key={index} className="bg-white p-1 sm:p-2 rounded">
                    <span className="text-red-800 text-xs sm:text-sm font-medium">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm sm:text-base p-4 mt-6">
          *You must be 18 years to play real money skill games
        </p>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-4 border-t border-white/20 text-xs sm:text-sm text-center sm:text-left">
          © 2024 Play Games24x7 Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;