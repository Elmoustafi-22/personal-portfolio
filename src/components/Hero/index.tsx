import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold">I am Mustopha Abdulqadir</h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading mt-4 font-bold">A Software Engineer</h2>
        <p className="text-xl md:text-2xl font-body mt-8 max-w-4xl mx-auto">
          Full-Stack Web Developer skilled in React, Next.js, TypeScript, Node.js, and MongoDB. I build responsive, user-focused applications with seamless frontend–backend integration, optimized performance, and modern UI/UX design.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="https://drive.google.com/file/d/1_m2YQpUpusE_Bcoz-zHWfE28WuU3N7Ku/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700"
          >
            Resume
          </a>
          <a
            href="https://github.com/Elmoustafi-22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 flex items-center"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
