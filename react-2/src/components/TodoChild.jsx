import React from 'react'

const TodoChild = ({data,arr,x}) => {
    let newArr=[...arr]
    const delBtn=(z)=>{
        // console.log(z);
        let index=newArr.findIndex(y=>y.id===z)
        console.log(index);
        newArr.splice(index,1)
        console.log(newArr);
        x(newArr)
        localStorage.setItem("arr",JSON.stringify(newArr))
        
        
        
    }
  return (
    <div>
        <p>{data?.title}</p>
        <button onClick={()=>delBtn(data?.id)}>delete</button>
    </div>
  )
}

export default TodoChild