import React, { useEffect } from 'react';

const projects = [
  {
    title: "Spotify Clone",
    description: "A Spotify-like music streaming UI with HTML, CSS, and JavaScript, featuring dynamic controls and playlist navigation.",
    link: "https://github.com/arnavbhargava/Spotify-Clone-Project"
  },
  {
    title: "To-Do List App",
    description: "A task manager built with ReactJS and Tailwind CSS, supporting local storage and real-time task updates.",
    link: "https://github.com/arnavbhargava/Todo-List-Project"
  },
  {
    title: "Joke Generator",
    description: "A ReactJS app that fetches and displays random jokes using third-party APIs.",
    link: "https://github.com/arnavbhargava/Joke-Generator-Project"
  }
];

function Projects() {
  useEffect(() => {
    const el = document.getElementById('projects-content');
    el.classList.add('visible');
  }, []);

  return (
    <section id="projects" className="bg-gray-50">
      <div id="projects-content" className="max-w-6xl mx-auto fade-in">
        <h2 className="text-4xl font-bold text-secondary mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;