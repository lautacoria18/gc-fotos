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

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu />

        <Switch>
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
          <Route exact path="/productos" component={Producto} />
          <Route path="/productos/tigan" component={Tigan} />
          <Route path="/productos/personalizados" component={Personalizados} />
          <Route exact path="/embebes" component={Embebes} />
          <Route exact path="/embebes/bebes" component={Bebes} />
          <Route path="/embebes/bebes/bauti" component={Bebes} />
          <Route path="/embebes/bebes/benicio" component={Bebes} />
          <Route path="/embebes/bebes/????" component={Bebes} />
          <Route exact path="/embebes/embarazadas" component={Embarazadas} />
          <Route path="/embebes/embarazadas/debora" component={Embarazadas} />
          <Route path="/embebes/embarazadas/analia" component={Embarazadas} />
          <Route path="/embebes/embarazadas/agostina" component={Embarazadas} />
          <Route path="/embebes/embarazadas/sol" component={Embarazadas} />
          <Route path="/eventos" component={Eventos} />
          <Route path="/civil" component={Civil} />
          <Route path="/skylab" component={Skylab} />
          <Route exact path="/" component={Inicio} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}
