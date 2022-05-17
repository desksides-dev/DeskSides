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
        sx={{ border: '1px #546D1D solid', }}
      >
        <Box>
          <Link sx={{ textDecoration: 'none', color: '#546D1D' }} >COPYRIGHT © 2022</Link>
        </Box>
        
        
        <Box>
          {/* this link may need to be removed and spacing modified. it is currently a placeholder  */}
          <Link sx={{ textDecoration: 'none', color: '#546D1D' }} href="/">TERMS & CONDITIONS</Link>
        </Box>
       
        <Box
        //TO DO check href/link, may not be allowed on box 
          href="/"
          component="img"
          sx={{
            height: '5em',
            width: '11em',
          }}
          alt="DeskSides Logo"
          src="/images/desksides-logo.svg"
        />
        
        <Box>
          {/* this link needs official facebook address */}
          <Link sx={{ textDecoration: 'none', color: '#546D1D' }} href="/">FACEBOOK</Link>
        </Box>
        
        <Box>
          <Link sx={{ textDecoration: 'none', color: '#546D1D' }} href="https://www.instagram.com/desksides/" target="_blank">INSTAGRAM</Link>
        </Box>
        
        <Box>
          {/* this link needs official email address */}
          <Button variant="contained" sx={{ backgroundColor: '#FFAA45' }} href="mailto:email@example.com">CONTACT US</Button>
        </Box>

      </Stack>
  );
}

export default Footer;
