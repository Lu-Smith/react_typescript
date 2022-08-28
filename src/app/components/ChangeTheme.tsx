import React, {FC} from 'react'
import "../styles/ChangeTheme.css";
import {changeTheme} from '../../features/changethemeSlice';
import { useDispatch } from 'react-redux';

const ChangeTheme: FC = () => {
   
    const dispatch = useDispatch();


  return (
    <div className='ChangeTheme'>
        <button onClick={() => dispatch(changeTheme("light"))} className='light-theme'>Light</button>
        <button onClick={() => dispatch(changeTheme("dark"))} className='dark-theme'>Dark</button>
        <button onClick={() => dispatch(changeTheme("original"))} className='original-theme'>Original</button>
    </div>
  )
}

export default ChangeTheme;