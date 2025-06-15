import React, { useState } from 'react';

function Navbar({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full top-0 z-10 transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Arnav Bhargava</h1>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-4 text-sm md:text-base text-gray-800 dark:text-white">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hover:text-blue-500">{link.label}</a>
          ))}
        </div>

        {/* <div className="flex items-center space-x-3 md:space-x-4"> */}
          {/* <button */}
            {/* onClick={toggleDarkMode} */}
            {/* className="px-3 py-1 border rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition" */}
          {/* > */}
            {/* {darkMode ? "🌞 Light" : "🌙 Dark"} */}
          {/* </button> */}
          <button
            className="md:hidden text-2xl text-gray-700 dark:text-gray-200 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        {/* </div> */}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md px-6 py-4 space-y-2 text-gray-800 dark:text-white">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block hover:text-blue-500">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;