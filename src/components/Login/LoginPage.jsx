import React from 'react';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';
import { Container, Box, Typography, Button, Link } from '@mui/material';

function LoginPage() {
  const history = useHistory();

  return (
    <>
      <LoginForm />
      <Typography> Don't have an account? 
        <Link onClick={() => {history.push('/registration')}} sx={{pl:1.5, cursor:'pointer'}}>
          Sign up
        </Link>
      </Typography>
    </>
  );
}

export default LoginPage;
