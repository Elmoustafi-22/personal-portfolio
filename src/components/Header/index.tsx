import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md font-body">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-heading text-2xl font-bold text-gray-800 dark:text-white">Dev Mustopha</div>
        <nav className="hidden md:flex items-center space-x-4">
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Projects</a>
          <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Skills</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Contact</a>
        </nav>
        <div className="md:hidden">
          <button type='button' title='hamburger' onClick={toggleMenu} className="text-gray-800 dark:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <a href="#projects" className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Projects</a>
            <a href="#skills" className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Skills</a>
            <a href="#contact" className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
