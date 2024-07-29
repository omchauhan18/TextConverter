// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import Abouts from './components/Abouts';
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


// let name = "om";
function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
      })
      setTimeout(() =>{
        setAlert(null);
      },1500);
  }

  const [mode, setMode] = useState("light"); // wheather dark mode is enabled or not.
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert(" Dark mode has been enabled", "success");
    }
    else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert(" Light mode has been enabled", "success")
    }
  }
  return (
  <>
  {/* <Router> */}
    <Navbar title="TextConverTer" mode = {mode} toggleMode={toggleMode}/>
    {/* <Navbar/>s */}
    <Alert alert={alert}/>
    <div className="container">
      <TextForm/>
      {/* <Routes>
        <Route exact path="/abouts" element={<Abouts/>}>
        </Route> */}
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here to do change:" mode = {mode} />}> */}
        {/* </Route>
      </Routes> */}
      </div>
    {/* </Router> */}

  </>
  );
}

export default App;
