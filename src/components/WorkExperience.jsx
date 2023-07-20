import React from 'react';

const workExperiences = [
  {
    title: "Front-End Developer",
    company: "Lazarus Network",
    duration: "December 2022 - June 2023",
    description: "Led development of Netsepio Chrome extension, built Sotreus VPN frontend, and enhanced web app features. Designed engaging landing pages, resulting in 30% user engagement increase. Collaborated with team for buildspace's nights and weekends season-3."
  },
  {
    title: "Machine Learning Engineer & Full-Stack Developer",
    company: "Freelancer",
    duration: "March 2022 - December 2022",
    description: "Experienced in Machine Learning Engineering and Full-Stack Development. Created innovative AI solutions, user-friendly apps, and completed 10+ diverse projects. Notable accomplishments include automated AI agent with NLP and web app with custom recommendation engine. Passionate about delivering top-notch solutions."
  },
  {
    title: "Software Developer Intern",
    company: "Detasys",
    duration: "August 2021 - January 2022",
    description: "I gained valuable experience as a Software Developer intern at Detasys, where I contributed to projects like Ecommerce Stores, CRM, and CMS, delivering tailored solutions to clients. I also led a team in integrating new services into the Deta ERP system, enhancing its functionality."
  }
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
