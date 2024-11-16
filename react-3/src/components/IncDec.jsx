import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minus, plus } from '../redux/MainReducer'

const IncDec = () => {
    const dispatch=useDispatch()
    const {count}=useSelector(state=>state.Data)
    
  return (
    <div>
        <button onClick={()=>dispatch(plus())}>+</button>
        <span>{count}</span>
        <button onClick={()=>dispatch(minus())}>-</button>
    </div>
  )
}

export default IncDec