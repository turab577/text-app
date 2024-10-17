import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({ msg: message });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const removeClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-primary");
  };

  const toggleMode = () => {
    console.log("Toggling mode"); 
    removeClasses();
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    document.body.style.backgroundColor = newMode === "dark" ? "#212529" : "white";
    showAlert(`${newMode === "dark" ? "Dark" : "Light"} mode activated`);
  };
  

  const changeBackground = (cls) => {
    removeClasses();
    document.body.classList.add("bg-" + cls);
    showAlert(`${cls.charAt(0).toUpperCase() + cls.slice(1)} mode activated`);
  };

  return (
    <>
    
              
                
              
      <Router>
        <Navbar
          title="TextUtils"
          about="About us"
          mode={mode}
          toggleMode={toggleMode}
          changeBackground={changeBackground}
        />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
          <Route 
              path="/" 
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            />
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="*" element={<Navigate to="/" />} />
            
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
