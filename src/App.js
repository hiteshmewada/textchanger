import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// Can't resolve 'react-router-dom' in 'C:\Users\Archer\Desktop\react_course\textchanger\src' This error was resolved using ->  npm install react-router-dom --save
// if you want to use Switch then install react-router-dom version 5. 
// Switch is replaced in react-router-dom version 6.
// npm install react-router-dom@5
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// CLS -> Cumulative Layout shift is the shift of contents on website due to some other components and It should be minimised in website
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => [
    setAlert({
      msg: message,
      type: type,
    }),
    setTimeout(() => {
      setAlert(null);
    }, 1500),
  ];
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "dark";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title="Virus In";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Virus Out ";
      // }, 1500);
    }
  };
  return (
    <>
      {/* <Router> */}
        <div
          className="App"
          style={{ backgroundColor: mode === "dark" ? "#042743" : "white" }}
        >
          <Header
            title="TextUtils"
            about="About"
            mode={mode}
            toggleMode={toggleMode}
          />
          {/* <Header/> */}
                <Alert alert={alert} />
          <div className="container my-3">
            {/* <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/"> */}
              <TextForm
              heading="Enter the text to analyze below -> Word Counter | Character Counter | Remove Extra Spaces"
              mode={mode}
              showAlert={showAlert}
            />
              {/* </Route>
            </Switch> */}
            
            {/* <About/> */}
          </div>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
