import "./Styles/style.css"

import React from 'react';

const services = [
  {
    title: "Fullstack Development",
    description:
      "All-in-one expert for frontend, backend, database, and deployment, streamlining your project with efficiency and exceptional results.",
  },
  {
    title: "Machine Learning Engineering",
    description:
    "Elevate your business with my expert Machine Learning service. Custom solutions for predictive models, NLP, computer vision, and more."
  },
  {
    title: "UI/UX Design",
    description:
      "Craft captivating and user-friendly designs, optimizing user experience with a perfect blend of aesthetics and functionality for maximum engagement.",
  },
];

const Services = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-5xl font-bold sm:text-5xl text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#5de0e6] to-[#004aad]">
            Services I Provide
          </h2>
          <p className="mt-4 text-xl text-[#fffff0]">
            Empowering you with professional web development services, tailored to your needs.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description }, index) => (
          <div key={index} className="block rounded-xl p-8 shadow-xl transition hover:border-teal-900/30 hover:shadow-teal-900/40">
            <h2 className="text-xl font-bold text-[#46c1fe]">{title}</h2>
            <p className="mt-5 text-md text-[#fffff0]">
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
