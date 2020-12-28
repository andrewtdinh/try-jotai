import { atom } from 'jotai';

interface Pokemon {
  id: Number;
  name: {
    english: string;
  }
  type: string[];

}

export const filterAtom = atom<string>('');

const pokemonAtom = atom<Pokemon[]>(async () => 
  fetch(
    'https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json'
  ).then((resp) => resp.json())
);

export const pokemonFilteredAtom = atom<Pokemon[]>((get) => 
  get(pokemonAtom).filter((pokemon) =>
    pokemon.name.english
      .toLocaleLowerCase()
      .includes(get(filterAtom).toLocaleLowerCase())
  )
);