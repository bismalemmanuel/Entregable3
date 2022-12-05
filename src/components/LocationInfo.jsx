import React from 'react'
import '../App.css'

const LocationInfo = ({location}) => {

    
  return (
    <article className='subtitle'>
        
        <ul className='list'><li><span>Name: <br/> {location?.name}</span></li>
            <li><span>Type: <br/>{location?.type} </span></li>
            <li><span>Dimension: <br/>{location?.dimension}</span></li>
            <li><span>Population: <br/>{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo