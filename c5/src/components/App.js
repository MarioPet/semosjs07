import React from 'react';
// import Header from "./Header";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";

import { Route, Switch } from "react-router-dom";
import Login from './Login';
import Dashboard from "./Dashboard";

class App extends React.Component {
  render() {
    return (
      <div id="app">

        {/* SIMPLE ROUTING  */}
        {/* <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch> */}
        {/* SIMPLE ROUTING  */}

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    )
  }
}

export default App;
