import React from 'react'

const BasketCard = ({data}) => {
  return (
    <div>
        <p>{data?.title}</p>
      
        <p>qiymet: {data?.count*data?.price}</p>
        <div>
            <button>+</button>
            <span>{data?.count}</span>
            <button>-</button>
        </div>
    </div>
  )
}

export default BasketCard