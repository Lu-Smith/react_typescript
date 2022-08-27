import React, {FC} from 'react';
import type { RootState } from '../store';
import { useSelector} from 'react-redux';
import "../styles/CowTypes.css";

const CowTypes: FC = () => {

  const changetheme = useSelector((state: RootState) => state.changetheme.value);

  return (
    <div className='CowTypes'>
      <div className={changetheme}>
         <h2>Type</h2>
         <div>
            <img src='https://lh3.googleusercontent.com/U76Rqh8XMN5mX69YHehblKxzDJYnXzM02DsOE8K2smcwQEZ5rs2a3p4VIJDsk5-p_oRjkVa62uzPsEmfJJxL10wOAT2xCV-AV7H207E=w600' alt='Flower Moo' />
            <h5>Flower Moo</h5>
         </div>
      </div>
    </div>
  )
}

export default CowTypes;