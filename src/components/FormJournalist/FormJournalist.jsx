import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Button, MenuItem, Typography, InputLabel, FormHelperText,  TextField, FormControl, Select} from '@mui/material'



function JournalistAssessment() {
    // reducers that store the market & publication data from the database
    const markets = useSelector((store) => store.markets);
    const pubs = useSelector((store) => store.pubs);

    // stores user inputs for markets & publications until submit
    const [state, setState] = useState({
        markets: [],
        pubs: [],
        stories_per_month: 0,
        pub_medium: '',
    })

    const dispatch = useDispatch();


    // gets publications & markets from the database for multiselect fields
    useEffect(() => {
        dispatch({ type: 'GET_PUBS' });
        dispatch({ type: 'GET_MARKETS' });
    }, [])

    // when the user adds multiple publications, function stores value in state.
    const handlePubsChange = (event) => {
        const { options } = event.target;
        const inputs = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                inputs.push(options[i].value);
            }
        }
        setState({
            ...state,
            pubs: inputs
        });
    };

    // when the user adds multiple markets, function stores value in state.
    const handleMarketChange = (event) => {
        const { options } = event.target;
        const inputs = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                inputs.push(options[i].value);
            }
        }
        setState({
            ...state,
            markets: inputs
        });
    };

    const handleChange = (event) => {
        let value = event.target.value
        setState({
            ...state,
            [event.target.name]: value
        })
    }

    // sends state on dispatch pushes user to the thank you page
    const handleSubmit = () => {
        // console.log('state from the journalist assessment: ', state);
        dispatch({ type: 'J_ASSESS', payload: state });
        history.push('/thankyou');
    }

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
            py: "5vh"
        }} >
            <Box sx={{ my: "5vmax", justifyContent: "left", textAlign: "left", }}>

                <InputLabel htmlFor="select-multiple-markets">
                    Which markets do you cover?
                </InputLabel>
                <InputLabel shrink htmlFor="select-multiple-markets">
                    Select all that apply
                </InputLabel>
                <Select
                    multiple
                    native
                    color="secondary"
                    variant="filled"
                    value={state.markets}
                    // @ts-ignore Typings are not considering `native`
                    onChange={handleMarketChange}
                    helperText="Hold ctrl or command to select multiple"
                    inputProps={{
                        id: 'select-multiple-markets',
                    }}
                >
                    {markets.map((market) => (
                        <option key={market.id} value={market.id}>
                            {market.market_name}
                        </option>
                    ))}
                </Select>
                <FormHelperText>Hold ctrl or command to select multiple options</FormHelperText>
            </Box>

            <Box sx={{ my: "5vmax", justifyContent: "left", textAlign: "left", }}>
                <InputLabel htmlFor="pub-medium">
                    What is your primary publishing medium?
                </InputLabel>

                <Select
                    labelId="pub-medium"
                    value={state.pub_medium}
                    name="pub_medium"
                    label="Medium"
                    variant="filled"
                    color="secondary"
                    onChange={handleChange}
                >
                    <MenuItem name="pub_medium" value={'print'}>Print</MenuItem>
                    <MenuItem name="pub_medium" value={'digital'}>Digital</MenuItem>
                    <MenuItem name="pub_medium" value={'broadcast'}>Broadcast</MenuItem>
                </Select>
                <FormHelperText>Please select one</FormHelperText>
            </Box>

            <Box sx={{ my: "5vmax", justifyContent: "left", textAlign: "left", }}>

                <InputLabel htmlFor="select-multiple-pubs">
                    Which publications do you typically publish in?
                </InputLabel>
                <InputLabel shrink htmlFor="select-multiple-pubs">
                    Select all that apply
                </InputLabel>
                <Select
                    multiple
                    native
                    color="secondary"
                    variant="filled"
                    value={state.pubs}
                    // @ts-ignore Typings are not considering `native`
                    onChange={handlePubsChange}
                    inputProps={{
                        id: 'select-multiple-pubs',
                    }}
                >
                    {pubs.map((pub) => (
                        <option key={pub.id} value={pub.id}>
                            {pub.pub_title}
                        </option>
                    ))}
                </Select>
                <FormHelperText>Hold ctrl or command to select multiple options</FormHelperText>
            </Box>

            <Box sx={{ my: "5vmax", justifyContent: "left", textAlign: "left", }}>
                <InputLabel htmlFor='stories-per-month'>
                    How many stories per month do you typically publish?
                </InputLabel>
                <TextField
                    id="stories-per-month"
                    type="number"
                    color="secondary"
                    variant="filled"
                    name="stories_per_month"
                    value={state.stories_per_month}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Box>

            <Button
                color="secondary"
                variant="contained"
                onClick={handleSubmit}
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
