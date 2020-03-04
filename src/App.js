import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import Projects from './components/proyectos/Projects/Projects';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
