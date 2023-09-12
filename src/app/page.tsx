import { Pokemon } from '@/@types/pokemon';
import Card from '@/components/Card/Card';

const getData = async () => {
  const responseJson = await fetch('https://api-pokemon-fr.vercel.app/api/v1/pokemon');
  const response = await responseJson.json();
  return response as Pokemon[];
};

export default async function Home() {
  const data = await getData();
  const first10pokemons = data.slice(1, 10);

  return (
    <main className="min-h-screen p-4">
      <h2 className="text-red-600 hover:text-yellow-400">
        Pokedex
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 p-2">
        {
          first10pokemons.map((pokemon) => (
            <Card pokemon={pokemon} key={pokemon.pokedexId} />
          ))
        }
      </div>
    </main>
  );
}
