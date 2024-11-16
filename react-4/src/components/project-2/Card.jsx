import React from 'react'
import { Link } from "react-router-dom";

const Card = ({data}) => {
  return (
    <div>
        <img src={data?.flags?.png} alt="" />
        <p>{data?.name?.common}</p>
        <a href={data?.maps?.googleMaps}>go to maps</a>
    </div>
  )
}

export default Card