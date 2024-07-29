"use client";

import React from "react";
import { FaCopy, FaQuoteLeft } from "react-icons/fa";

interface CardProps {
  description: string;
}

const Card: React.FC<CardProps> = ({ description }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(description).then(
      () => {
        alert("Frase copiada al portapapeles!");
      },
      (err) => {
        console.error("Error al copiar: ", err);
      }
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 relative">
      <button onClick={handleCopy} className="absolute top-2 right-2">
        <FaCopy />
      </button>
      <p className="text-gray-700 text-xl p-5">{description}</p>
      <div>
        <FaQuoteLeft className="text-3xl relative" />
      </div>
    </div>
  );
};

export default Card;
