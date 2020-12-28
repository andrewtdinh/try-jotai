import React from 'react';
import { atom, Provider, useAtom } from 'jotai';

const filterAtom = atom('')

function App() {
  const [filter, setFilter] = useAtom(filterAtom);
  return (
    <div style={{
      width: 800,
      margin: 'auto',
      padding: '1rem',
    }}>
      <input
        value={filter}

      ></input>
      <div>Hi there!</div>
    </div>
  );
}

export default (<Provider><App /></Provider>);
 