import React from 'react';
import netsepio from '../assets/netsepio.png';
import sorteus from '../assets/sorteus.png';

const projects = [
    {
      name: "Netsepio",
      description:
        "An open-source Chrome extension and web app that employs blockchain technology to enable users to evaluate website credibility. Users can submit tamper-proof reviews and flag websites for safety, ensuring a more authentic browsing experience.",
      image: netsepio,
      github: 'https://github.com/NetSepio'
    },
    /*
    {
      name: "Sorteus",
      description:
        "An open-source VPN service utilizing WireGuard technology to establish secure and private network connections. With a robust API, it streamlines server and client management, creating a user-friendly VPN environment for enhanced security.",
      image: sorteus,
      github: 'https://github.com/'
    },
    */
    
];  

const Project = () => {
    const isSingleProject = projects.length === 1;
    return (
        <section>
        <div className="mx-auto max-w-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-5xl font-bold sm:text-5xl text-transparent bg-clip-text leading-12 bg-gradient-to-r from-black via-teal-700 to-black">
                    Recent Open Source Projects
                </h2>
                <p className="mt-4 text-xl text-gray-900">
                    Explore my latest open source projects that I'm actively contributing to, utilizing cutting-edge technologies to drive innovation and support the ever-evolving tech community.
                </p>
            </div>

            <div
                className={`mt-8 grid ${
                    isSingleProject ? 'justify-center' : 'grid-cols-1 md:grid-cols-2'
                } gap-8`}
            >
                {projects.map(project => (
                <div className="p-10 block rounded-xl p-8 shadow-xl transition hover:border-teal-900/30 hover:shadow-teal-900/80">
                    <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden">
                        <img className="w-full h-full object-fit" src={project.image} alt={project.name} />
                    </div>
                    <div className='flex justify-between'>
                        <h2 className="text-2xl font-bold text-teal-900">{project.name}</h2>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                    </div>
                    <p className="mt-5 text-sm text-gray-900">{project.description}</p>
                </div>
                ))}
            </div>


        </div>
        </section>
  );
};

export default Project;
