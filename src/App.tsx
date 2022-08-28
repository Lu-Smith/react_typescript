import React, {FC} from 'react';
import './App.css';
import ChangeTheme from './app/components/ChangeTheme';
import CowCollection from './app/components/CowCollection';
import CowTypes from './app/components/CowTypes';
import Footer from './app/components/Footer';
import * as data from './typesdata.json';
import type { RootState } from './app/store';
import { useSelector} from 'react-redux';

const typesdataString = JSON.stringify(data);
const typesdata = JSON.parse(typesdataString).typesdata;

interface Types {
  id: number;
  src: string;
  name: string;
  index: number;
}

const App:FC = () => {

  const types = useSelector((state: RootState) => state.types.value);
  const changetheme = useSelector((state: RootState) => state.changetheme.value);

  return (
    <div className="App">
      <ChangeTheme />
      <div className='main-content'>
        <div className={changetheme}>
        <h2>Type</h2>
        {typesdata.map((typesdata:Types, index: number) => {
          return <CowTypes key={typesdata.id} src={typesdata.src} name={typesdata.name} index={index} id={typesdata.id}/>
        })}
        
        </div>
        <div>
        <h2>Collection</h2>
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
