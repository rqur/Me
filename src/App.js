import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SearchPage from "./Components/SearchPage";
import axios from "axios";
import { useState, useDispatch } from "react";
import React from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/searchpage">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
