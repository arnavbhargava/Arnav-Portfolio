import React from 'react';

function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Tata Consultancy Services (TCS)</h3>
          <p className="italic text-sm text-gray-600">Systems Engineer – UI Developer | Noida, India | Oct 2020 – Present</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Developed scalable, high-performance front-end solutions using ReactJS, JavaScript, HTML5, and CSS3.</li>
            <li>Implemented modular, reusable components with React Hooks, reducing delivery time by 35%.</li>
            <li>Collaborated with UI/UX designers to convert Figma designs into responsive layouts using Tailwind CSS and Bootstrap.</li>
            <li>Optimized front-end data rendering and API use, reducing bounce rate by 20%.</li>
            <li>Led code quality initiatives, peer reviews, and best practices adoption to increase sprint velocity.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;