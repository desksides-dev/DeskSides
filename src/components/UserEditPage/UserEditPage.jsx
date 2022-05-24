import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Button, MenuItem, Slider, Typography, InputLabel, FormHelperText, TextField, Select} from '@mui/material'

function UserEdit() {
    
    const user = useSelector((store) => store.edit);
    const markets = useSelector((store) => store.markets);
    const pubs = useSelector((store) => store.pubs);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (event) => {
        dispatch({ 
            type: 'EDIT_ONCHANGE', 
            payload: { property: event.target.name, value: event.target.value }
        });
    }

    const handlePubsChange = (event) => {
        const { options } = event.target;
        const inputs = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                inputs.push(options[i].value);
            }
        }
        dispatch({ 
            type: 'EDIT_ONCHANGE', 
            payload: { property: pubs, value: inputs }
        });
    };

    const handleMarketsChange = (event) => {
        const { options } = event.target;
        const inputs = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                inputs.push(options[i].value);
            }
        }
        dispatch({ 
            type: 'EDIT_ONCHANGE', 
            payload: { property: markets, value: inputs }
        });
    };

    const handleSubmit = () => {

    }

  return (
  <Box sx={{
            align: "center",
            justifyContent: "left",
            textAlign: "left",
            height: "auto",
            pl: "10vw",
            pr: "50vw",
            py: "5vh"
        }} >
            <form>

                <Box sx={{ my: "5vmax", justifyContent: "left", textAlign: "left", }}>
                    <InputLabel htmlFor='brand_name'>
                        Brand Name
                    </InputLabel>
                    <TextField
                        required
                        id="brand_name"
                        color="warning"
                        variant="filled"
                        name="brand_name"
                        value={user.brand_name}
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
                        value={user.markets}
                        onChange={handleMarketsChange}
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
                        value={user.pub_medium}
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
                        value={user.pubs}
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
                        value={user.stories_per_month}
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
                    <InputLabel shrink={false} htmlFor='stories-per-month'>
                        Are you currently on an affiliate platform? If so, what is your merchant link?
                    </InputLabel>
                    <TextField
                        labelId="stories-per-month"
                        color="warning"
                        variant="filled"
                        name="stories_per_month"
                        value={user.affiliate_link}
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
                        value={user.time_of_day_pref}
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
                            value={user.profile_image_link}
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
                            value={user.calendar_link}
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
                            value={user.fileshare_link}
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>

                    <InputLabel htmlFor='brand_assets_link'>
                        Link to your Brand Assets
                    </InputLabel>
                    <TextField
                        id="brand_assets_link"
                        color="warning"
                        variant="filled"
                        name="brand_assets_link"
                        value={user.brand_assets_link}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <InputLabel htmlFor='payment_link'>
                        Venmo Username
                    </InputLabel>
                    <TextField
                        id="payment_link"
                        color="warning"
                        variant="filled"
                        name="payment_link"
                        value={user.payment_link}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>


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
            </form>

        </Box>
  );
}

export default UserEdit;
