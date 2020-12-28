import React from 'react';
import { useAtom } from 'jotai';
import { filterAtom, pokemonFilteredAtom } from './store';

const PokemonTable = () => {
  const [pokemon] = useAtom(pokemonFilteredAtom);

  return (
    <table width="100%">
      <tbody>
        {pokemon
          .map(({ id, name: { english }, type }) => (
            <tr key={`${id}`}>
              <td>{english}</td>
              <td>{type.join(', ')}</td>
            </tr>
        ))}
      </tbody>
    </table>
  )
}

const PokemonFilter = () => {
  const [filter, filterSet] = useAtom(filterAtom);

  return (
    <input
      value={filter}
      onChange={(evt) => filterSet(evt.target.value)}
    ></input>
  );
}

function App() {
  return (
    <div style={{
      width: 800,
      margin: 'auto',
      padding: '1rem',
    }}>
      <PokemonFilter />
      <PokemonTable />
    </div>
  );
}

export default App;
 