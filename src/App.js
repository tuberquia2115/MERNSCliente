import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import Projects from './components/proyectos/Projects/Projects';
import ProyectoState from './context/proyecto/proyectoState';
import TareasState from './context/tareas/tareaState';

function App() {
  return (
    <ProyectoState>
      <TareasState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </TareasState>
    </ProyectoState>
  );
}

export default App;
