import React from 'react';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './home';
import Personal from './personal';
import Final from './final';


function App() {
  return (
      <>

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/personal" element={<Personal />}/>
          <Route path="/final-step" element={<Final />}/>


        

          
            
        </Routes>
      </BrowserRouter>
      
      </>
  );
}

export default App;
