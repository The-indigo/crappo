import { useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';

const App = () => {
  
  return (
    <div>
      <Nav />
      <Home/>
    </div>
  );
}

export default App;
