import React from "react";
import "./Footer.css";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

function Footer() {
  return (
      <Stack 
        direction="row" 
        spacing={12}
        justifyContent="center"
        alignItems="center"
        sx={{ border: '1px solid' }}
      >
        <Box>
          <h5>COPYRIGHT © 2022</h5>
        </Box>
        
        <Box>
          <Link href="/">TERMS & CONDITIONS</Link>
        </Box>
       
        <Box
          component="img"
          sx={{
            height: 89,
            width: 197,
          }}
          alt="DeskSides Logo"
          src="/images/desksides-logo.svg"
        />
        
        <Box>
          <Link href="/">FACEBOOK</Link>
        </Box>
        
        <Box>
          <Link href="/">INSTAGRAM</Link>
        </Box>
        
        <Box>
          <Link href="/">CONTACT US</Link>
        </Box>

      </Stack>
  );
}

export default Footer;
