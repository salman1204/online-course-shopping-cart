import React from "react";
import "./App.css";
import Shop from "./components/Shop/Shop";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";


function App() {
 
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
