import React from "react";
import InputForm from "./components/InputForm";
import List from "./components/List";
import Footer from "./components/Footer";
import {FrDonnees} from './components/FrDonnees'

function App() {
  return (
    <FrDonnees>
      <div className="App">
        <h1>To Do <span>List</span></h1>
        <InputForm/>
        <List/>
        <Footer/>
      </div>
    </FrDonnees>
  );
}

export default App;
