import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './Page/Register';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Cast from './pages/Cast/Cast';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Homescreen from './pages/Homescreen/Homescreen';
import Profile from './pages/Profile/Profile';
import TVShowDetails from './pages/TVShowDetails/TVShowDetails';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homescreen />
        </Route>
        <Route path="/help">
          <p>Help</p>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/casts/:name">
          <Cast />
        </Route>
        <Route path="/movies/:name">
          <MovieDetails />
        </Route>
        <Route path="/shows/:name">
          <TVShowDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
