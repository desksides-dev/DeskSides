import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Nav.css";
import { useSelector } from "react-redux";

//MUI imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Stack from "@mui/material/Stack";

function Nav() {
  const user = useSelector((store) => store.user);
  const history = useHistory();

  return (
    <Stack
      direction="row"
      spacing={12}
      justifyContent="center"
      alignItems="center"
      sx={{ border: "1px #546D1D solid", backgroundColor: "white" }}
      fontFamily="Lato, sans-serif"
    >
      <Toolbar>

        {/* ABOUT button */}
        <Button
          onClick={() => history.push("/about")}
          sx={{
            fontFamily: "Lato, sans-serif",
            color: "#546D1D",
            fontSize: "1em",
          }}
        >
          About
        </Button>

        {/* HOW IT WORKS button */}
        <Button
          onClick={() => history.push("/info")}
          sx={{
            fontFamily: "Lato, sans-serif",
            color: "#546D1D",
            ml: "8em",
            fontSize: "1em"
          }}
        >
          How It Works
        </Button>

        {/* LOGO / HOME LINK */}
        <Link to="/">
          <Box
            component="img"
            sx={{
              height: "5em",
              width: "11em",
              ml: "10em"
            }}
            alt="DeskSides Logo"
            src="/images/desksides-logo.svg"
          />
        </Link>


        {/* DISPLAYS WHEN USER NOT LOGGED IN - REGISTRATION AND LOGIN BUTTONS */}
        {!user.id && (
          <>
            <Button
              onClick={() => history.push("/registration")}
              sx={{
                fontFamily: "Lato, sans-serif",
                color: "#546D1D",
                ml: "12em",
                fontSize: "1em",
              }}
            >
              Get Started
            </Button>
            <Button
              onClick={() => history.push("/login")}
              sx={{
                fontFamily: "Lato, sans-serif",
                color: "#546D1D",
                ml: "8em",
                fontSize: "1em",
              }}
            >
              Sign In
            </Button>
          </>
        )}

        {/* DISPLAYS WHEN USER LOGGED IN - USERNAME AND USER PROFILE */}
        {user.id && (
          <>
            <Button
              onClick={() => history.push("/user")}
              sx={{
                fontFamily: "Lato, sans-serif",
                color: "#546D1D",
                ml: "24em",
                fontSize: "1em"
              }}
            >
              {user.first_name}
            </Button>

            <Button
              onClick={() => history.push("/user")}
              sx={{
                fontFamily: "Lato, sans-serif",
                color: "#546D1D",
                fontSize: "1em"
              }}
            >
              <AccountCircleIcon />
            </Button>
          </>
        )}
      </Toolbar>
    </Stack>
  );
}

export default Nav;
