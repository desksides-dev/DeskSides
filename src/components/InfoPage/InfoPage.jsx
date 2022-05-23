import React from 'react';
import { Box, Typography, Stack } from '@mui/material'

function InfoPage() {
  return (
    <>
      <Box sx={{
        backgroundColor: "#F6F3E3",
        alignItems: "center",
        height: "60vh",
        textDecoration: "underline"
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
        height: "20vh"
      }} >

        <Typography
          align="center"
          variant="h4"
          fontSize={24}
          color="#232323">
          Desksides is a digital connection hub that helps brands get noticed</Typography>

      </Box>

      <Box sx={{
        backgroundColor: "#232323",
        align: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "60vh"
      }} >

        <img src="/images/desksides-desc.png" height={'75%'} width={'75%'} />

      </Box>

      <Box sx={{
        backgroundColor: "#F6F3E3",
        alignItems: "center",
        height: "60vh",
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
          <img src="/images/steps.png" height={'45%'} width={'45%'} />
        </div>
      </Box>

      <Stack direction="row">
        <Item>
          <Box
          >
            <Typography
            >brands</Typography>

            <Typography
            >Make your own impressions.</Typography>

            <Typography
            >
              Tell us about your business,
              and for 10% of the price of a PR agency,
              we'll connect you with journalists who are excited to write about it.
              Get the exposure and access you're looking for,
              without the stress and high costs of the traditional desk meeting.</Typography>
          </Box>
        </Item>
        <Item>
          <Box
          >
            <Typography
            >journalists</Typography>

            <Typography
            >Your beats made better.</Typography>

            <Typography
            >
              Enter your credentials and previous work experience
              to get connected with the businesses you want to write about.
              With a low barrier to entry, the stories will come to you:
              our industry experts will match you to with relevant creators.
              Plus, you'll get paid a fair market price per published article.
            </Typography>
          </Box>
        </Item>
      </Stack>
    </>
  );
}

export default InfoPage;
