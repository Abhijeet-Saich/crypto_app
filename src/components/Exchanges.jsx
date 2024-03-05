import React ,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getExchange } from '../store/slices/exchangeSlice';

const Exchanges = () => {
  const dispatch = useDispatch();

  useEffect(()=>{

    // dispatch(getExchange());

  },[])
  return (
    <div>Exchanges</div>
  )
}

export default Exchanges