import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import Home from 'pages/Home';
import Auth from 'pages/Home/Auth';
import MovieDetails from 'pages/MovieDetails';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Redirect from="/auth" to="/auth/login" exact/>
      <Route path="/auth">
        <Auth />
      </Route>

      <Route path="/movies" exact>
        <Catalog />
      </Route>

      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
