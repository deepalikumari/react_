import { useState } from 'react';
import './App.css';
import Prgn6 from './components/prgn6';

export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <Prgn6/>
    </ToggleTheme.Provider>
  );
}

export default App;