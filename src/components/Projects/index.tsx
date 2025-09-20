
import React from 'react';
import type { Project } from '../../types';

const projects: Project[] = [
  {
    title: "peermoove",
    image: "/images/peermoove.png",
    description:
      "peerMoove is a student-powered earning and delivery platform for campus life. Send, receive, or purchase anything on campus — fast, affordable, and powered by your peers.",
    technologies: ["React", "Tailwindcss"],
    github: "https://github.com/Moovee-Inc/moovee-website-frontend",
    live: "https://www.peermoove.com/",
    role: "Frontend Developer (Team Project)",
    contribution:
      "Implemented reusable UI components using React and Tailwind CSS, collaborated with the team on page structure",
  },
  {
    title: "Niyistores",
    image: "/images/niyistores.png",
    description:
      "An e-commerce website built with React, Next.js, and Tailwind CSS, offering a seamless shopping experience with intuitive navigation and responsive design. 🛍️✨",
    technologies: ["React", "Nextjs", "TailwindCss"],
    github: "https://github.com/Elmoustafi-22/niyistores",
    live: "https://niyistores.vercel.app/",
    role: "Fullstack Developer (Solo Project)",
    contribution:
      "Built product listings, shopping cart, and user interface with React and Tailwind. Integrated backend API and implemented responsive design across all pages.",
  },
  {
    title: "Remote Job Finder",
    image: "/images/remote-job-finder.png",
    description:
      "Remote Job Finder is a web application built with React, Next.js, and Tailwind CSS that helps job seekers, find remote job opportunities efficiently. 🚀💼",
    technologies: ["React", "Nextjs", "TailwindCss"],
    github: "https://github.com/Elmoustafi-22/remote-job-finder",
    live: "https://remote-job-finder.vercel.app/",
    role: "Solo Frontend Developer",
    contribution:
      "Created a responsive UI for browsing and filtering jobs, integrated job API endpoints, and optimized the site for usability and performance.",
  },
  {
    title: "GreenGlow",
    image: "/images/greenglow.png",
    description:
      "GreenGlow is a responsive single-page website with a plant-themed design, built using React and Tailwind CSS to promote eco-friendly living. 🌿✨",
    technologies: ["HTML5", "TailwindCss", "Javascript"],
    github: "https://github.com/Elmoustafi-22/greenglow",
    live: "https://greenglow.vercel.app/",
    role: "Frontend Developer",
    contribution:
      "Designed and built a responsive landing page with plant-themed visuals, styled using Tailwind CSS, and optimized for mobile and desktop views.",
  },
  {
    title: "BTWAWI",
    image: "/images/btwawi.png",
    description:
      "BTWAWI is a multi-page event-driven web application built with React, Tailwind CSS, Node.js, and MongoDB. It includes event booking, business nominations, donations, sponsorships, and dedicated Lagos and Abuja pages for regional events.",
    technologies: ["React", "TailwindCss", "Node.js", "MongoDB"],
    github: "https://github.com/Smartrove/btwawi-3.0", 
    live: "https://www.btwawi.com/",
    role: "Fullstack Developer (Team Project)",
    contribution:
      "Developed multiple frontend pages (booking, secure-a-booth, grant, business nomination, donation, sponsorship, contact, landing, Lagos, Abuja) using React and Tailwind CSS. Implemented backend form handling and integrations with Node.js and MongoDB, while optimizing SEO and performance across the platform.",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Role:</strong> {project.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Contribution:</strong> {project.contribution}</p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
