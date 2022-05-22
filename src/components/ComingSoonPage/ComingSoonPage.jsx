
import React from 'react';
import { Box, Button, Typography} from '@mui/material'

function ComingSoon() {

  return (
    <Box sx={{
        backgroundColor: "#232323",
        align: "center",
        justifyContent: "left",
        textAlign: "left",
        height: "80vh",
        pl: "10vw",
        pr: "25vw",
        py: "10vh"
    }} >
    
        <Typography
            variant="h1"
            color="#F6F3E3">
            Coming Soon
        </Typography>
        <br />
        <Typography
            variant="subtitle2"
            color="#F6F3E3"
            fontSize={32}
            paragraph={true}>
            We are working on putting this page together! 
        </Typography>
    </Box>
  );
}

export default ComingSoon;
