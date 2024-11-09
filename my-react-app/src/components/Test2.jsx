import React, { useState } from 'react'

const Test2 = () => {
    const [inp,setInp]=useState("")
    const [test,setTest]=useState("")
    //let inp="salam"


    const inpHandler=(e)=>{
        console.log(e.target.value);
        setInp(e.target.value)
        
    }
    const saveBtn=()=>{
        if(inp===""){
            alert("xanani doldur")
        }else{
             setTest(inp)
             setInp("")
        }
       
    }
  return (
    <div>
        <input value={inp} onChange={inpHandler}  type="text" />
        <button onClick={saveBtn}>save</button>
        <p>{test}</p>
    </div>
  )
}

export default Test2