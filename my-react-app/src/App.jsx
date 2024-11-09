import React, { useState } from 'react'
import Test from './components/Test'
import Test2 from './components/Test2'
import Container from './components/Container'

const App = () => {
  const [arr,setArr]=useState([
    {
      id: 1,
      content: "alma"
    },
    {
      id: 2,
      content: "armud"
    },
    {
      id: 3,
      content: "nar"
    }
  ])
  return (
    <div>
      {/* <Test/> */}
      {/* <Test2/> */}
      <Container x={arr}/>
    </div>
  )
}

export default App