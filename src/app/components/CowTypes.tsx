import React, {FC} from 'react';
import type { RootState } from '../store';
import { useDispatch, useSelector} from 'react-redux';
import { addType } from '../../features/typesSlice';
import { removeTypeChoice } from '../../features/typeschoiceSlice';
import "../styles/CowTypes.css";

interface Types {
  id: number;
  src: string;
  name: string;
  index: number;
}

const CowTypes: FC<Types> = ({src, name, id, index}) => {

  const changetheme = useSelector((state: RootState) => state.changetheme.value);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addType({src, name, id}));
    dispatch(removeTypeChoice(index));
  }
  return (
    <div className='CowTypes'>
      <div className={changetheme}>
         <div onClick={handleClick}>
            <img src={src} alt={name} />
            <h5>{name}</h5>
         </div>
      </div>
    </div>
  )
}

export default CowTypes;