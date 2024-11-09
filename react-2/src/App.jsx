import React, { useState } from 'react'
import InpBtn from './components/InpBtn'
import TodoList from './components/TodoList'
import Products from './components/Products'
import Basket from './components/Basket'

const App = () => {
  // const [arr,setArr]=useState(JSON.parse(localStorage.getItem("arr")) || [])

  // const x=(y)=>{
  //   setArr(y)
  // }

  const [products,setProducts]=useState([
    {
      id: 1,
      title: "Telefon",
      price: 10
    },
    {
      id: 2,
      title: "Komputer",
      price: 15
    },
    {
      id: 3,
      title: "Planset",
      price: 25
    }
  ])
  const [basket,setBasket]=useState(JSON.parse(localStorage.getItem("basketArr"))||[])
  return (
    <div>
      {/* <InpBtn arr={arr} x={x}/>
      <hr />
      <TodoList arr={arr} x={x}/> */}
      <Products products={products} basket={basket} setBasket={setBasket}/>
      <hr />
      <Basket basket={basket}/>
      <button>temizle</button>
    </div>
  )
}

export default App