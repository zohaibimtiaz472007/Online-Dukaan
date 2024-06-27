import React from 'react';
import { Link } from 'react-router-dom';
import { RiRobotLine } from 'react-icons/ri';

const NotFoundPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-8 py-12 md:py-24 text-center text-white">
        <div className="mb-8">
          <RiRobotLine className="text-6xl mx-auto animate-bounce" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Oops! Page Not Found</h1>
        <p className="text-lg md:text-xl mb-8">The page you are looking for does not exist.</p>
        <p className="text-lg md:text-xl mb-8">But don't worry, our robot is looking for it...</p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
