import React from 'react';

const AboutTab = () => {
  const skills = [
    { category: 'iOS Development', items: ['Swift', 'SwiftUI', 'UIKit', 'Xcode', 'iOS SDK', 'Swift MLX'] },
    { category: 'AI & ML', items: ['Python', 'LangChain', 'LangGraph', 'RAG', 'MLX', 'Model Context Protocol'] },
    { category: 'Tools & Platforms', items: ['Git', 'Xcode', 'VS Code', 'Cocoapods', 'GitHub Actions'] }
  ];

  const experiences = [
    {
      title: 'Senior Staff Software Engineer',
      company: 'Intuit',
      period: '2019 - Present',
      description: 'Leading iOS mobile development for QuickBooks Mobile, integrating AI-powered features like Intuit Assist. Developing innovative voice and AI technologies, contributing to open-source projects like CardParts, and building cutting-edge mobile applications.'
    },
    {
      title: 'iOS Developer',
      company: 'Previous Tech Companies',
      period: '2016 - 2019',
      description: 'Specialized in native iOS application development using Swift and Objective-C. Built multiple mobile apps including Cryptographer and Effective To Do, focusing on user experience and performance optimization.'
    },
    {
      title: 'Software Engineer',
      company: 'Infosys',
      period: '2014 - 2016',
      description: 'Started career in software development with focus on mobile technologies. Received "Rookie of the Year" award in 2014 for exceptional performance and contribution to innovative projects.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="mb-6">
          <img
            src="https://media.licdn.com/dms/image/v2/C5603AQELigE0NUqgIQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517437895998?e=2147483647&v=beta&t=yhFRAc8__Y5_bqFHz6iEQXzwr0abURyYSDZ7tXYil5Q"
            alt="Badarinath Venkatnarayansetty Profile"
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Hi, I'm Badarinath</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A passionate iOS developer and AI engineer who specializes in creating innovative mobile applications with cutting-edge AI integration.
          I love building on-device machine learning solutions and exploring the intersection of Swift development with modern AI frameworks.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                <span className="text-blue-600 font-medium">{exp.period}</span>
              </div>
              <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Let's Connect</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://badarinath.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
            </svg>
            <span>Substack</span>
          </a>
          <a
            href="https://badrinathvm.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            <span>Medium</span>
          </a>
          <a
            href="https://github.com/badrinathvm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;