import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

//MUI fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
// import RegisterPage from "../RegisterPage/RegisterPage";
import AdminList from "../AdminList/AdminList";
import AdminItem from "../AdminItem/AdminItem";
import JournalistAssessment from '../FormJournalist/FormJournalist';
import BrandAssessment from '../FormBrand/FormBrand';
import ThankYouJournalist from '../ThankYouPage/ThankYouJournalist';
import ThankYouBrand from "../ThankYouPage/ThankYouBrand";
import Login from '../Login/Login';
import CreateAccount from '../CreateAccount/CreateAccount';
import JournalistsList from '../JournalistsList/JournalistsList';
import ComingSoon from '../ComingSoonPage/ComingSoonPage';
import UserEdit from "../UserEditPage/UserEditPage";

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#DC4634",
        light: "#FFAA45",
      },
      secondary: {
        main: "#352558",
        light: "#DACCFF",
      },
      info: {
        main: '#546D1D',
        light: '#839b49',
        dark: '#284200'
      },
      background: {
        default: "#F6F3E3",
      },
      warning: {
        main: '#FFAA45'
      },
      success: {
        main: '#DACCFF'
      },
    },
    typography: {
      h1: {
        fontFamily: ["DM Serif Display", "serif"].join(","),
      },
      h2: {
        fontFamily: ["DM Serif Display", "serif"].join(","),
      },
      h3: {
        fontFamily: ["DM Serif Display", "serif"].join(","),
      },
      h4: {
        fontFamily: ["DM Serif Display", "serif"].join(","),
      },
      h5: {
        fontFamily: ["DM Serif Display", "serif"].join(","),
      },
      h6: {
        fontFamily: ["DM Serif Display", "serif"].join(","),
      },
      button: {
        fontFamily: ["DM Serif Display", "serif"].join(","),
      },
      body1: {
        fontFamily: ["Lato", "sans-serif;"].join(","),
        fontWeight: 400,
      },
      body2: {
        fontFamily: ["Lato", "sans-serif;"].join(","),
        fontWeight: 400,
      },
      subtitle1: {
        fontFamily: ["Lato", "sans-serif;"].join(","),
        fontWeight: 100,
      },
      subtitle2: {
        fontFamily: ["Lato", "sans-serif;"].join(","),
        fontWeight: 300,
      },
    },
  });

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <>
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
              {user.id && user.approved ?
                // If the user is approved, 
                // redirect to the /user page
                <UserPage />
                :
                // Otherwise, show the info page
                <InfoPage />
              } 
            </ProtectedRoute>

            <Route
              // logged in shows InfoPage else shows Login
              exact
              path="/info"
            >
              <InfoPage />
            </Route>
            
            <ProtectedRoute exact path = "/brand-journalists">
              <JournalistsList/>
            </ProtectedRoute>

            <Route
              exact
              path="/login"
            >
              {user.id && user.approved ? (
                // If the user is already logged in, 
                // redirect to the /user page
                <Redirect to="/user" />
              ) : (
                // Otherwise, show the login page
                <Login />
              )}
                
            </Route>

            <Route
              exact
              path="/assessment"
            >
              { (user.user_type === "brand") ?
                // If the user is selected "brand" when registering, 
                // show the Brand Assessment: 
                <BrandAssessment />
                :
                // Otherwise show the Journalist Assessment:
                <JournalistAssessment />
              }
            </Route>

            <Route
              exact
              path="/registration"
            >
              {user.id && user.approved ? (
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/user" />
              ) : (
                // Otherwise, show the registration page
                <CreateAccount />
              )}
            </Route>

            <Route
              exact
              path="/home"
            >
              {user.id && user.approved ? (
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/user" />
              ) : (
                // Otherwise, show the Landing page
                <InfoPage />
              )}
            </Route>

            {/* ADMIN list view, require authentication and authorization */}
            <ProtectedRoute exact path="/admin">
              <AdminList />
            </ProtectedRoute>

            {/* ADMIN list view, require authentication and authorization */}
            <ProtectedRoute path="/adminItem">
              <AdminItem />
            </ProtectedRoute>

            
            <Route  
              exact
              path="/thankyou"
            >
              { (user.user_type === "brand") ?
                // If the user is selected "brand" when registering, 
                // show the Brand Assessment: 
                <ThankYouBrand/>
                :
                // Otherwise show the Journalist Assessment:
                <ThankYouJournalist />
              }
            </Route>

            <Route exact path="/comingsoon">
              <ComingSoon />
            </Route>


            <ProtectedRoute exact path ="/user/edit">
              <UserEdit />
            </ProtectedRoute>
            
            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          <Footer />
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
