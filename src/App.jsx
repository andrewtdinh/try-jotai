import React from 'react';
import { atom, useAtom } from 'jotai';

const filterAtom = atom('');
const pokemonAtom = atom([]);

function App() {
  const [filter, filterSet] = useAtom(filterAtom);
  const [pokemon, pokemonSet] = useAtom(pokemonAtom);

  React.useEffect(() => {
    fetch('https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json')
      .then((resp) => resp.json())
      .then(pokemonSet)
  }, [])

  return (
    <div style={{
      width: 800,
      margin: 'auto',
      padding: '1rem',
    }}>
      <input
        value={filter}
        onChange={(evt) => filterSet(evt.target.value)}
      ></input>
      <div>{JSON.stringify(pokemon)}</div>
    </div>
  );
}

export default App;
 