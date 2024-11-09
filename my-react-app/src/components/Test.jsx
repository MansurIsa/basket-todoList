import React, { useState } from 'react'

const Test = () => {
  const [count,setCount]=useState(3)
  //let count=3

  // const plus=()=>{
  //   setCount(count+1)
  // }

  // const minus=()=>{
   
  //   if(count>0){
  //     setCount(count-1)
  //   }
  // }


  const x=(e)=>{
    console.log(e.target.innerHTML);
    if(e.target.innerHTML==="+"){
      setCount(count+1)
    }else{
      setCount(count-1)
    }
    
  }

  return (
    <div>
        <button onClick={x}>+</button>
        <span>{count}</span>
        <button onClick={x}>-</button>
        
    </div>
  )
}

export default Test