import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography } from '@mui/material'



function JournalistAssessment() {

    const markets = useSelector((store) => store.markets);
    const pubs = useSelector((store) => store.pubs);
    const user = useSelector((store) => store.user);

    useEffect(() => {

    }, [])

    return (<>
        <Box sx={{
            backgroundColor: "#232323",
            align: "center",
            justifyContent: "left",
            textAlign: "left",
            height: "60vh",
            pl: "10vw",
            pr: "50vw",
            py: "10vh"
        }} >

            <Typography
                variant="h1"
                color="secondary.light">
                Journalist Assessment
            </Typography>

            <Typography
                variant="subtitle2"
                color="background.default"
                fontSize={32}
                paragraph={true}>
                Tell us about yourself, so we can help
                you find the stories you want to write.
            </Typography>
        </Box>


    <Button 
      color="info" 
      variant="contained"
      onClick={() => {history.push('/home')}}
      sx={{ 
      borderRadius: "2em", 
      typography: "h6", 
      textTransform: "lowercase" }} 
      > Get Started</Button>

    </>);
}

export default JournalistAssessment;
