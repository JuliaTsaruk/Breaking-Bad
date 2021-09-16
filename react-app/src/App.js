import React from "react";
import "./assets/styles/app.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Main from "./components/pages/Main/component";
import CharactersList from "./components/pages/CharactersList/component";
import CharacterCard from "./components/pages/CharacterCard/component";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/list" component={CharactersList} />
        <Route path="/card" component={CharacterCard} />
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;