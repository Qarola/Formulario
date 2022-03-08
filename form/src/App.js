import React from "react";
import Form from "./Components/Form/Form";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import "./stylesheets/App.scss";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<NavBar />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
