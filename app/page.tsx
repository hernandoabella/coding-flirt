import Card from './components/LoveCard';
import { phrases } from './data/phrases';

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
