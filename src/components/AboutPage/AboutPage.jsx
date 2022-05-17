import React from 'react';
import { Box, Button, Typography } from '@mui/material'
import { typography } from '@mui/system';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

function AboutPage() {


  return (<>

    <Box sx={{ backgroundColor: "#F6F3E3", alignItems: "center", height: "60vh", textDecoration: "underline" }}>
      <br />
      <Typography
        align="center"
        variant="subtitle2"
        fontSize={24}
        color="info">WHAT ARE TRADITIONAL</Typography>
      <div align="center">
        <img src="/images/DeskSides_Logotype.png" height={'45%'} width={'45%'} />
      </div>
      <div align="center">
        <Typography
          align="center"
          variant="subtitle2"
          fontSize={24}
          color="info">learn more</Typography>
        <ArrowDownwardRoundedIcon color="info" fontSize="large" />
      </div>
      <br />
    </Box>

    <Box sx={{ backgroundColor: "#232323", align: "center", justifyContent: "center", textAlign: "center", height: "60vh", px: "25vw", py: "10vh" }} >

      <Typography variant="h5" paragraph={true} color="#F6F3E3">
        Typically, when journalists and brands get acquainted,
        a publicist and a writer will meet at one of their offices, clearing off the side of their work space to chat.
        (After high retainer fees have been processed, and a thousand emails have been lobbed back and forth.)
      </Typography>

      <Typography variant="h5" paragraph={true} color="#F6F3E3">
        Our platform brings this experience to the virtual sphere, giving brands and writers the freedom to connect directly.
        With equitable pricing models, DeskSides gives smaller brands a chance to have their stories told,
        and helps journalists tell them will being fairly compensated.
      </Typography>

    </Box>

    <Box sx={{ backgroundColor: "#FFFFFF", align: "center", justifyContent: "center", textAlign: "center" }} >

      <img src="/images/blishallison.png" height={'75%'} width={'75%'} />

    </Box>
    <Box sx={{ backgroundColor: "#232323", align: "center", justifyContent: "center", textAlign: "center", height: "auto", px: "25vw", py: "10vh" }} >

      <Typography variant="body1" paragraph={true} color="#F6F3E3">
        Blish Mize Connor and Allison Hogan first met in 2017, when Allison took an internship at Blish's eponymous PR firm.
        That same day, Allison was asked to get in contact with Reese Witherspoon's assistant.
        After only five minutes, when Blish overheard Allison laughing on the phone with Reese's team: she new she had a partner she could count on for life.
      </Typography>
      <br />
      <Typography variant="body1" paragraph={true} color="#F6F3E3">
        With nearly 30 years combined experience, the two have collaborated in various capacities in the PR world, working with clients of nearly all demographics.
        While Blish and Allison share a similar sixth sense about the way the media universe works, they chalk their continued success up to their complementary strengths and efficiently matched working styles.
      </Typography>
      <br />
      <Typography variant="body1" paragraph={true} color="#F6F3E3">
        During their initial stint working together, Blish and Allison noticed that the traditional PR model just wasn't cutting it.
        Journalists were being bogged down with bureaucratic minutia, while smaller businesses were unable to make any headway for themselves.
        With Allison's future-forward mindset and Blish's depth of industry knowledge, they knew they were uniquely qualified to do something about it.
      </Typography>
      <br />
      <Typography type="span" fontSize={32} variant="h6" color="#DACCFF">
        And so: DeskSides was born.
      </Typography>
    </Box>

    <Box sx={{ backgroundColor: "#FFFFFF", align: "center", justifyContent: "center", textAlign: "center", height: "auto", px: "25vw", py: "10vh" }} >
      <Button color="info" sx={{ borderRadius: "2em", typography: "h6", textTransform: "lowercase" }} variant="contained"> Get Started</Button>
    </Box>

  </>
  );
}

export default AboutPage;
