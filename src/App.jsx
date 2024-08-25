import React from "react";
import Weather from "./Components/Weather";
import './App.css'

const App = () => {
  return(
    <div className="app">
      <img src={('assets/logo.png')} alt="" className="logo"/>
      <Weather />
    </div>
  )
}

export default App;