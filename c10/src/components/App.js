import React from 'react';
import { Switch, Link, Route } from "react-router-dom";
import Gallery from "./Gallery";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <header>
            <Link to="/gallery" className="portal">Take me to the Gallery</Link>
            <Link to="/" className="portal">Take me Home</Link>
          </header>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/gallery" component={Gallery} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;