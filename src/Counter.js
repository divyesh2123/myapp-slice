import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './slice/counterslice';
export default function Counter() {

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);

  return (
    <div>
    
    
    <button onClick={() => dispatch(decrement())}>Decrement</button>
      <p>{counter.value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>

    </div>
  )
}
