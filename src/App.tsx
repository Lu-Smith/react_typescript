import React, {FC} from 'react';
import './App.css';
import ChangeTheme from './app/components/ChangeTheme';
import CowCollection from './app/components/CowCollection';
import CowTypes from './app/components/CowTypes';
import Footer from './app/components/Footer';

import type { RootState } from './app/store';
import { useSelector} from 'react-redux';


const App:FC = () => {

  const types = useSelector((state: RootState) => state.types.value);
  const typeschoice = useSelector((state: RootState) => state.typeschoice.value);
  const changetheme = useSelector((state: RootState) => state.changetheme.value);

  return (
    <div className="App">
      <ChangeTheme />
      <h1>Cows are taking over the WORLD</h1>
      <div className='main-content'>
        <div className={changetheme}>
          <h2>Type</h2>
          {typeschoice.map((typeschoice, index: number) => {
          return <CowTypes key={typeschoice.id} src={typeschoice.src} name={typeschoice.name} index={index} id={typeschoice.id}/>
          })}
        </div>
        <div className={changetheme}>
        <h2 className='collection-title'>Collection</h2>
          {types.map((types, index) => {
          return <CowCollection key={types.id} src={types.src} name={types.name} id={types.id} index={index}/>    
          })}
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
