import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Typography, IconButton, Tooltip, tooltipClasses } from '@mui/material';


function UserPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#DC4634',
      color: '#F6F3E3',
      fontSize: 11,
    },
  }));

  const handleClick = () => {
    dispatch({type: 'SET_EDIT_USER', payload: user});
    history.push('/user/edit');
  }

  //if user is admin, redirects to admin view
  {user.user_type === 'admin' && history.push('/admin')}

  //journalists only get to see the info page
  {user.user_type === 'journalist' && history.push('/info')}

  //brands get redirected to the assessment until they have at least submitted a brand name
  {(user.brand_name === null && user.user_type === 'brand') && history.push('/assessment')}
  
  return (
    <>
      <Box sx={{
        backgroundColor: "#232323",
        align: "center",
        justifyContent: "left",
        textAlign: "left",
        height: "auto",
        pl: "10vw",
        pr: "43vw",
        py: "5vh"
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
          Welcome, {user.first_name} {user.last_name}, to your dashboard:  
           your one-stop solution for managing your brand.
        </Typography>
      </Box>


      <Box sx={{
        align: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "50vh",
        px: "5vw",
        py: "10vh"
      }} >
        <LightTooltip
          title="Your Calendar" placement="top">
          <IconButton
            size="small"
            sx={{ p: "2vmax" }}
            onClick={() => { window.open(`${user.calendar_link}`) }}>
            <Box
              component="img"
              sx={{ width: "7em", height: "7em", m: "1vmax" }}
              alt="down arrow"
              src="/images/calendar-icon-red.svg"
            />
          </IconButton>
        </LightTooltip>


        <LightTooltip title="Contact Us" placement='top'>
          <IconButton
            size="small"
            sx={{ p: "2vmax" }}
            onClick={() => { window.open('mailto: blish@desksides.com') }}>
            <Box
              component="img"
              sx={{ width: "7em", height: "7em", m: "1vmax" }}
              alt="down arrow"
              src="/images/mail.svg"
            />
          </IconButton>
        </LightTooltip>

        <LightTooltip title="Your Brand Assets" placement="top">
          <IconButton
            size="small"
            sx={{ p: "2vmax" }}
            onClick={() => { window.open(`${user.brand_assets_link}`) }}>
            <Box
              component="img"
              sx={{ width: "7em", height: "7em", m: "1vmax" }}
              alt="down arrow"
              src="/images/folder-icon-red.svg"
            />
          </IconButton>
        </LightTooltip>

        <LightTooltip title="Your Journalist Matches" placement="top">
          <IconButton
            size="small"
            sx={{ p: "2vmax" }}
            onClick={() => { history.push('/brand-journalists') }}>
            <Box
              component="img"
              sx={{ width: "7em", height: "7em", m: "1vmax" }}
              alt="down arrow"
              src="/images/people.svg"
            />
          </IconButton>
        </LightTooltip>

        <LightTooltip title="Your Account Settings" placement="top">
          <IconButton
            size="small"
            sx={{ p: "2vmax" }}
            onClick={handleClick}>
            <Box
              component="img"
              sx={{ width: "7em", height: "7em", m: "1vmax" }}
              alt="down arrow"
              src="/images/settings.svg"
            />
          </IconButton>
        </LightTooltip>
      </Box>

    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
