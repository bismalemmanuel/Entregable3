import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import Header from './components/Header'

function App() {
  const [location, setLocation] = useState()
  const [locationInput, setLocationInput] = useState()

  useEffect(() => {
    //las ubicaciones van de la 1 a la 126
    let  URL
    if(locationInput){
      URL =`https://rickandmortyapi.com/api/location/${locationInput}`     
    }else{
      const randomIdLocation = Math.floor(Math.random() * 126) + 1 
      URL =`https://rickandmortyapi.com/api/location/${randomIdLocation}`     
      
    }

    axios.get(URL)
    .then(res=>setLocation(res.data) )
    .catch(err => console.log(err))  
  }, [locationInput])

  const handleSubmit =e=>{
    e.preventDefault()
    setLocationInput(e.target.inputSearch.value)
  }


  return (
    <div className="App">
      <Header handleSubmit = {handleSubmit}/>
     

     <LocationInfo 
      location={location}/>
      <div className="residents-container">
        {
          location?.residents.map(url=>(
            <ResidentCard key={url} url={url}/>
          ))
        }

      </div>
    </div>
  )
}

export default App
