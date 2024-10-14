import Allroutes from "./Pages/Allroutes.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx"
import { BrowserRouter  } from 'react-router-dom';
import {useState,useEffect} from 'react'

function App() {
    const [Slidein,setSlidein]=useState(true)
    useEffect(()=>{
      if(window.innerWidth<=768){
        setSlidein(false)
      }
    },[])
    const handleslidein=()=>{
      if (window.innerWidth<=768){
        setSlidein((state)=>!state)
      }
    }
    
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar handleslidein={handleslidein} />
      <Allroutes Slidein={Slidein} handleslidein={handleslidein}/>
      </BrowserRouter>
    </div>
  )
}

export default App
