import React, { useState } from 'react';
import { X, Github, Linkedin, Twitter, Mail, ExternalLink, BookOpenText, FolderKanban, ArrowLeft, Eye } from 'lucide-react';
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
    screenshot: "myarabiclearner.png",
    url: "https://www.myarabiclearner.com/",
    technologies: ["React", "Flask", "MySQL"]
  },
  {
    title: "Look For Samples",
    description: "A webapp to find music samples",
    screenshot: "lookforsamples.png",
    url: "https://www.lookforsamples.com/",
    technologies: ["Flask"]
  },
];

function App() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showProjects, setShowProjects] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const MainView = () => (
    <>
      <div className="text-center mb-12">
        {personalInfo.avatar ? (
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-blue-500"

          />
        ) : (
          <MonogramAvatar name={"MQ"} />
        )}
        <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
        <h2 className="text-xl text-blue-400 mb-4">{personalInfo.title}</h2>
        <p className="text-gray-300">{personalInfo.bio}</p>
      </div>

      <div className="space-y-4">
        {personalInfo.links.map((link, index) => {
          const Icon = link.icon;
          return (
            <div
              key={index}
              onClick={() => {
                setHoveredLink(null);
                if (index === 0) {
                  setShowProjects(true);
                } else if (link.url) {
                  window.open(link.url, '_blank');
                }
              }}
              className="block cursor-pointer"
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <div className="bg-gray-800 rounded-lg p-4 transition-all duration-300 transform hover:bg-gray-700 border border-gray-700">
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
            </div>
          );
        })}
      </div>
    </>
  );

  const ProjectsView = () => (
    <>
      <button
        onClick={() => setShowProjects(false)}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </button>

      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg p-6 border bg-gray-800 border-gray-700">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-blue-400 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setSelectedImage(project.screenshot)}
                className="flex items-center px-2 py-2 rounded-full bg-blue-500 rounded hover:bg-blue-600 transition-colors"
              >
                <Eye className="w-5 h-5" />
              </button>

              <button
                onClick={() => window.open(project.url, '_blank')}
                className="flex items-center px-2 py-2 bg-gray-500 rounded-full hover:bg-gray-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            setSelectedImage(null);
          }}
        >
          <div className="relative max-w-4xl w-full flex justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-0 right-0 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={`/my-links/screenshots/${selectedImage}`}
              alt="Project screenshot"
              style={{ maxWidth: '80%' }}
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-2xl mx-auto">
        {showProjects ? <ProjectsView /> : <MainView />}

        <footer className="mt-12 text-center text-gray-400 text-sm">
          <p>{new Date().getFullYear()} {personalInfo.name}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;