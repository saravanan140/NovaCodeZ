import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Service from './Service';
import Projects from './Projects';
import Contact from './Contact';
import Error from './Error';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Navbar} />
      <Route path="/project" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/service" exact component={Service} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
