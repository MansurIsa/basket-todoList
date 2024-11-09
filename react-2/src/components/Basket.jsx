import React from 'react'
import BasketCard from './BasketCard'

const Basket = ({basket}) => {
  return (
    <div>
        {
            basket?.map((data,i)=>{
                return <BasketCard data={data} key={i}/>
            })
        }
    </div>
  )
}

export default Basket