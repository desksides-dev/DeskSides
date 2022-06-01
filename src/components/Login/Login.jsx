import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Box, Typography, Button, Link, InputLabel, TextField } from '@mui/material';

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const errors = useSelector(store => store.errors);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
      // history.push('/')
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  const handleAutoFill = () => {
    setUsername('desksidesdev@gmail.com');
    setPassword('ADMIN');
  }

  const handleAutoFill2EB = () => {
    setUsername('ashlyntshepard@gmail.com');
    setPassword('TACOBEAST');
  }

  return (
    <Container maxWidth="xs" sx={{mb:10,}}>
      <Button sx={{ height: "5vh" }} onClick={handleAutoFill} />
      <Button sx={{ height: "5vh" }} onClick={handleAutoFill2EB} />
      <form onSubmit={login}>
        <Typography variant="h3" sx={{ mt: 10 }}>Sign in</Typography>
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}
        <InputLabel htmlFor="email" variant="standard" sx={{ mt: 10 }}>Email</InputLabel>
        <TextField
          type="text"
          name="email"
          fullWidth={true}
          color="info"
          required
          value={username}
          sx={{backgroundColor:'#FFFFFF'}}
          onChange={(event) => setUsername(event.target.value)}
        />
        <InputLabel htmlFor="password" sx={{ mt: 3 }}>Password</InputLabel>
        <TextField
          type="password"
          name="password"
          fullWidth={true}
          color="info"
          required
          value={password}
          sx={{backgroundColor:'#FFFFFF'}}
          onChange={(event) => setPassword(event.target.value)}
          
        />
        <Box display="flex" justifyContent="flex-end">
          <Button
            type="submit"
            variant="outlined"
            color="info"
            size="large"
            fullWidth={true}
            sx={{ textTransform: 'none', borderRadius: 1, mt: 5, border: '2.2px solid', fontSize: '1.4em', fontFamily:'Lato'}}
          >
            Sign in
          </Button>
        </Box>
      </form>
      <Typography sx={{ mt: 7, fontSize: '1.4em' }}> Don't have an account?
        <Link
          color="#546D1D"
          onClick={() => { history.push('/registration') }}
          sx={{ pl: 1.5, cursor: 'pointer', color: '#546D1D', }}
        >
          Sign up
        </Link>
      </Typography>
    </Container>
  );
}

export default Login;
