import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-secondary mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-6">Interested in working together or just want to say hi? Feel free to reach out!</p>
        <div className="space-y-2 text-lg text-gray-800">
          <p><strong>Email:</strong> <a href="mailto:arnavbhargava4@gmail.com" className="text-blue-600">arnavbhargava4@gmail.com</a></p>
          <p><strong>Phone:</strong> +91 8770377878</p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/arnav-bhargava-533484129" className="text-blue-600">View Profile</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/arnavbhargava" className="text-blue-600">View Projects</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;