import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

//MUI imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <Box sx={{ flexGrow: 1, border: "1px #546D1D solid" }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Button sx={{ fontFamily: "Lato, sans-serif", color: "#546D1D", ml: "5em" }}>
            About
          </Button>
          <Button sx={{ fontFamily: "Lato, sans-serif", color: "#546D1D", ml: "8em" }}>
            How It Works
          </Button>
          <Link href="/">
            <Box
              component="img"
              sx={{
                height: "5em",
                width: "11em",
                ml: "14em"
              }}
              alt="DeskSides Logo"
              src="/images/desksides-logo.svg"
            />
          </Link>
          <Button sx={{ fontFamily: "Lato, sans-serif", color: "#546D1D", ml: "23em" }}>
            Sign Up / Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>

    // <div className="nav">
    //   <Link to="/home">
    //     <h2 className="nav-title">Prime Solo Project</h2>
    //   </Link>
    //   <div>
    //     {/* If no user is logged in, show these links */}
    //     {!user.id && (
    //       // If there's no user, show login/registration links
    //       <Link className="navLink" to="/login">
    //         Login / Register
    //       </Link>
    //     )}

    //     {/* If a user is logged in, show these links */}
    //     {user.id && (
    //       <>
    //         <Link className="navLink" to="/user">
    //           Home
    //         </Link>

    //         <Link className="navLink" to="/info">
    //           Info Page
    //         </Link>

    //         <LogOutButton className="navLink" />
    //       </>
    //     )}

    //     <Link className="navLink" to="/about">
    //       About
    //     </Link>
    //   </div>
    // </div>
  );
}

export default Nav;
