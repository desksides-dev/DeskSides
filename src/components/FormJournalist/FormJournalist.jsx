import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material'



function JournalistAssessment() {

    const markets = useSelector((store) => store.markets);
    const pubs = useSelector((store) => store.pubs);
    const user = useSelector((store) => store.user);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({type: 'GET_PUBS'});
        dispatch({type: 'GET_MARKETS'});
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

        <Box sx={{
            align: "center",
            justifyContent: "left",
            textAlign: "left",
            height: "60vh",
            pl: "10vw",
            pr: "50vw",
            py: "10vh"
        }} >


            <Button
                color="secondary"
                variant="contained"
                onClick={() => { history.push('/home') }}
                sx={{
                    borderRadius: "2em",
                    typography: "h6",
                    textTransform: "lowercase"
                }}
            > submit </Button>
        </Box>
    </>);
}

export default JournalistAssessment;
