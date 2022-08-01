import { HourglassEmpty } from '@material-ui/icons';
import React from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

import Footer from './components/Footer';

import NavMenu from './components/NavMenu';
import MarchaMujer from './pages/8M';
import Bebes from './pages/Bebes';
import Civil from './pages/Civil';
import Contacto from './pages/Contacto';
import Embarazadas from './pages/Embarazadas';
import Embebes from './pages/Embebes';
import Eventos from './pages/Eventos';
import Fotoperiodismo from './pages/Fotoperiodismo';
import HIV from './pages/HIV';
import Inicio from './pages/Inicio';
import LGBT from './pages/LGBT';
import Portfolio from './pages/Portfolio';
import Producto from './pages/Producto';
import Servicios from './pages/Servicios';
import Skylab from './pages/Skylab';
import Sobremi from './pages/Sobremi';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu />

        <Switch>
          <Route path="/sobremi">
            <Sobremi />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>

          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route exact path="/servicios" component={Servicios} />
          <Route
            exact
            path="/servicios/fotoperiodismo"
            component={Fotoperiodismo}
          />
          <Route path="/servicios/fotoperiodismo/lgbt" component={LGBT} />
          <Route path="/servicios/fotoperiodismo/hiv" component={HIV} />
          <Route path="/servicios/fotoperiodismo/8m" component={MarchaMujer} />

          <Route path="/productos">
            <Producto />
          </Route>
          <Route path="/embebes">
            <Embebes />
          </Route>
          <Route path="/bebes">
            <Bebes />
          </Route>
          <Route path="/embarazadas">
            <Embarazadas />
          </Route>
          <Route path="/eventos">
            <Eventos />
          </Route>
          <Route path="/civil">
            <Civil />
          </Route>
          <Route path="/skylab">
            <Skylab />
          </Route>
          <Route exact path="/">
            <Inicio />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}
