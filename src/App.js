import { useEffect } from 'react';
import './App.css';
import Home from './components/Intro/Home';
import Nav from './components/Nav/Nav';

const App = () => {
  
  // useEffect(() => {
  //   var docWidth = document.documentElement.offsetWidth;
  //   console.log(docWidth);

  //   [].forEach.call(
  //     document.querySelectorAll('*'),
  //     function (el) {
  //       if (el.offsetWidth > docWidth) {
          
  //         console.log(el)
  //       }
  //     }
  //   )
  // })

  return (
    <div >
      <Nav />
      <Home/>
    </div>
  );
}

export default App;
