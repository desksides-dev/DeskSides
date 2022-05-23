import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import {useHistory} from 'react-router-dom';

function InfoPage() {
  const history = useHistory();

  return (
    <>
      <Box sx={{
        backgroundColor: "#F6F3E3",
        alignItems: "center",
        height: "60vh",
        textDecoration: "underline",
        border: "1px #546D1D solid",
      }}>
        <br />

        <div align="center">
          <img
            src="/images/DeskSides_Logotype.png"
            height={'45%'} width={'45%'} />
        </div>

        <Typography
          align="center"
          variant="subtitle2"
          fontSize={24}
          color="#232323">PUBLICITY WITHOUT THE PUBLICIST</Typography>
        <br />
        <div align="center">
          <Box
            component="img"
            sx={{ width: "5em", mt: 2 }}
            alt="down arrow"
            src="/images/down-arrow.svg"
          />
        </div>
        <br />
      </Box>

      <Box sx={{
        backgroundColor: "#FFFFFF",
        align: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "20vh",
        p: "10vmax"
      }} >

        <Typography
          align="center"
          variant="h2"
          fontSize={32}
          color="#232323">
          Desksides is a digital connection hub that helps brands get noticed</Typography>

      </Box>

      <Box sx={{
        backgroundColor: "#232323",
        align: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "75vh",
        p: "10vmax"
      }} >

        <img src="/images/desksides-desc.png" height={'auto'} width={'75%'} />

      </Box>

      <Box sx={{
        backgroundColor: "#F6F3E3",
        alignItems: "center",
        height: "60vh",
        border: "1px #546D1D solid"
      }}>
        <br />
        <Box sx={{
          backgroundColor: "#F6F3E3",
          alignItems: "center",
          height: "auto",
          textDecoration: "underline"
        }}>
          <Typography
            align="center"
            variant="subtitle2"
            fontSize={24}
            color="info">HOW IT WORKS</Typography>
          <br />
        </Box>
        <Box sx={{
          backgroundColor: "#F6F3E3",
          alignItems: "center",
          height: "auto",
        }}>
          <br />

          <Typography
            align="center"
            variant="h4"
            fontSize={24}
            color="#232323">
            Our platform matches qualified
            journalists directly to small businesses
            at the click of a button</Typography>
          <br />
        </Box>
        <div align="center">
          <img src="/images/steps.png" height={'auto'} width={'75%'} />
        </div>
      </Box>

      <Stack
        direction="row"
        spacing={0}
        justifyContent="center"
        alignItems="center"
      >

        <Box
          sx={{
            p: "3vmax",
            height: "80vh",
            width: "50vw",
            backgroundColor: "#DC4634",
          }}
        >
          <Typography
            align="left"
            color="primary.light"
            variant="h1"
          >brands</Typography>
          <br />

          <Typography
            align="left"
            color="#FFFBF8"
            variant="body2"
            fontSize={32}
          >Make your own impressions.</Typography>
          <br />

          <Typography
            align="left"
            color="#FFFBF8"
            variant="subtitle2"
            fontSize={28}
            paragraph={true}
          >
            Tell us about your business,
            and for 10% of the price of a PR agency,
            we'll connect you with journalists who are excited to write about it.
            Get the exposure and access you're looking for,
            without the stress and high costs of the traditional desk meeting.</Typography>
        <br />
            <Button
          color='warning'
          variant="contained"
          disableElevation
          onClick={() => { history.push('/registration') }}
          sx={{
            borderRadius: "2em",
            typography: "h6",
            textTransform: "lowercase",
            my: "2em"
          }}
        > Get Started</Button>
        
        </Box>

        <Box
          sx={{
            p: "3vmax",
            height: "80vh",
            width: "50vw",
            backgroundColor: "#352558"
          }}
        >
          <Typography
            align="left"
            color="secondary.light"
            variant="h1"
          >journalists</Typography>
          <br />
          <Typography
            align="left"
            color="#FFFBF8"
            variant="body2"
            fontSize={32}
          >Your beats made better.</Typography>
          <br />
          <Typography
            align="left"
            color="#FFFBF8"
            variant="subtitle2"
            fontSize={28}
            paragraph={true}
          >
            Enter your credentials and previous work experience
            to get connected with the businesses you want to write about.
            With a low barrier to entry, the stories will come to you:
            our industry experts will match you to with relevant creators.
            Plus, you'll get paid a fair market price per published article.
          </Typography>

          <Button
          color='success'
          variant="contained"
          disableElevation
          onClick={() => { history.push('/registration') }}
          sx={{
            borderRadius: "2em",
            typography: "h6",
            textTransform: "lowercase",
            m: "1em"
          }}
        > Get Started</Button>

        </Box>
      </Stack>

      <Box sx={{
        backgroundColor: "#FFFFFF",
        align: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "auto",
        p: "5vmax"
      }} >

        <Typography
          align="center"
          variant="h2"
          fontSize={32}
          color="#232323">
          Packages for every business plan.</Typography>
        <Typography
          align="center"
          variant="subtitle2"
          fontSize={24}
          color="#232323">
          Select your subscription and start getting seen.</Typography>
          <br />
        <Button
          color="info"
          variant="contained"
          disableElevation
          onClick={() => { history.push('/comingsoon') }}
          sx={{
            borderRadius: "2em",
            typography: "h6",
            textTransform: "lowercase",
            m: "1em"
          }}
        > Learn More</Button>

      </Box>

    </>
  );
}

export default InfoPage;
