import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-black py-16 text-white w-full h-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Discover Your Next Great Read</h1>
          <p className="text-xl mb-6">Personalized ebook recommendations tailored to your unique tastes and preferences</p>
        </div>
      </div>
    </div>
  );
};

export { Hero as component }