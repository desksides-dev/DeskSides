
import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function ThankYouBrand(props) {

    const user = useSelector((store) => store.user);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_USER' });
    }, [])

    return (

        <Box sx={{
            backgroundColor: "#232323",
            align: "center",
            justifyContent: "left",
            textAlign: "left",
            height: "70vh",
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
            {user.approved ?
                <><Typography
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
                       Welcome to the desksides family! 
                    </Typography>
                 
                    <Button
                                color="warning"
                                variant="contained"
                                onClick={()=>{history.push('/user')}}
                                sx={{
                                    borderRadius: "2em",
                                    typography: "h6",
                                    textTransform: "lowercase"
                                }}
                            > your dashboard </Button>
                </>
                :
                <>
                    <Typography
                        variant="subtitle2"
                        color="#F6F3E3"
                        fontSize={32}
                        paragraph={true}>
                        Thank you for registering.
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
                </>
            }
        </Box>
    );
}

export default ThankYouBrand;

