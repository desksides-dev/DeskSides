import React from "react";
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
      alignItems="center"
      justifyContent="center"
      sx={{
        borderTop: "1px #546D1D solid",
        borderBottom: "1px #546D1D solid",
        backgroundColor: "white",
      }}
      fontFamily="Lato, sans-serif"
    >
      <Box
        sx={{
          mx: "1vw"
        }}>
        <Link
          fontFamily="inherit"
          sx={{ textDecoration: "none", color: "#546D1D" }}
        >
          COPYRIGHT DESKSIDES © 2022
        </Link>
      </Box>
      <Box
        sx={{
          mx: "1vw"
        }}>
        {/* this link may need to be removed and spacing modified. it is currently a placeholder  */}
        <Link
          fontFamily="inherit"
          sx={{ textDecoration: "none", color: "#546D1D" }}
          href="#/comingsoon"
        >
          TERMS & CONDITIONS
        </Link>
      </Box>

      <Box
        sx={{
          mx: "10vw"
        }}
      >
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
      </Box>

      <Box
        sx={{
          mx: "1vw"
        }}>
        {/* this link needs official facebook address */}
        <Link
          fontFamily="inherit"
          sx={{ textDecoration: "none", color: "#546D1D" }}
          href="#/comingsoon"
        >
          FACEBOOK
        </Link>
      </Box>
      <Box
        sx={{
          mx: "1vw"
        }}>
        <Link
          sx={{ textDecoration: "none", color: "#546D1D", ml: 5 }}
          fontFamily="inherit"
          href="https://www.instagram.com/desksides/"
          target="_blank"
        >
          INSTAGRAM
        </Link>
      </Box>
      {/* need to update hover/click color of this button */}
      <Box
        sx={{
          mx: "1vw"
        }}>
        <Button
          disableElevation
          fontFamily="inherit"
          variant="contained"
          sx={{
            backgroundColor: "#FFAA45",
            borderRadius: "2em",
            fontFamily: "Lato, sans-serif",
            fontWeight: "bold",
            ml: 5
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
