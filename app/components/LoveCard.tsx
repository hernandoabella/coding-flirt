import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
