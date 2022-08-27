import React, {FC} from 'react';
import './App.css';
import ChangeTheme from './app/components/ChangeTheme';
import CowCollection from './app/components/CowCollection';
import CowTypes from './app/components/CowTypes';
import Footer from './app/components/Footer';


const App:FC = () => {

  return (
    <div className="App">
      <ChangeTheme />
      <div className='main-content'>
        <CowTypes />
        <CowCollection />
      </div>
        <Footer />
    </div>
  );
}

export default App;
