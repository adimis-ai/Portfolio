import React from 'react';

const workExperiences = [
  {
    title: "Front-End Developer",
    company: "Lazarus Network",
    duration: "December 2022 - May 2023",
    description: "Led development of Netsepio Chrome extension, built Sotreus VPN frontend, and enhanced web app features. Designed engaging landing pages, resulting in 30% user engagement increase. Collaborated with Buildspace team. Thrived in dynamic, innovative environments."
  },
  {
    title: "Full-Stack Developer",
    company: "SpectraCart",
    duration: "August 2022 - January 2023",
    description: "Leveraged MERN stack for drop servicing business. Microservice architecture enhanced maintainability, scalability, and fault isolation. Built robust e-commerce platform for increased customer satisfaction and improved sales performance."
  },
  {
    title: "Back-End Developer",
    company: "Detasys",
    duration: "August 2021 - August 2022",
    description: "Upgraded client management system, integrated additional services, and managed intern developers. Utilized React.js, Node.js, Express.js, Flask, Python, TensorFlow, PyTorch, and FastAPI. Delivered high-quality software solutions and demonstrated effective project management."
  },
  {
    title: "Back-End Developer",
    company: "Freelancer",
    duration: "April 2021 - Present",
    description: "Notable accomplishments include developing a mobile app for expense tracking, optimizing performance by 40%. Improved a web application's performance by 30% for online consultations. Built an Electron desktop app for Discord message filtering. Completed over 10 projects across industries with 5-star ratings. Thrived during COVID-19 lockdown, delivering exceptional results remotely."
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
