import './App.css';
import React,{ useState } from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Alert from './components/Alert';

import Form from './components/Form';
// import About from './components/About';

function App() {

  const [mode,setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type = 'success') => {
    setAlert({
        'message':message,
        'type':type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#161515';
      document.body.style.color = 'white';
      showAlert('Dark Mode Enable');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#161515';
      showAlert('Light Mode Enable');
    }
  }

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar appName="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
          <div className="container">
           <Form title="Enter text to analayze below" alert={showAlert} />
            {/* <Routes>
              <Route path="/" element={<Form title="Enter text to analayze below" alert={showAlert} />} title="Home"/>
              <Route path="/about" element={<About />}/>
            </Routes> */}
          </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;