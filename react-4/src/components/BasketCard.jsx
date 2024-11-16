import React from 'react'
import { useDispatch } from 'react-redux'
import { minusFunc, plusFunc, xFunc } from '../redux/MainReducer'

const BasketCard = ({data}) => {
    const dispatch=useDispatch()
  return (
    <div>
        <p>{data?.title}</p>
        <p>price: {data?.count*data?.price}</p>
        {/* <button onClick={()=>dispatch(plusFunc(data?.id))}>+</button> */}
        <button data-x="+" onClick={(e)=>dispatch(xFunc({x: data?.id, y: e}))}>+</button>
        <span>{data?.count}</span>
        {/* <button onClick={()=>dispatch(minusFunc(data?.id))}>-</button> */}
        <button data-x="-" onClick={(e)=>dispatch(xFunc({x: data?.id, y: e}))}>-</button>
    </div>
  )
}

export default BasketCard