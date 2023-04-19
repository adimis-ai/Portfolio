import React from 'react';

const skills = [
  "HTML / CSS",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "SvelteKit",
  "Angular",
  "Node.js",
  "Express",
  "Django",
  "Flask",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Google Cloud",
  "Git",
];

const Skills = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-5xl font-bold sm:text-5xl text-transparent bg-clip-text leading-12 bg-gradient-to-r from-black via-teal-700 to-black">
            My Tech Stack
          </h2>
          <p className="mt-4 text-xl text-gray-900">
            Mastering the latest technologies to deliver outstanding projects
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-center p-4 border-2 border-teal-700 rounded-lg shadow-md hover:bg-teal-900 hover:text-white transition">
              <span className="font-semibold text-sm">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
