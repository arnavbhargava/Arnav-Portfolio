import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const el = document.getElementById('home-content');
    el.classList.add('visible');
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 text-center pt-20">
      <div id="home-content" className="fade-in px-4">
        <h1 className="text-5xl font-extrabold text-secondary mb-4">Hi, I'm Arnav Bhargava</h1>
        <p className="text-xl text-gray-800 mb-6">Frontend Developer based in Gwalior, India</p>
        <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-full shadow-md hover:bg-secondary transition-transform transform hover:scale-105">
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Home;