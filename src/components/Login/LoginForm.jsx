import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { InputLabel, TextField, Container, Button } from '@mui/material';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

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
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <Container>
    <form onSubmit={login}>
      <h2>Sign in</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <InputLabel htmlFor="email">Email</InputLabel>
          <TextField
            type="text"
            name="email"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        
      </div>
      <div>
        <InputLabel htmlFor="password">Password</InputLabel>
          <TextField
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
      </div>
      <div>
        <Button type="submit" variant="contained" sx={{backgroundColor:'#546D1D', textTransform:'none'}}>Sign in</Button>
      </div>
    </form>
    </Container>
  );
}

export default LoginForm;
