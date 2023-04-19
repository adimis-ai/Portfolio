import React from 'react';

const workExperiences = [
  {
    title: "Front-End Developer",
    company: "Lazarus Network",
    duration: "December 2022 - March 2023",
    description:
      "I led the frontend development of the Netsepio Chrome Extension at Lazarus Network, using ReactJS and SvelteKit. I also developed a feature-rich web app and designed landing pages for Lazarus Network's products, resulting in a 30% increase in user engagement.",
  },
  {
    title: "Full-Stack Developer",
    company: "SpectraCart",
    duration: "November 2022 - January 2023",
    description:
      "During my self-employment journey, I built an e-commerce store using React.js, Node.js, and MongoDB. My efforts led to a 25% increase in website traffic, 20% increase in sales, 15% increase in organic traffic, and a 99% customer satisfaction rating.",
  },
  {
    title: "Back-End Developer",
    company: "Detasys",
    duration: "August 2021 - December 2022",
    description:
      "At Detasys, I led multiple software projects using React.js, Node.js, Express.js, Flask, Python, TensorFlow, PyTorch, and FastAPI. My accomplishments include a 20% increase in productivity, 15% reduction in development time, and staying ahead of technology trends.",
  },
  {
    title: "Back-End Developer",
    company: "Freelancer",
    duration: "April 2021 - November 2022",
    description:
      "As a freelance fullstack developer, I worked on diverse projects across various industries, consistently exceeding client expectations and receiving 5-star ratings on all projects. I developed a mobile app for tracking daily expenses and a web app connecting patients with doctors for online consultations etc.",
  },
];

const WorkExperience = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-5xl font-bold sm:text-5xl text-transparent bg-clip-text leading-12 bg-gradient-to-r from-black via-teal-700 to-black">
            My Work Experience
          </h2>
          <p className="mt-4 text-xl text-gray-900">
            A showcase of my diverse professional journey and the impact I've made along the way.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {workExperiences.map((workExperience, index) => (
            <div key={index} className="p-10 block rounded-xl p-8 shadow-xl transition hover:border-teal-900/30 hover:shadow-teal-900/80">
              <h2 className="text-xl font-bold text-teal-900">{workExperience.title} | {workExperience.company} | {workExperience.duration}</h2>
              <p className="mt-5 text-sm text-gray-900">{workExperience.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WorkExperience;
