import React from 'react';

const milestones = [
  {
    title: 'Currently participating in builspace night and weekends season 3.',
    description: '',
  },
  {
    title: 'Crafted an successful e-commerce store',
    description:
      'with React, Redux, and Node.js, featuring payment integration, user authentication, and shopping cart functionalities for seamless transactions.',
  },
  {
    title: 'Developed Frontend of Netsepio',
    description:
      'a blockchain-based Chrome extension for website safety and authenticity categorization, using SvelteKit for frontend development.',
  },
  {
    title: 'Created a webapp for sorteus a secure VPN service',
    description: 'a secure VPN service.',
  },
  {
    title: 'Managed a team of five',
    description:
      'to create an AWS-based inventory management system, increasing operational efficiency by 25% and improving inventory tracking accuracy by 20%.',
  },
  {
    title: 'Implemented a custom CMS',
    description:
      'using FastAPI and MongoDB for a publishing company, increasing content management efficiency by 30% and facilitating a 15% growth in published content.',
  },
  {
    title: 'Developed a mobile app',
    description:
      'for an organization to coordinate and manage fundraising events, raising donations and increasing volunteer participation by 50%.',
  },
  {
    title: 'Conducted a security audit',
    description:
      "for a healthcare company's software system, implementing measures to prevent data breaches and increasing overall system security by 40%.",
  },
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
            {milestones.map(({ title, description }) => (
              <div className="w-full block rounded-xl shadow-xl transition hover:border-teal-900/30 hover:shadow-teal-900/40">
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
