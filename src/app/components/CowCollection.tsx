import React, {FC} from 'react';
import type { RootState } from '../store';
import { useDispatch, useSelector} from 'react-redux';
import { removeType } from '../../features/typesSlice';
import { addTypeChoice } from '../../features/typeschoiceSlice';
import "../styles/CowCollection.css";

interface Types {
  id: number;
  src: string;
  name: string;
  index: number;
}

const CowCollection: FC<Types> = ({src, name, id, index }) => {

  const changetheme = useSelector((state: RootState) => state.changetheme.value);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(removeType(index));
    dispatch(addTypeChoice({src, name, id}));
  }

  return (
    <div className='CowCollection'>
      <div className={changetheme}>
         <div onClick={handleClick}>
            <img src={src} alt={name} />
            <h5>{name}</h5>
         </div>
      </div>
    </div>

  )
}

export default CowCollection;