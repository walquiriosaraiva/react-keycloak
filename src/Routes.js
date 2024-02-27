import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <ProtectedRoute path="/rota-protegida" component={ComponentProtegido} />
    </Router>
  );
};

export default Routes;
