import React from 'react'
import { useSelector } from 'react-redux'
import BasketCard from './BasketCard'

const Basket = () => {
    const {basket}=useSelector(state=>state.Data)
  return (
    <div>
        {
            basket?.map((data,i)=>{
                return <BasketCard key={i} data={data}/>
            })
        }
    </div>
  )
}

export default Basket