import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/MainReducer'

const ProductCard = ({data}) => {
    const dispatch=useDispatch()
  return (
    <div>
        <p>{data?.title}</p>
        <button onClick={()=>dispatch(addToCart(data?.id))}>add</button>
    </div>
  )
}

export default ProductCard