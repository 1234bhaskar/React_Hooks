import React,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import App2 from './App2';
import App3 from './App3';

const Context = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={"Bhaskar"}>
      <App3/>
    </Context.Provider>
  </React.StrictMode>
);

export {Context} //for usecontext