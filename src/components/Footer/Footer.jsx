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
        sx={{ border: '1px solid', }}
      >
        <Box>
          <h5>COPYRIGHT © 2022</h5>
        </Box>
        
        
        <Box>
          {/* this link may need to be removed and spacing modified. it is currently a placeholder  */}
          <Link sx={{ textDecoration: 'none' }} href="/">TERMS & CONDITIONS</Link>
        </Box>
       
        <Box
        //TO DO check href/link, may not be allowed on box 
          href="/"
          component="img"
          sx={{
            height: 89,
            width: 197,
          }}
          alt="DeskSides Logo"
          src="/images/desksides-logo.svg"
        />
        
        <Box>
          {/* this link needs official facebook address */}
          <Link sx={{ textDecoration: 'none' }} href="/">FACEBOOK</Link>
        </Box>
        
        <Box>
          <Link sx={{ textDecoration: 'none' }} href="https://www.instagram.com/desksides/" target="_blank">INSTAGRAM</Link>
        </Box>
        
        <Box>
          {/* this link needs official email address */}
          <Link sx={{ textDecoration: 'none' }} href="mailto:email@example.com">CONTACT US</Link>
        </Box>

      </Stack>
  );
}

export default Footer;
