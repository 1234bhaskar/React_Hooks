import './App.css';
import { useState,useEffect } from 'react';
function App2() {
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
export default App2;


/**
 * Every time your component renders, React will update the screen and then run the code inside useEffect. In other words, useEffect “delays” a piece of code from running until that render is reflected on the screen.
 */