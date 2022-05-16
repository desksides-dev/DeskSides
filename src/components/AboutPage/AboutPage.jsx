import React from 'react';
import { Box, Button, Typography } from '@mui/material'

function AboutPage() {
  return (<>
    <Box>
      <Typography variant="subtitle2" color="info">WHAT'S ARE TRADITIONAL</Typography>
      <img src="/public/images/DeskSides_Logotype.png"/>
    </Box>
    <Box>
      <p>This about page is for anyone to read!</p>
    </Box>
  </>
  );
}

export default AboutPage;
