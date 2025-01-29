
import './App.css'

import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Game } from './screens/Game';
import { Landing } from './screens/landing';


function App() {


  return (
  <div className='h-screen w-screen bg-slate-800'>
 <BrowserRouter>
  <Routes>
<Route path='/' element={<Landing/>}/>
<Route path='/game' element={<Game/>}/>

  </Routes>
  </BrowserRouter>
  
  </div>
 

     
    
  )
}

export default App
