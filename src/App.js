
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
import React from 'react';
import {useState} from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode,setMode]=useState("dark");
  const [modeText,setmodeText]=useState("Enable Light Mode");
  const [modT,setmodT]=useState("white");

  const [alert,setAlert]=useState("null");

  const showAlert=(message,title)=>{
    setAlert({
      msg:message,
      title:title,
    })
    // setInterval(()=>{
    //  setAlert("null")
    // },1500)
  }
  const modechanger=()=>{
    if(mode==="dark"){
      setMode("light")
      setmodeText("Enable dark Mode")
      setmodT("dark")
      showAlert("Light Mode Enabled","Success")
      document.title='Textify-Light Mode'
    }
    else if(mode==="light"){
      setMode("dark")
      setmodeText("Enable light Mode");
      setmodT("white");
      showAlert("Dark Mode Enabled","Success")
      document.title='Textify-Dark Mode'
    }
  }
    

  
  return (
    // <Router>
    <div className="App">
   <Navbar title="Text-Converter" mode={mode} modeText={modeText}   modechanger={modechanger} modT={modT}  ></Navbar>
   <Alert alert={alert} ></Alert>
   <div className="container">
 
   {/* <Routes> */}
   
    {/* <Route exact path='/about'> element={<About />} </Route> */}
    
    {/* <Route exact path='/'>
    element={< TextForm showAlert={showAlert} />} */}
    < TextForm showAlert={showAlert} />
    {/* </Route>
    </Routes> */}
   
   
   </div>
   
    </div>
    // </Router>
  );
}

export default App;
