import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavMenu from './components/NavMenu';
import Contacto from './pages/Contacto';
import Inicio from './pages/Inicio';
import Portfolio from './pages/Portfolio';
import Servicios from './pages/Servicios';
import Sobremi from './pages/Sobremi';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/sobremi">
            <Sobremi />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/servicios">
            <Servicios />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
