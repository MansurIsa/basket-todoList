import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../actions/MainAction'
import Card from './Card'

const Container = () => {
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])


    const {countries}=useSelector(state=>state.Data)


    console.log(countries);
    


  return (
    <div>
        {
            countries?.map((data,i)=>{
                return <Card key={i} data={data}/>
            })
        }
    </div>
  )
}

export default Container