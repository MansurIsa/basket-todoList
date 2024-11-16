import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const Products = () => {
    const {products}=useSelector(state=>state.Data)
  return (
    <div>
        {
            products?.map((data,i)=>{
                return <ProductCard key={i} data={data}/>
            })
        }
    </div>
  )
}

export default Products