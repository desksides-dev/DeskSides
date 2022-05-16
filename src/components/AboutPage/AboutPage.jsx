import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

function AboutPage() {

  
  return (<>

    <Box height="100vh" sx={{backgroundColor: "#F6F3E3"}}>
      <br />
      <Typography 
      align="center" 
      variant="subtitle2" 
      color="info">WHAT ARE TRADITIONAL</Typography>

      <img src="/images/DeskSides_Logotype.png"/>

      <div align="center">
      <ArrowDownwardRoundedIcon align="center" color="info" fontSize="large" />
      </div>
    </Box>
    <Box height="100vh"sx={{backgroundColor: "#232323"}}>

      <Typography variant="body1" align="center" justifyContent="center" color="#F6F3E3">
        Desksides are bribery schemes perpetuated by members of the publicity industry and their clients.
      </Typography>

    </Box>
   </>
  );
}

export default AboutPage;
