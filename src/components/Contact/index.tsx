import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Contact Me</h2>
        <form action="mailto:abdulqadirmustopha@gmail.com" method="post" encType="text/plain" className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
