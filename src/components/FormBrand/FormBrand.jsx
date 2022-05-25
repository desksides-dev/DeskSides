import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Button, MenuItem, Slider, Typography, InputLabel, FormHelperText, TextField, Select } from '@mui/material'

function BrandAssessment() {
    const markets = useSelector((store) => store.markets);
    const pubs = useSelector((store) => store.pubs);

    // stores user inputs for markets & publications until submit
    const [state, setState] = useState({
        markets: [],
        pubs: [],
        brand_name: '',
        stories_per_month: 0,
        pub_medium: '',
        affiliate_link: '',
        time_of_day_pref: '',
        calendar_link: '',
        profile_image_link: '',
        fileshare_link: '',
        payment_link: '',
        brand_assets_link: '',
    })

    const dispatch = useDispatch();
    const history = useHistory();

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

    const handleAutoFill = () => {
        setState({
            markets: [1, 2, 3],
            pubs: [1, 2, 3],
            brand_name: 'Taco Beast Taco Truck',
            stories_per_month: 6,
            pub_medium: 'digital',
            affiliate_link: '',
            time_of_day_pref: 'Morning',
            calendar_link: 'https://calendly.com/ashlyntshepard',
            profile_image_link: '',
            fileshare_link: 'https://www.dropbox.com/sh/ib25c7kcys3ronw/AABiDPXimp3yfP-q__Tom_lna?dl=0',
            payment_link: '@tacobeast',
            brand_assets_link: 'https://www.dropbox.com/sh/ib25c7kcys3ronw/AABiDPXimp3yfP-q__Tom_lna?dl=0',
        })
    }

    // sends state on dispatch pushes user to the thank you page
    const handleSubmit = () => {
        // console.log('state from the brand assessment: ', state);
        dispatch({ type: 'B_ASSESS', payload: state });
        history.push('/user');
    }

    return (<>
        <Box sx={{
            backgroundColor: "#232323",
            align: "center",
            justifyContent: "left",
            textAlign: "left",
            height: "60vh",
            pl: "10vw",
            pr: "45vw",
            py: "10vh"
        }} >

            <Typography
                variant="h1"
                color="primary.light">
                Your Brand Assessment
            </Typography>

            <Typography
                variant="subtitle2"
                color="background.default"
                fontSize={32}
                paragraph={true}>
                Tell us about your business, so we can find the
                right folks to tell everyone else about it.
            </Typography>
        </Box>

        <Box sx={{
            align: "center",
            justifyContent: "left",
            textAlign: "left",
            height: "auto",
            pl: "10vw",
            pr: "50vw",
            py: "2vh"
        }} >
            <form>
                <Button sx={{ height: "5vh" }} onClick={handleAutoFill} />
                <Box sx={{ my: "2vmax", justifyContent: "left", textAlign: "left", }}>
                    <InputLabel htmlFor='brand_name'>
                        Brand Name
                    </InputLabel>
                    <TextField
                        required
                        id="brand_name"
                        color="warning"
                        variant="filled"
                        name="brand_name"
                        value={state.brand_name}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>

                <Box sx={{ my: "5vmax", justifyContent: "left", textAlign: "left", }}>
                    <InputLabel shrink={false} htmlFor="select-multiple-markets">
                        Which markets does your brand sit in?
                    </InputLabel>
                    <InputLabel shrink htmlFor="select-multiple-markets">
                        Select all that apply
                    </InputLabel>
                    <Select
                        multiple
                        native
                        color="warning"
                        label="select-multiple-markets"
                        variant="filled"
                        value={state.markets}
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
                    <InputLabel shrink={false} htmlFor="pub-medium">
                        What medium is your priority to be published in?
                    </InputLabel>

                    <Select
                        labelId="pub-medium"
                        value={state.pub_medium}
                        name="pub_medium"
                        displayEmpty
                        variant="filled"
                        color="warning"
                        label="Medium"
                        onChange={handleChange}
                    >
                        <MenuItem name="time_of_day_pref" value="" disabled><em>Please select one:</em></MenuItem>
                        <MenuItem name="pub_medium" value={'print'}>Print</MenuItem>
                        <MenuItem name="pub_medium" value={'digital'}>Digital</MenuItem>
                        <MenuItem name="pub_medium" value={'broadcast'}>Broadcast</MenuItem>
                    </Select>
                </Box>

                <Box sx={{ my: "5vmax", justifyContent: "left", textAlign: "left", }}>

                    <InputLabel shrink={false} htmlFor="select-multiple-pubs">
                        Which publications do you consider to be your goals to be published in?
                    </InputLabel>
                    <InputLabel shrink htmlFor="select-multiple-pubs">
                        Select all that apply
                    </InputLabel>
                    <Select
                        multiple
                        native
                        variant="filled"
                        color="warning"
                        value={state.pubs}
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
                    <InputLabel shrink={false} htmlFor='stories-per-month'>
                        How many press placements per quarter would you consider to be a success?
                    </InputLabel>
                    <Slider
                        value={state.stories_per_month}
                        onChange={handleChange}
                        name="stories_per_month"
                        valueLabelDisplay="auto"
                        color="warning"
                        step={1}
                        marks
                        min={1}
                        max={20}
                    />
                </Box>

                <Box sx={{ my: "5vmax", justifyContent: "left", textAlign: "left", }}>
                    <InputLabel shrink={false} htmlFor='affiliate-link'>
                        Are you currently on an affiliate platform? If so, what is your merchant link?
                    </InputLabel>
                    <TextField
                        labelId="stories-per-month"
                        color="warning"
                        variant="filled"
                        name="affiliate_link"
                        value={state.affiliate_link}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>

                <Box sx={{ my: "5vmax", justifyContent: "left", textAlign: "left", }}>
                    <InputLabel htmlFor="time_of_day_pref">
                        What time of day do you prefer to take meetings?
                    </InputLabel>

                    <Select
                        labelId="pub-medium"
                        value={state.time_of_day_pref}
                        name="time_of_day_pref"
                        label="Medium"
                        displayEmpty
                        variant="filled"
                        color="warning"
                        onChange={handleChange}
                    >
                        <MenuItem name="time_of_day_pref" value="" disabled><em>Please select one:</em></MenuItem>
                        <MenuItem name="time_of_day_pref" value={'Morning'}>Morning</MenuItem>
                        <MenuItem name="time_of_day_pref" value={'Afternoon'}>Afternoon</MenuItem>
                        <MenuItem name="time_of_day_pref" value={'Evening'}>Evening</MenuItem>
                    </Select>
                </Box>

                <Box sx={{ my: "5vmax", justifyContent: "left", textAlign: "left", }}>
                    <InputLabel htmlFor='profile_image'>
                        Please include links to the following:
                    </InputLabel>

                    <Box sx={{ my: "2vmax", justifyContent: "left", textAlign: "left", }}>

                        <InputLabel htmlFor='profile_image'>
                            Profile Image
                        </InputLabel>
                        <TextField
                            id="profile_image"
                            color="warning"
                            variant="filled"
                            name="profile_image_link"
                            value={state.profile_image_link}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                    </Box>
                    <Box sx={{ my: "2vmax", justifyContent: "left", textAlign: "left", }}>

                        <InputLabel htmlFor='calendar_link'>
                            Calendar Link
                        </InputLabel>
                        <TextField
                            id="calendar_link"
                            color="warning"
                            variant="filled"
                            name="calendar_link"
                            value={state.calendar_link}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                    </Box>
                    <Box sx={{ my: "2vmax", justifyContent: "left", textAlign: "left", }}>

                        <InputLabel htmlFor='fileshare_link'>
                            FileShare Link
                        </InputLabel>
                        <TextField
                            id="fileshare_link"
                            color="warning"
                            variant="filled"
                            name="fileshare_link"
                            value={state.fileshare_link}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                    <Box sx={{ my: "2vmax", justifyContent: "left", textAlign: "left", }}>

                        <InputLabel htmlFor='brand_assets_link'>
                            Link to your Brand Assets
                        </InputLabel>
                        <TextField
                            id="brand_assets_link"
                            color="warning"
                            variant="filled"
                            name="brand_assets_link"
                            value={state.brand_assets_link}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                    <Box sx={{ my: "2vmax", justifyContent: "left", textAlign: "left", }}>

                        <InputLabel htmlFor='payment_link'>
                            Venmo Username
                        </InputLabel>
                        <TextField
                            id="payment_link"
                            color="warning"
                            variant="filled"
                            name="payment_link"
                            value={state.payment_link}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                </Box>

                <Box sx={{ my: "2vmax", justifyContent: "left", textAlign: "left", }}>

                    <Button
                        color="warning"
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{
                            borderRadius: "2em",
                            typography: "h6",
                            textTransform: "lowercase"
                        }}
                    > submit </Button>
                </Box>
            </form>

        </Box>
    </>);
}


export default BrandAssessment;
