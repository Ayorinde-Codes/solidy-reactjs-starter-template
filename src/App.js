import React, {useState, useEffect}  from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Index from "./components/website";
import Header from "./components/website/header";
import Notfound from "./components/notfound";



export default function App() {

  return (
    <div>
      <Router>
        <Header/>
        <br/>

        <Switch>
          <Route exact path="/" component={Index} />

          <Route path="*" component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}
