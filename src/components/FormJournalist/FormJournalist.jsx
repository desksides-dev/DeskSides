import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Button, Typography, InputLabel, MenuItem, OutlinedInput, FormControl, Select, Chip } from '@mui/material'



function JournalistAssessment() {

    const markets = useSelector((store) => store.markets);
    const pubs = useSelector((store) => store.pubs);
    const user = useSelector((store) => store.user);

    const [market, setMarkets] = useState([]);
    const [pub, setPubs] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'GET_PUBS' });
        dispatch({ type: 'GET_MARKETS' });
    }, [])

    const handlePubsChange = (event) => {
        const {options} = event.target;
        const inputs = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                inputs.push(options[i].value);
            }
        }
        setPubs(inputs);
    };

    const handleMarketChange = (event) => {
        const {options} = event.target;
        const inputs = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                inputs.push(options[i].value);
            }
        }
        setMarkets(inputs);
    };

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
            height: "auto",
            pl: "10vw",
            pr: "50vw",
            py: "10vh"
        }} >
            <Box sx={{ my: "5vmax", justifyContent: "left", textAlign: "left", }}>

                <InputLabel htmlFor="select-multiple-markets">
                    Which markets do you cover?
                </InputLabel>
                <InputLabel shrink htmlFor="select-multiple-markets">
                    Select all that apply
                </InputLabel>
                <InputLabel shrink htmlFor="select-multiple-pubs">
                    Hold ctrl or command to select multiple
                </InputLabel>
                <br />
                <Select
                    multiple
                    native
                    value={market}
                    // @ts-ignore Typings are not considering `native`
                    onChange={handleMarketChange}
                    label="Markets"
                    inputProps={{
                        id: 'select-multiple-markets',
                    }}
                >
                    {markets.map((market) => (
                        <option key={market.id} value={market.market_name}>
                            {market.market_name}
                        </option>
                    ))}
                </Select>
            </Box>

            <Box sx={{ my: "5vmax", justifyContent: "left", textAlign: "left", }}>

                <InputLabel htmlFor="select-multiple-pubs">
                    Which publications do you typically publish in?
                </InputLabel>
                <InputLabel shrink htmlFor="select-multiple-pubs">
                    Select all that apply
                </InputLabel>
                <InputLabel shrink htmlFor="select-multiple-pubs">
                    Hold ctrl or command to select multiple
                </InputLabel>
                <br />
                <Select
                    multiple
                    native
                    value={pub}
                    // @ts-ignore Typings are not considering `native`
                    onChange={handlePubsChange}
                    label="Publications"
                    inputProps={{
                        id: 'select-multiple-pubs',
                    }}
                >
                    {pubs.map((pub) => (
                        <option key={pub.id} value={pub.pub_title}>
                            {pub.pub_title}
                        </option>
                    ))}
                </Select>
            </Box>


            

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
