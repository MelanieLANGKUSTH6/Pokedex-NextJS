'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const responseJson = await fetch('https://api-pokemon-fr.vercel.app/api/v1/pokemon');
      const response = await responseJson.json();
      console.log(response);
    };
    getData();
  }, []);

  return (
    <main className="min-h-screen p-4">
      <h2 className="text-red-600 hover:text-yellow-400">
        Pokedex
      </h2>
      <p className="">
        Nos pokémons
      </p>
    </main>
  );
}
