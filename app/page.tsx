import Card from './components/LoveCard';

const phrases = [
  { title: 'Frase 1', description: 'Eres el semáforo a mi compilador.' },
  { title: 'Frase 2', description: '¿Quieres ser mi framework y así te complemento?' },
  { title: 'Frase 3', description: 'Nuestro amor es como un bucle infinito.' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {phrases.map((phrase, index) => (
          <Card key={index} title={phrase.title} description={phrase.description} />
        ))}
      </div>
    </main>
  );
}
