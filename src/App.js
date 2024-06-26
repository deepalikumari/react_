import './App.css';
import React, { useState } from 'react';

import Prgn1 from './components/prgn1';
import Prgn2 from './components/prgn2';
import Prgn3 from './components/prgn3';
import Prgn4 from './components/prgn4';
import Prgn5 from './components/prgn5';
import Prgn6 from './components/prgn6';
import Task from './components/Task';

export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
        <Prgn1/>
        <Prgn2/>
        <Prgn3 />
        <Prgn4 />

        <Prgn6 />
        <Task />
    </ToggleTheme.Provider>
  );
}

export default App;