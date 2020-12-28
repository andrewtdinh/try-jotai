import React from 'react';
import { atom, Provider, useAtom } from 'jotai';

const filterAtom = atom('')

function App() {
  const [filter, filterSet] = useAtom(filterAtom);
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
      <div>{filter}</div>
    </div>
  );
}

export default (<Provider><App /></Provider>);
 