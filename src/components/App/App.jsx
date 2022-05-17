import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

//MUI fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';


import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import CreateAccount from '../CreateAccount/CreateAccount';
import RegisterPage from '../RegisterPage/RegisterPage';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#DC4634',
        light: '#FFAA45'
      },
      secondary: {
        main: '#352558',
        light: '#DACCFF'
      },
      info: {
        main: '#546D1D'
      },
      background: {
        default: '#F6F3E3',
      },
    },
    typography: {
      h1: {
        fontFamily: ['DM Serif Display', 'serif']
          .join(',')
      },
      h2: {
        fontFamily: ['DM Serif Display', 'serif']
          .join(',')
      },
      h3: {
        fontFamily: ['DM Serif Display', 'serif']
          .join(',')
      },
      h4: {
        fontFamily: ['DM Serif Display', 'serif']
          .join(',')
      },
      h5: {
        fontFamily: ['DM Serif Display', 'serif']
          .join(',')
      },
      h6: {
        fontFamily: ['DM Serif Display', 'serif']
          .join(',')
      },
      button: {
        fontFamily: ['DM Serif Display', 'serif']
          .join(',')
      },
      body1: {
        fontFamily: ['Lato', 'sans-serif;']
          .join(','),
        fontWeight: 400,
      },
      body2: {
        fontFamily: ['Lato', 'sans-serif;']
          .join(','),
        fontWeight: 400,
      },
      subtitle1: {
        fontFamily: ['Lato', 'sans-serif;']
          .join(','),
        fontWeight: 100,
      },
      subtitle2: {
        fontFamily: ['Lato', 'sans-serif;']
          .join(','),
        fontWeight: 300,
      }
    },

  });

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
            >
              <AboutPage />
            </Route>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the Login (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows Login
              exact
              path="/user"
            >
              <UserPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows InfoPage else shows Login
              exact
              path="/info"
            >
              <InfoPage />
            </ProtectedRoute>

            <Route
              exact
              path="/login"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /user page
                <Redirect to="/user" />
                :
                // Otherwise, show the login page
                <Login />
              }
            </Route>

            <Route
              exact
              path="/registration"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/user" />
                :
                // Otherwise, show the registration page
                <CreateAccount />
              }
            </Route>

            <Route
              exact
              path="/home"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/user" />
                :
                // Otherwise, show the Landing page
                <LandingPage />
              }
            </Route>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
