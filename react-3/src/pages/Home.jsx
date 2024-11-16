import React from 'react'
import { Link } from 'react-router-dom'
import IncDec from '../components/IncDec'
import InpBtn from '../components/InpBtn'

const Home = () => {
  return (
    <div>
        {/* <a href="/haqqimizda">haqqimizdaya kecid et</a>
        <hr /> */}

        {/* <Link to={'/haqqimizda'}>haqqimizdaya kecid et</Link> */}
        {/* <IncDec/> */}
        <InpBtn/>
    </div>
  )
}

export default Home