import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inpHandler, saveBtn } from '../redux/MainReducer'

const InpBtn = () => {
    const {inpVal}=useSelector(state=>state.Data)
    const {test}=useSelector(state=>state.Data)
    const dispatch=useDispatch()

  return (
    <div>
        <input type="text" value={inpVal} onChange={(e)=>dispatch(inpHandler(e))}/>
        <button onClick={()=>dispatch(saveBtn())}>save</button>
        <p>{test}</p>
    </div>
  )
}

export default InpBtn