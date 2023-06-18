import React from 'react';

const workExperiences = [
  {
    title: "Front-End Developer",
    company: "Lazarus Network",
    duration: "December 2022 - Present",
    description: "Led development of Netsepio Chrome extension, built Sotreus VPN frontend, and enhanced web app features. Designed engaging landing pages, resulting in 30% user engagement increase. Collaborated with team for buildspace's nights and weekends season-3."
  },
  {
    title: "Full-Stack Developer",
    company: "SpectraCart",
    duration: "August 2022 - January 2023",
    description: "Leveraged MERN stack for drop servicing business. Microservice architecture enhanced maintainability, scalability, and fault isolation. Built robust e-commerce platform for increased customer satisfaction and improved sales performance."
  },
  {
    title: "Full-Stack Developer",
    company: "Detasys",
    duration: "November 2021 - November 2022",
    description: "I gained valuable experience as a Fullstack Developer intern at Detasys, where I contributed to projects like Ecommerce Stores, CRM, and CMS, delivering tailored solutions to clients. I also led a team in integrating new services into the Deta ERP system, enhancing its functionality."
  },
  {
    title: "Back-End Developer",
    company: "Freelancer",
    duration: "June 2021 - Present",
    description: "As a self-employed Fullstack Developer, I have utilized a range of technologies such as Python, JavaScript, React, and Node.js to deliver custom solutions for various projects. With a portfolio of over 10 deployed projects, including web apps, desktop and mobile applications, and automation systems, I prioritize client satisfaction through robust web development and effective communication."
  },
];

const WorkExperience = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-5xl font-bold sm:text-5xl text-[#46c1fe]">
            My Work Experience
          </h2>
          <p className="mt-4 text-xl text-[#fffff0]">
            A showcase of my diverse professional journey and the impact I've made along the way.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {workExperiences.map((workExperience, index) => (
            <div key={index} className="block rounded-xl p-8 shadow-xl transition hover:border-[#46c1fe] hover:shadow-[#46c1fe]">
              <h2 className="text-xl font-bold text-[#46c1fe]">{workExperience.title} | {workExperience.company} | {workExperience.duration}</h2>
              <p className="mt-5 text-sm text-[#fffff0]">{workExperience.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WorkExperience;
