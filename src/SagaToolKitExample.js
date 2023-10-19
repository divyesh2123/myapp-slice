import React, { useEffect } from 'react'

import {useDispatch,useSelector} from 'react-redux'
import { fetchTodos } from './slice/commentslice';

export default function SagaToolKitExample() {

    const dis = useDispatch();
    const ddd = useSelector(y=>y.comments);

    console.log(ddd);
   
    useEffect(()=>{
        dis(fetchTodos())

    },[])

    return (
    <div>SagaToolKitExample</div>
  )
}
