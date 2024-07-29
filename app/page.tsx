import React from 'react';
import Card from './components/LoveCard';
import { phrases } from './data/phrases';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {phrases.map((phrase, index) => (
          <Card key={index} title={phrase.title} description={phrase.description} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
