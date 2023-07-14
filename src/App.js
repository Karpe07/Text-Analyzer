import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [btn, setbtn] = useState("Enable Dark Mode");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggle = () => {
    if (mode === "light") {
      setmode("dark")
      setbtn("Enable Dark Mode")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been Enabled", "success")

    }
    else {
      setmode("light")
      setbtn("Enable light Mode")
      document.body.style.backgroundColor = "#d1e8fc"
      showAlert("Light mode has been Enabled", "success")
    }
  }

  return (
    <>
      <Router>
      <Navbar title="TextAnalyzer" mode={mode} toggle={toggle} button={btn} />
      <Alert alert={alert} />
      <div className='container my-3'>
        {/* <TextForm showAlert={showAlert} heading="Enter text for analysis" mode={mode} /> */}
      <Routes>
          <Route exact path="/about" element={<About mode={mode} />} ></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Text Analyzer | Word Counter" mode={mode} />} ></Route>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
