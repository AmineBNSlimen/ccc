import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const HatPage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
);
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={HatPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
