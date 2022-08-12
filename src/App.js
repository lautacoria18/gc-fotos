import { HourglassEmpty } from '@material-ui/icons';
import React, { useEffect } from 'react';
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
import Bauti from './pages/Bebes/Bauti';
import Benicio from './pages/Bebes/Benicio';
import Francisco from './pages/Bebes/Francisco';
import Civil from './pages/Civil';
import Contacto from './pages/Contacto';
import Embarazadas from './pages/Embarazadas';
import Agostina from './pages/Embarazadas/Agostina';
import Debora from './pages/Embarazadas/Debora';
import Sol from './pages/Embarazadas/Sol';
import Embebes from './pages/Embebes';
import Eventos from './pages/Eventos';
import Experiencias from './pages/Experiencias';
import Fotoperiodismo from './pages/Fotoperiodismo';
import HIV from './pages/HIV';
import Inicio from './pages/Inicio';
import LGBT from './pages/LGBT';
import Portfolio from './pages/Portfolio';
import Producto from './pages/Producto';
import Personalizados from './pages/Productos/Personalizados';
import Tigan from './pages/Productos/Tigan';
import Servicios from './pages/Servicios';
import Skylab from './pages/Skylab';
import Sobremi from './pages/Sobremi';
import Florencia from './pages/Embarazadas/Florencia';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavMenu />

        <Switch onUpdate={() => window.scrollTo(0, 0)}>
          <Route path="/sobremi" component={Sobremi} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contacto" component={Contacto} />
          <Route exact path="/servicios" component={Servicios} />
          <Route exact path="/experiencias" component={Experiencias} />
          <Route
            exact
            path="/servicios/fotoperiodismo"
            component={Fotoperiodismo}
          />
          <Route path="/servicios/fotoperiodismo/lgbt" component={LGBT} />
          <Route path="/servicios/fotoperiodismo/hiv" component={HIV} />
          <Route path="/servicios/fotoperiodismo/8m" component={MarchaMujer} />
          <Route exact path="/servicios/productos" component={Producto} />
          <Route path="/servicios/productos/tigan" component={Tigan} />
          <Route
            path="/servicios/productos/personalizados"
            component={Personalizados}
          />
          <Route exact path="/servicios/maternidad" component={Embebes} />
          <Route exact path="/servicios/maternidad/bebes" component={Bebes} />
          <Route path="/servicios/maternidad/bebes/bauti" component={Bauti} />
          <Route
            path="/servicios/maternidad/bebes/benicio"
            component={Benicio}
          />
          <Route
            path="/servicios/maternidad/bebes/francisco"
            component={Francisco}
          />
          <Route
            exact
            path="/servicios/maternidad/embarazadas"
            component={Embarazadas}
          />
          <Route
            path="/servicios/maternidad/embarazadas/debora"
            component={Debora}
          />
          <Route
            path="/servicios/maternidad/embarazadas/florencia"
            component={Florencia}
          />
          <Route
            path="/servicios/maternidad/embarazadas/agostina"
            component={Agostina}
          />
          <Route path="/servicios/maternidad/embarazadas/sol" component={Sol} />
          <Route exact path="/servicios/eventos" component={Eventos} />
          <Route path="/servicios/eventos/natiagus" component={Civil} />
          <Route path="/servicios/eventos/skylab" component={Skylab} />
          <Route exact path="/" component={Inicio} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}
