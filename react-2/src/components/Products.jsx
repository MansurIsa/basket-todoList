import React from 'react'
import ProductCard from './ProductCard'

const Products = ({products,basket,setBasket}) => {
  return (
    <div>
        {
            products?.map((data,i)=>{
                return <ProductCard key={i} data={data} basket={basket} products={products} setBasket={setBasket}/>
            })
        }
    </div>
  )
}

export default Products