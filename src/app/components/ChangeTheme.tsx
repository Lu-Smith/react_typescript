import React, {FC} from 'react'
import "../styles/ChangeTheme.css";

const ChangeTheme: FC = () => {
  return (
    <div className='ChangeTheme'>
        <button className='light-theme'>Light</button>
        <button className='dark-theme'>Dark</button>
    </div>
  )
}

export default ChangeTheme;