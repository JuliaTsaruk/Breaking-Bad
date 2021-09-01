import React from "react";
import Card from "./components/molecules/Card";
import "./assets/styles/app.scss";

function App() {
  return (
    <div className="App">
      <div className="card-block">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
