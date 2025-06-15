import React from 'react';

function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <ul className="space-y-4">
          <li>
            <strong>Bachelor of Engineering (Information Technology)</strong><br/>
            ITM Group of Institutions | 2016 – 2020 | 69.9%
          </li>
          <li>
            <strong>Class XII (Mathematics)</strong><br/>
            Little Angels High School | 2015 – 2016 | 70.6%
          </li>
          <li>
            <strong>Class X</strong><br/>
            Little Angels High School | 2013 – 2014 | 76%
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Education;