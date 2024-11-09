import React from 'react'
import TodoChild from './TodoChild'

const TodoList = ({arr,x}) => {
  return (
    <div>
        {
            arr?.map((data,i)=>{
                return <TodoChild key={i} data={data} arr={arr} x={x}/>
            })
        }
    </div>
  )
}

export default TodoList