import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//MUI imports
import { AppBar, Box, Toolbar, Typography, Button, Stack, IconButton } from '@mui/material';
import { AccountCircle, Logout, AccountBox, Login } from '@mui/icons-material';

function Nav() {
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ borderBottom: "1px #546D1D solid", backgroundColor: "white", pl:5, pr:5, minWidth:1200 }}
      fontFamily="Lato, sans-serif"
    >


        {/* ABOUT button */}
        <Box>
          <Button
            onClick={() => history.push("/about")}
            sx={{
              fontFamily: "Lato, sans-serif",
              color: "#546D1D",
              fontSize: "1em",
              mr:5
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
              fontSize: "1em"
            }}
          >
            How It Works
          </Button>
        </Box>

        {/* LOGO / HOME LINK */}
        <Link to="/">
          <Box
            component="img"
            sx={{
              height: "5em",
              width: "12em",
            }}
            alt="DeskSides Logo"
            src="/images/desksides-logo.svg"
          />
        </Link>


        {/* DISPLAYS WHEN USER NOT LOGGED IN - REGISTRATION AND LOGIN BUTTONS */}
        {!user.id && (
          <Box>
            <Button
              onClick={() => history.push("/registration")}
              sx={{ color: "#546D1D", mr:4}}
            >
              <Typography>
                Get Started
              </Typography>
            </Button>
            <Button onClick={() => history.push("/login")} sx={{ color: "#546D1D", }}>
              <Login/>
              <Typography sx={{ml:1}}>
                Sign In
              </Typography>
            </Button>
          </Box>
        )}

        {/* DISPLAYS WHEN USER LOGGED IN - USERNAME AND USER PROFILE */}
        {user.id && (
          <Box>
            <Button onClick={() => history.push("/user")} sx={{ color: '#546D1D' }}>
              <AccountCircle />
              <Typography sx={{ ml: 1, mr: 3, textTransform: 'uppercase' }}>
                {user.first_name}
              </Typography>
            </Button>
            <Button sx={{ color: '#546D1D' }} onClick={() => dispatch({ type: 'LOGOUT' })}>
              <Logout />
              <Typography sx={{ ml: 1 }}>
                LOGOUT
              </Typography>
            </Button>

          </Box>
        )}
    </Stack>
  );
}

export default Nav;
