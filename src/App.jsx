import React, { useState, useEffect } from 'react';
import { X, Github, Linkedin, Twitter, Mail, ExternalLink, BookOpenText, FolderKanban, ArrowLeft, Eye, ChevronUp } from 'lucide-react';
import MonogramAvatar from './components/MonogramAvatar';

const personalInfo = {
  name: "Musa Qureshi",
  title: "Software Developer @ Stickee",
  bio: "",
  avatar: null,
  links: [
    {
      title: "My Projects",
      icon: FolderKanban,
      description: "View my portfolio of projects"
    },
    {
      title: "GitHub",
      url: "https://github.com/musa-q",
      icon: Github,
      description: "View my projects on GitHub"
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/musa-qureshi/",
      icon: Linkedin,
      description: "Connect with me on LinkedIn"
    },
  ]
};

const projects = [
  {
    title: "My Arabic Learner",
    description: "A platform to learn Levantine Arabic",
    url: "https://www.myarabiclearner.com/",
    technologies: ["React", "Flask", "MySQL"]
  },
  {
    title: "Look For Samples",
    description: "A webapp to find music samples",
    url: "https://www.lookforsamples.com/",
    technologies: ["Flask"]
  },
  {
    title: "Asma Ul Husna - Esmaül Hüsna",
    description: "Learn, understand and memorise the 99 Names of God",
    url: "https://asmaulhusna.xyz/",
    testflightUrl: "https://testflight.apple.com/join/rjAm5yft",
    technologies: ["React Native", "Flask"]
  },
];

function App() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showProjects, setShowProjects] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const MainView = () => (
    <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="text-center mb-12 mt-5 pt-4">
        <div className="animate-fadeIn">
          {personalInfo.avatar ? (
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-xl shadow-blue-500/20 transform transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <MonogramAvatar name={"MQ"} />
          )}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-fadeIn" style={{ animationDelay: '100ms' }}>
          {personalInfo.name}
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-blue-400 mb-4 font-medium animate-fadeIn" style={{ animationDelay: '200ms' }}>
          {personalInfo.title}
        </h2>
        {personalInfo.bio && (
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto px-4 animate-fadeIn" style={{ animationDelay: '300ms' }}>
            {personalInfo.bio}
          </p>
        )}
      </div>

      <div className="space-y-3 sm:space-y-4 px-2">
        {personalInfo.links.map((link, index) => {
          const Icon = link.icon;
          return (
            <div
              key={index}
              onClick={() => {
                setHoveredLink(null);
                if (index === 0) {
                  setShowProjects(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (link.url) {
                  window.open(link.url, '_blank', 'noopener,noreferrer');
                }
              }}
              className="block cursor-pointer animate-fadeIn"
              style={{ animationDelay: `${400 + index * 100}ms` }}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (index === 0) {
                    setShowProjects(true);
                  } else if (link.url) {
                    window.open(link.url, '_blank', 'noopener,noreferrer');
                  }
                }
              }}
              aria-label={link.title}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-850 rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-700 hover:border-blue-500/50 active:scale-[0.98] min-h-[72px] sm:min-h-[80px]">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg text-white mb-1">{link.title}</h3>
                    <p className={`text-sm sm:text-base text-gray-400 transition-all duration-300 ${hoveredLink === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 sm:opacity-100 sm:max-h-20'} overflow-hidden`}>
                      {link.description}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 ml-3 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const ProjectsView = () => (
    <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <button
        onClick={() => {
          setShowProjects(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 sm:mb-10 transition-all duration-300 hover:gap-3 px-4 py-2 rounded-lg hover:bg-blue-500/10 active:scale-95"
        aria-label="Back to Home"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back to Home</span>
      </button>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        My Projects
      </h1>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 px-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-xl sm:rounded-2xl p-6 sm:p-8 border bg-gradient-to-br from-gray-800 to-gray-850 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-[1.02] animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h2>
            </div>

            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs sm:text-sm font-medium hover:bg-blue-500/20 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                className="flex-1 py-3 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-white font-medium active:scale-95 shadow-lg shadow-blue-500/30"
                aria-label={`Visit ${project.title} website`}
              >
                <ExternalLink className="w-5 h-5" />
                <span>Visit Site</span>
              </button>
              {project.testflightUrl && (
                <button
                  onClick={() => window.open(project.testflightUrl, '_blank', 'noopener,noreferrer')}
                  className="flex-1 py-3 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-white font-medium active:scale-95"
                  aria-label={`Join ${project.title} TestFlight`}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>TestFlight</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 z-50 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Project screenshot"
        >
          <div className="relative max-w-5xl w-full flex justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 right-0 sm:-top-8 sm:-right-8 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white hover:text-gray-300 transition-all duration-300 shadow-xl z-10 hover:scale-110 active:scale-95"
              aria-label="Close screenshot"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={`/screenshots/${selectedImage}`}
              alt="Project screenshot"
              className="rounded-lg sm:rounded-xl object-contain max-h-[80vh] shadow-2xl border border-gray-700"
            />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-850 to-gray-800 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-2xl mx-auto">
          {showProjects ? <ProjectsView /> : <MainView />}

          <footer className="mt-16 sm:mt-20 pt-8 border-t border-gray-800 text-center animate-fadeIn">
            <p className="text-gray-400 text-sm sm:text-base mb-2">
              © {new Date().getFullYear()} {personalInfo.name}
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              Built with React & Tailwind CSS
            </p>
          </footer>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 hover:bg-blue-600 rounded-full shadow-2xl shadow-blue-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-50 animate-fadeIn"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </button>
      )}
    </div>
  );
}

export default App;