import {Route,Routes} from 'react-router-dom'
import Home from "./Home/Home.jsx"
import Askquestions from "./Askquestions/Askquestions.jsx"
/*import Question from './Questions/Question.jsx'*/
function Allroutes( Slidein,handleslidein) {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home Slidein={Slidein} handleslidein={handleslidein}/>}>  
        <Route path='/Askquestions' element={ <Askquestions/> } />
       {/*<Route path='./Questions/Question.jsx' element={ <Question.jsx/> }/>*/ } 
        </Route>
      </Routes>

    </div>
  )
}

export default Allroutes

