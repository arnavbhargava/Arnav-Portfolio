import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    const el = document.getElementById('about-content');
    el.classList.add('visible');
  }, []);

  return (
    <section id="about" className="bg-white">
      <div id="about-content" className="max-w-5xl mx-auto fade-in">
        <h2 className="text-4xl font-bold text-secondary mb-6">About Me</h2>
        <p className="text-lg text-gray-700 mb-4">
          I'm a results-driven Frontend Developer with over 3 years of experience building responsive, high-performance web applications using ReactJS, JavaScript, and modern UI libraries.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          At Tata Consultancy Services, I led the development of scalable frontend solutions that improved performance and UX metrics significantly.
        </p>
        <p className="text-lg text-gray-700">
          <strong>Tech Stack:</strong> ReactJS, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap
        </p>
      </div>
    </section>
  );
}

export default About;