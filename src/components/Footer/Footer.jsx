import React from "react";
import "./Footer.css";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Footer() {
  return (
    <Stack
      direction="row"
      spacing={12}
      justifyContent="center"
      alignItems="center"
      sx={{ border: "1px #546D1D solid", backgroundColor: "white" }}
      fontFamily="Lato, sans-serif"
    >
      <Box>
        <Link
          fontFamily="inherit"
          sx={{ textDecoration: "none", color: "#546D1D" }}
        >
          COPYRIGHT © 2022
        </Link>
      </Box>

      <Box>
        {/* this link may need to be removed and spacing modified. it is currently a placeholder  */}
        <Link
          fontFamily="inherit"
          sx={{ textDecoration: "none", color: "#546D1D" }}
          href="/"
        >
          TERMS & CONDITIONS
        </Link>
      </Box>

      <Link href="/" sx={{ paddingLeft: "4em" }}>
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
          href="/"
        >
          FACEBOOK
        </Link>
      </Box>

      <Box>
        <Link
          sx={{ textDecoration: "none", color: "#546D1D" }}
          fontFamily="inherit"
          href="https://www.instagram.com/desksides/"
          target="_blank"
        >
          INSTAGRAM
        </Link>
      </Box>

      <Box>
        {/* need to update hover/click color of this button */}
        <Button
          fontFamily="inherit"
          variant="contained"
          sx={{
            backgroundColor: "#FFAA45",
            borderRadius: "2em",
            fontFamily: "Lato, sans-serif",
            fontWeight: "bold",
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
