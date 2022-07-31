import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import About from './components/About';

function App() {

  const [mode, setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
      <TextForm   mode = {mode}/>
    </div>
      {/* <Routes>
          <Route path="/" element={} />
            <Route path="/about" element={<div className='container my-3'>
              <About   mode = {mode}/>
            </div>} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
