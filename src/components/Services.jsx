import "./Styles/style.css"

import React from 'react';

const services = [
  {
    title: "Fullstack Development",
    description:
      "All-in-one expert for frontend, backend, database, and deployment, streamlining your project with efficiency and exceptional results.",
  },
  {
    title: "Frontend Development",
    description:
      "Enhance your online presence with cutting-edge technologies, delivering intuitive and visually stunning interfaces to drive user engagement.",
  },
  {
    title: "Backend Development",
    description:
      "Establish a solid foundation with reliable, scalable backend solutions tailored to your needs, ensuring your project's success.",
  },
  {
    title: "Database Development",
    description:
      "Expertly organize and manage your data with tailored solutions using leading database technologies for secure, efficient storage.",
  },
  {
    title: "UI/UX Design",
    description:
      "Craft captivating and user-friendly designs, optimizing user experience with a perfect blend of aesthetics and functionality for maximum engagement.",
  },
  {
    title: "Project Management",
    description:
      "Achieve tight deadlines with ease using comprehensive project management, collaborating with skilled freelancers, and ensuring smooth, timely project execution.",
  },
];

const Services = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-5xl font-bold sm:text-5xl text-transparent bg-clip-text leading-12 bg-gradient-to-r from-black via-teal-700 to-black">
            Services I Provide
          </h2>
          <p className="mt-4 text-xl text-gray-900">
            Empowering you with professional web development services, tailored to your needs.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description }, index) => (
          <div key={index} className="p-10 block rounded-xl p-8 shadow-xl transition hover:border-teal-900/30 hover:shadow-teal-900/40">
            <h2 className="text-xl font-bold text-teal-900">{title}</h2>
            <p className="mt-5 text-md text-gray-900">
              {description}
            </p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
