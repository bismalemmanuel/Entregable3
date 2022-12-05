import React from 'react'
import '../App.css'

const Header = ({handleSubmit }) => {
  return (
    <div className='header'>
        <img src='/image/bannerRickyMorty.jpg'/> 
        
        <form onSubmit={handleSubmit }>
        <h1>Rick and Morty</h1> 
        <input id='inputSearch' type="text" placeholder='Escriba el nombre de la ubicación' />
        <button>Search</button>
     </form>

        </div>
  )
}

export default Header