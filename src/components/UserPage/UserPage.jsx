import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Typography, IconButton } from '@mui/material'

function UserPage() {
  const history = useHistory();

  const user = useSelector((store) => store.user);


  return (
    <>
      <Box sx={{
        backgroundColor: "#232323",
        align: "center",
        justifyContent: "left",
        textAlign: "left",
        height: "35vh",
        pl: "10vw",
        pr: "45vw",
        py: "10vh"
      }} >

        <Typography
          variant="h1"
          color="primary.light">
          {user.brand_name}
        </Typography>

        <Typography
          variant="subtitle2"
          color="background.default"
          fontSize={32}
          paragraph={true}>
          Welcome to your brand dashboard:
        </Typography>
      </Box>


      <Box sx={{
        align: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "auto",
        px: "10vw",
        py: "5vh"
      }} >
        <IconButton 
        size="small" 
        sx={{ p: "2vmax" }}
        onClick={() => {window.open(`${user.calendar_link}`)}}>
          <Box
            component="img"
            sx={{ width: "10em", m: "5vmax" }}
            alt="down arrow"
            src="/images/calendar-icon-red.svg"
          />
        </IconButton>

        <IconButton 
        size="small" 
        sx={{ p: "2vmax"  }}>
          <Box
            component="img"
            sx={{ width: "10em", m: "5vmax" }}
            alt="down arrow"
            src="/images/message-icon-red.svg"
          />
        </IconButton>
        <IconButton 
        size="small" 
        sx={{ p: "2vmax"  }}
        onClick={() => {window.open(`${user.brand_assets_link}`)}}>
          <Box
            component="img"
            sx={{ width: "10em", height: "10em", m: "5vmax" }}
            alt="down arrow"
            src="/images/folder-icon-red.svg"
          />
          </IconButton>
      </Box>
    
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
