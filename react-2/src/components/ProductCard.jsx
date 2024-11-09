import React from 'react'

const ProductCard = ({data,basket,products,setBasket}) => {
    let newBasket=[...basket]

    const addToCart=(y)=>{
        let checkBasket=newBasket.find(a=>a.id===y)
        if(checkBasket){
            checkBasket.count+=1
        }else{
            let checkPr=products.find(data=>data.id===y)
            checkPr.count=1
            newBasket=[...newBasket,checkPr]
        }
        setBasket(newBasket)
        localStorage.setItem("basketArr",JSON.stringify(newBasket))

    }
  return (
    <div className='card'>
        <p>{data?.title}</p>
        <button onClick={()=>addToCart(data?.id)}>add</button>
    </div>
  )
}

export default ProductCard