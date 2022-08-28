import React, {FC} from 'react';
import type { RootState } from '../store';
import { useDispatch, useSelector} from 'react-redux';
import { removeType, addType } from '../../features/typesSlice';
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
    dispatch(removeType(index));
    dispatch(addType({src, name, id}));

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