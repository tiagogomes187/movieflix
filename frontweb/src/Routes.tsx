import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoute';
import Admin from 'pages/Admin';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';
import Auth from 'pages/Home/Auth';
import MovieDetails from 'pages/MovieDetails';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import history from 'util/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Redirect from="/" to="/auth/login" exact />
      <Route path="/home" exact>
        <Home />
      </Route>

      <Route path="/admin">
        <Admin />
      </Route>
      
      <Redirect from="/auth" to="/auth/login" exact />
      <Route path="/auth">
        <Auth />
      </Route>

      <PrivateRoute path="/movies">
        <Route path="/movies" exact>
          <Catalog />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
