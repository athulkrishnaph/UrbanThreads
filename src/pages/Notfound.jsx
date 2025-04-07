import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-20 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center'>
        404 - Page Not Found
      </h1>
      <p className='text-gray-600 mb-8 text-center max-w-md'>
        Oops! The page you're looking for doesn't exist. It might have been
        moved or deleted.
      </p>
      <Link
        to='/'
        className='text-blue-500 hover:underline text-lg sm:text-xl'
      >
        Go back to the Home page
      </Link>
    </div>
  );
};

export default NotFound;
