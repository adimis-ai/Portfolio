import React from 'react';

const skills = [
  "ML Algorithms",
  "NLP",
  "Data Visualization",
  "Data Preprocessing",
  "Feature Engineering",
  "Python",
  "TensorFlow",
  "PyTorch",
  "Hugging Face",
  "Langchain",
  "scikit-learn",
  "Jupyter Notebooks",
  "Tableau",
  "Keras",
  "RESTful API",
  "GraphQL API",
  "Database design",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Electron.js",
  "Django",
  "Flask",
  "FastAPI",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Firebase",
  "Diagrams.net",
  "UI/UX Design",
  "React.js",
  "Next.js",
  "Redux",
  "React Native",
  "Figma",
];

const Skills = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-5xl font-bold sm:text-5xl text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#5de0e6] to-[#004aad]">
            My Tech Stack
          </h2>
          <p className="mt-4 text-xl text-[#fffff0]">
            Mastering the latest technologies to deliver outstanding projects
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-center p-4 border-2 text-[#fffff0] border-[#46c1fe] rounded-lg shadow-md hover:bg-[#46c1fe] hover:text-[#141414] focus:ring focus:ring-[#46c1fe] transition">
              <span className="font-semibold text-sm">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
