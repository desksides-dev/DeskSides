import React from "react";
import "./Footer.css";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useHistory } from 'react-router-dom';

function Footer() {
  const history = useHistory();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ borderTop: "1px #546D1D solid", backgroundColor: "white", pl:5, pr:5, minWidth:1200 }}
      fontFamily="Lato, sans-serif"
    >
      <Box>
        <Link
          fontFamily="inherit"
          sx={{ textDecoration: "none", color: "#546D1D", mr:5 }}
        >
          COPYRIGHT DESKSIDES © 2022
        </Link>

        {/* this link may need to be removed and spacing modified. it is currently a placeholder  */}
        <Link
          fontFamily="inherit"
          sx={{ textDecoration: "none", color: "#546D1D" }}
          href="#/comingsoon"
        >
          TERMS & CONDITIONS
        </Link>
      </Box>
      <Link href="/">
        <Box
          component="img"
          sx={{
            height: "5em",
            width: "11em",
          }}
          alt="DeskSides Logo"
          src="/images/desksides-logo.svg"
        />
      </Link>

      <Box>
        {/* this link needs official facebook address */}
        <Link
          fontFamily="inherit"
          sx={{ textDecoration: "none", color: "#546D1D" }}
          href="#/comingsoon"
        >
          FACEBOOK
        </Link>

        <Link
          sx={{ textDecoration: "none", color: "#546D1D", ml:5 }}
          fontFamily="inherit"
          href="https://www.instagram.com/desksides/"
          target="_blank"
        >
          INSTAGRAM
        </Link>

        {/* need to update hover/click color of this button */}
        <Button
          fontFamily="inherit"
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "#FFAA45",
            borderRadius: "2em",
            fontFamily: "Lato, sans-serif",
            fontWeight: "bold",
            ml:5
          }}
          href="mailto:blish@desksides.com"
        >
          CONTACT US
        </Button>
      </Box>
    </Stack>
  );
}

export default Footer;
