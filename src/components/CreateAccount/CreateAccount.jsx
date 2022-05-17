import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import BrandAccount from './BrandAccount';
import JournalistAccount from './JournalistAccount';
import {
    Container, Box, Typography, Link, InputLabel, TextField, Button, FormControl,
    FormControlLabel, Radio, RadioGroup, FormLabel
} from '@mui/material';

function CreateAccount() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const errors = useSelector((store) => store.errors);

    const user = {
        first_name: '',
        last_name: '',
        city: '',
        state: '',
        username: '',
        password: '',
        user_type: ''
    }

    const [newUser, setNewUser] = useState(user);
 
    const registerUser = (event) => {
        event.preventDefault();

        dispatch({
            type: 'REGISTER',
            payload: newUser
        });
        setNewUser(user);
    }; // end registerUser

    return (
        <Container maxWidth="md" sx={{ backgroundColor: 'white' }}>
            <Typography variant="h3">
                Create account
            </Typography>
            <Typography sx={{ mt: 1, fontSize: '1em' }}> Already have an account?
                <Link
                    color="#546D1D"
                    onClick={() => { history.push('/login') }}
                    sx={{ pl: 1.5, cursor: 'pointer', color: '#546D1D' }}
                >
                    Sign in
                </Link>
            </Typography>
            <form onSubmit={registerUser}>
                {errors.registrationMessage && (
                    <h3 className="alert" role="alert">
                        {errors.registrationMessage}
                    </h3>
                )}
                <InputLabel htmlFor="email" variant="standard" color="primary">Email</InputLabel>
                <TextField
                    type="text"
                    name="email"
                    value={newUser.username}
                    color="info"
                    required
                    onChange={(event) => setNewUser({ ...newUser, username: event.target.value })}
                />
                <Box display="flex" justifyContent="space-between">
                    <Box sx={{ width: '48.5%' }}>
                        <InputLabel htmlFor="first name" variant="standard" color="primary">First name</InputLabel>
                        <TextField
                            type="text"
                            name="first name"
                            value={newUser.first_name}

                            color="info"
                            required
                            fullWidth={true}
                            onChange={(event) => setNewUser({ ...newUser, first_name: event.target.value })}
                        />
                    </Box>
                    <Box sx={{ width: '48.5%' }}>
                        <InputLabel htmlFor="last name" variant="standard" color="primary">Last name</InputLabel>
                        <TextField
                            type="text"
                            name="last name"

                            color="info"
                            value={newUser.last_name}
                            fullWidth={true}
                            required
                            onChange={(event) => setNewUser({ ...newUser, last_name: event.target.value })}
                        />
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Box sx={{ width: '48.5%' }}>
                        <InputLabel htmlFor="city" variant="standard" color="primary">City</InputLabel>
                        <TextField
                            type="text"
                            name="city"

                            color="info"
                            value={newUser.city}
                            required
                            fullWidth={true}
                            onChange={(event) => setNewUser({ ...newUser, city: event.target.value })}
                        />
                    </Box>
                    <Box sx={{ width: '48.5%' }}>
                        <InputLabel htmlFor="State" variant="standard" color="primary">State</InputLabel>
                        <TextField
                            type="text"
                            name="state"
                            color="info"
                            value={newUser.state}
                            fullWidth={true}
                            required
                            sx={{ width: 70 }}
                            onChange={(event) => setNewUser({ ...newUser, state: event.target.value })}
                        />
                    </Box>
                </Box>
                <FormControl>
                    <FormLabel sx={{fontSize:'1.4em'}}>I am a...</FormLabel>
                    <RadioGroup onChange={(event) => setNewUser({...newUser, user_type: event.target.value})}>
                        <FormControlLabel value="journalist" control={<Radio />} label="Journalist" />
                        <FormControlLabel value="brand" control={<Radio />} label="Brand owner/representative"/>
                    </RadioGroup>
                </FormControl>
                {
                    newUser.user_type === 'journalist' ? 
                    <JournalistAccount/>
                    : newUser.user_type === 'brand' ?
                    <BrandAccount/>
                    :
                    <></>
                }

                <InputLabel htmlFor="password">Password</InputLabel>
                <TextField
                    type="password"
                    name="password"
                    color="info"
                    value={newUser.password}
                    required
                    onChange={(event) => setNewUser({ ...newUser, password: event.target.value })}
                />
                <Button
                    type="submit"
                    variant="outlined"
                    color="info"
                    size="large"
                    fullWidth={true}
                    sx={{ textTransform: 'none', borderRadius: 1, mt: 5, border: '2.2px solid', fontSize: '1.4em' }}
                >
                    Submit for approval
                </Button>
            </form>
        </Container>
    )
}

export default CreateAccount;