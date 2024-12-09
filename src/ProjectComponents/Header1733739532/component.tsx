import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-red-500 text-yellow-400 p-4 w-full h-full">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-2xl font-bold">Your next best favorite is here</div>
      </div>
    </header>
  );
};

export { Header as component };