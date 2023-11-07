import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Adopcion from './Adopcion';
import Transito from './Transito';

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/adopcion" component={Adopcion} />
      <Route path="/transito" component={Transito} />
    </Router>
  );
}

export default AppRouter;
