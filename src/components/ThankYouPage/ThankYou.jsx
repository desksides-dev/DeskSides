
import React from 'react';
import { Box, Button, Typography} from '@mui/material'



function ThankYou(props) {

  return (
    <Box sx={{
        backgroundColor: "#232323",
        align: "center",
        justifyContent: "left",
        textAlign: "left",
        height: "100vh",
        pl: "10vw",
        pr: "25vw",
        py: "10vh"
    }} >
    
        <Typography
            variant="h1"
            color="#F6F3E3">
            Thank You
        </Typography>
        <br />
        <Typography
            variant="subtitle2"
            color="#F6F3E3"
            fontSize={32}
            paragraph={true}>
            Thank you for completing your assessment.
        </Typography>
        <br />
        <Typography
            variant="subtitle2"
            color="#F6F3E3"
            fontSize={32}
            paragraph={true}>
            An administrator will reach out to you with your approval status
            upon review of your profile. 
        </Typography>
    </Box>
  );
}

export default ThankYou;

 