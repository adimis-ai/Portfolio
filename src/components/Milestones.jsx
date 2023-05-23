import React from 'react';

const milestones = [
  {
    title: 'Actively participating in builspace night and weekends season 3, continuously sharpening skills and staying ahead of industry trends.',
    description: '',
  },
  {
    title: 'Crafted a robust and successful e-commerce application',
    description:
      'using React, Redux, and Node.js. Implemented seamless payment integration, user authentication, and a fully functional shopping cart for secure and seamless transactions.',
  },
  {
    title: 'Developed the frontend of Netsepio, revolutionizing website safety and authenticity categorization',
    description:
      'by creating a blockchain-based Chrome extension. Utilized SvelteKit to deliver a user-friendly and efficient interface for enhanced security solutions.',
  },
  {
    title: 'Successfully created a secure VPN web application for Sorteus',
    description: 'using cutting-edge technologies and rigorous security measures to provide users with a reliable and private browsing experience.',
  },
  {
    title: 'Developed a seamless desktop app for Discord message filtering',
    description:
      'using React, TypeScript, and ElectronJS. Implemented secure user access through authentication with a Flask API server. Integrated memberful with Stripe for efficient subscription management.',
  },
  {
    title: 'Demonstrated exceptional leadership skills as a team manager',
    description:
      'while overseeing the development of an AWS-based inventory management system. Achieved a 25% increase in operational efficiency and improved inventory tracking accuracy by 20%.',
  },
  {
    title: 'Implemented a custom Content Management System (CMS) for a publishing company',
    description:
      'using FastAPI and MongoDB, leading to a 30% increase in content management efficiency and enabling a remarkable 15% growth in published content.',
  }
];


const Milestones = () => {
  return (
    <section>
      <div className="mb-12">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-5xl font-bold sm:text-5xl text-transparent bg-clip-text leading-12 bg-gradient-to-r from-black via-teal-700 to-black">
            Milestones
          </h2>
          <p className="mt-4 px-2 text-lg text-gray-900">
            Discover the transformative projects and accomplishments that have
            shaped my career journey and impact.
          </p>
        </div>
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <div className="space-y-4">
            {milestones.map(({ title, description }, index) => (
              <div key={index} className="w-full block rounded-xl shadow-xl transition hover:border-teal-900/30 hover:shadow-teal-900/40">
                <div className="px-4 py-6 focus:outline-none focus-visible:ring-teal-400 text-teal-900">
                  {title} {description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
