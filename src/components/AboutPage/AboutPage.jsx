import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

function AboutPage() {
  return (<>

    <Box sx={{backgroundColor: "#F6F3E3"}}>
      <br />
      <Typography 
      align="center" 
      variant="subtitle2" 
      color="info">WHAT ARE TRADITIONAL</Typography>

      <img src="/images/DeskSides_Logotype.png"/>

      <br />
      <ArrowDownwardRoundedIcon align="center" color="info" fontSize="large" />
    </Box>
    <Box>
      <p>This about page is for anyone to read!</p>
    </Box>
   </>
  );
}

export default AboutPage;
