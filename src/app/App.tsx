import React from 'react';
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom';
import Register from './Page/Register';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Cast from './pages/Cast/Cast';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Homescreen from './pages/Homescreen/Homescreen';
import Profile from './pages/Profile/Profile';
import TVShowDetails from './pages/TVShowDetails/TVShowDetails';

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: '/', Component: Homescreen, exact: true },
  { path: '/login', Component: Login },
  { path: '/register', Component: Register },
  { path: '/forgotpassword', Component: ForgotPassword },
  { path: '/profile', Component: Profile },
  { path: '/casts/:name', Component: Cast },
  { path: '/movie/:name', Component: MovieDetails },
  { path: '/tvshows/:name', Component: TVShowDetails },
];

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ Component, ...routeProps }) => (
          <Route key={routeProps.path} {...routeProps}>
            <Component />
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
