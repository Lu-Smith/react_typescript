import React, {FC} from 'react';
import './App.css';
import ChangeTheme from './app/components/ChangeTheme';
import CowCollection from './app/components/CowCollection';
import CowTypes from './app/components/CowTypes';
import Footer from './app/components/Footer';
import type { RootState } from './app/store';
import { useSelector} from 'react-redux';


const App:FC = () => {

  const changetheme = useSelector((state: RootState) => state.changetheme.value);
  return (
    <div className="App">
      <ChangeTheme />
      <div className='main-content'>
        <div className={changetheme}>
        <CowTypes />
        </div>
        <div className={changetheme}>
        <CowCollection />
        </div>
      </div>
        <Footer />
    </div>
    
  );
}

export default App;
