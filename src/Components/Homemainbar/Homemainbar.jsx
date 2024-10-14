 import "./Homemainbar.css"
 import { useLocation,useNavigate } from "react-router"
 import { useSelector } from "react-redux"
 import Questionlist from "./Questionlist.jsx"
 function Homemainbar() {
  const user=1;
  const location =useLocation();
  const navigate =useNavigate();
  const questionlist=null;
    const checkauth=()=>{
      if (user===null){
        alert("Login or signup to ask a question")
        navigate("/Auth")
      }
      else{
        navigate("/Askquestions")
      }
    }
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname==="/" ? ( <h1>Top Question</h1> ):( <h1>All Questions</h1> )}
        <button className="ask-btn" onClick={checkauth} >Ask Questions </button>
      </div>
      {questionlist===null ? ( <h2>Loading.....</h2> ):(<> <p>{Questionlist.data.length} Questions</p> 
        <Questionlist questionlist={Questionlist.data} /> </>)}
        
    </div>
  )
}

export default Homemainbar
