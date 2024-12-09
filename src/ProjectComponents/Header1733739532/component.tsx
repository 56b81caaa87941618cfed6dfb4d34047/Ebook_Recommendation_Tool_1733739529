import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-red-600 text-yellow-400 p-4 w-full h-full">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-4xl font-bold">Your next best favorite is here</div>
      </div>
    </header>
  );
};

export { Header as component };