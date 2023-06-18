import React from 'react';

const skills = [
  // Languages
  "Python",
  "JavaScript",
  "TypeScript",
  "HTML/CSS",

  // Frontend Development
  "ReactJs",
  "NextJs",
  "Angular",
  "Vue.js",
  "Redux",

  // Backend Development
  "NodeJs",
  "ExpressJs",
  "Flask",
  "FastAPI",
  "Django",

  // Natural Language Processing (NLP) and Machine Learning (ML) Frameworks
  "TensorFlow",
  "PyTorch",
  "HugginFace",
  "Langchain",

  // Cloud Platforms and Deployment
  "AWS",
  "Microsoft Azure",
  "GCP",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Travis CI",

  // Version Control and Collaboration
  "Git",
  "GitHub",

  // Testing and Quality Assurance
  "Unit Testing",
  "TDD",
  "CI/CD",
  "Selenium",
  "Puppeteer",

  // Relational Database
  "PostgreSQL",
  "MySQL",
  "Oracle",

  // Non-Relational Database
  "MongoDB",
  "Redis",
  "Cassandra",

  // Vector Database
  "FAISS",
  "ElasticSearch",
  "Pinecone",
  "Milvus"
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
