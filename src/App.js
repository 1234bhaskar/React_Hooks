import './App.css';
import { useState,useEffect } from 'react';
function App() {
  var [state,setState]=useState(0);
   
  //in a useEffect a callback function is Passed whenEver the value of 'state' is changed the use Effect will execute.
  useEffect(()=>{
      console.log("Showing Effect")
  },[state])
  return (
    <div className="App">
     <button onClick={()=>setState(state+1)}>+</button>
     <p>{state}</p>
     <button onClick={()=>setState(state-1)}>-</button>
    </div>
  );
}
export default App;
 