import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import InfoLocation from './components/InfoLocation'
import CardResidents from './components/CardResidents'



function App() {

  const [locationId, setlocationId ] = useState(Math.floor(Math.random() * 126) + 1)

  
  const url =`https://rickandmortyapi.com/api/location/${locationId}`
  const [ location, getlocation ,isloading, haserror]= useFetch(url)
useEffect(()=>{
 getlocation()
},[locationId])
 //console.log(location)
 

 const inputlocation = useRef()

 const handleLocation = e =>{
  e.preventDefault()
  setlocationId(inputlocation.current.value.trim())
 }
  return (
    <div className='app'>
      <h1 className='app__title'>rick and morty</h1>
      <form  className='app__form' onSubmit={handleLocation}>
        <input ref={inputlocation} type="text" />
        <button className='app__btn'>search</button>
      </form>
      {
       isloading
        ? <h2>loading..</h2>
        :(
      haserror || locationId === '0'
      ?<h2>hey! guys this not define </h2>
      :(
      <>
      <InfoLocation location={location}/>
      <div className='appp__clas-container'>
        {
          location?.residents.map(url =>(
            <CardResidents
            key={url}
            url={url}
            />
            ))
          }
      </div>
          </>
          ))
        }
    </div>
  )
}

export default App
