import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <p>&copy; {new Date().getFullYear()} Arnav Bhargava. All rights reserved.</p>
    </footer>
  );
}

export default Footer;