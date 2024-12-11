import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, BookOpenText } from 'lucide-react';

const personalInfo = {
  name: "Musa Qureshi",
  title: "Software Developer @ Stickee",
  bio: "...",
  avatar: "...",
  links: [
    {
      title: "My Arabic Learner",
      url: "https://www.myarabiclearner.com/",
      icon: BookOpenText,
      description: "Check latest project - a platform to learn Levantine Arabic"
    },
    {
      title: "GitHub",
      url: "https://github.com/musa-q",
      icon: Github,
      description: "View my open-source contributions"
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/musa-qureshi/",
      icon: Linkedin,
      description: "Connect with me professionally"
    },
    // {
    //   title: "Twitter",
    //   url: "...",
    //   icon: Twitter,
    //   description: "Follow me for updates"
    // },
    // {
    //   title: "Email",
    //   url: "mailto:...",
    //   icon: Mail,
    //   description: "Get in touch with me directly"
    // }
  ]
};

function App() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
          />
          <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
          <h2 className="text-xl text-blue-400 mb-4">{personalInfo.title}</h2>
          <p className="text-gray-300">{personalInfo.bio}</p>
        </div>

        <div className="space-y-4">
          {personalInfo.links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className="bg-gray-800 rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:bg-gray-700 border border-gray-700">
                  <div className="flex items-center">
                    <Icon className="w-6 h-6 mr-3 text-blue-400" />
                    <div className="flex-grow">
                      <h3 className="font-semibold">{link.title}</h3>
                      {hoveredLink === index && (
                        <p className="text-sm text-gray-400 mt-1 transition-all duration-300">
                          {link.description}
                        </p>
                      )}
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <footer className="mt-12 text-center text-gray-400 text-sm">
          <p>{new Date().getFullYear()} {personalInfo.name}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
