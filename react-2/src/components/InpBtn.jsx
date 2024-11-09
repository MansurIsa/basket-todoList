import React, { useState } from 'react'

const InpBtn = ({arr,x}) => {
    const [inpVal,setInpVal]=useState("")
    let newArr=[...arr]


    const inpHandler=(e)=>{
        setInpVal(e.target.value)
    }

    const saveBtn=()=>{
        if(inpVal===""){
            alert("xanani doldur")
        }else{
            let newObj={
                id: arr.length+1,
                title: inpVal
            }
            newArr=[...newArr,newObj]
            console.log(arr);
            x(newArr)
            setInpVal("")
            localStorage.setItem("arr",JSON.stringify(newArr))
            
        }
    }
  return (
    <div>
        <input type="text" value={inpVal} onChange={inpHandler}/>
        <button onClick={saveBtn}>save</button>
    </div>
  )
}

export default InpBtn