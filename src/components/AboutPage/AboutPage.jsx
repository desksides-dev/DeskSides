import React from 'react';
import { Box, Button, Typography } from '@mui/material'
import { typography } from '@mui/system';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

function AboutPage() {


  return (<>

    <Box height="100vh" sx={{ backgroundColor: "#F6F3E3" }}>
      <br />
      <Typography
        align="center"
        variant="subtitle2"
        color="info">WHAT ARE TRADITIONAL</Typography>

      <img src="/images/DeskSides_Logotype.png" />

      <div align="center">
        <ArrowDownwardRoundedIcon align="center" color="info" fontSize="large" />
      </div>
    </Box>
    <Box height="100vh" sx={{ backgroundColor: "#232323", align: "center", justifyContent: "center", textAlign: "center" }} >

      <Typography variant="h6" color="#F6F3E3">
        {/* {`Typically, when journalists and brands get acquainted, 
        a publicist and a writer will meet at one of their offices, 
        clearing off the side of their work space to chat. 
        `} */}

        Typically, when journalists and brands get acquainted, a publicist and a writer will meet at one of their offices, clearing off the side of their work space to chat.
        (After high retainer fees have been processed, and a thousand emails have been lobbed back and forth.)

        Our platform brings this experience to the virtual sphere, giving brands and writers the freedom to connect directly.
        With equitable pricing models, DeskSides gives smaller brands a chance to have their stories told,
        and helps journalists tell them will being fairly compensated.
      </Typography>

    </Box>

    <Box height="100vh" sx={{ backgroundColor: "#FFFFFF", align: "center", justifyContent: "center", textAlign: "center" }} >

      <img src="/images/blishallison.png" />

    </Box>
    <Box height="80vh" sx={{ backgroundColor: "#232323", align: "center", justifyContent: "center", textAlign: "center" }} >

      <Typography variant="body1" color="#F6F3E3">
        Blish Mize Connor and Allison Hogan first met in 2017, when Allison took an internship at Blish's eponymous PR firm.
        That same day, Allison was asked to get in contact with Reese Witherspoon's assistant.
        After only five minutes, when Blish overheard Allison laughing on the phone with Reese's team: she new she had a partner she could count on for life.

        With nearly 30 years combined experience, the two have collaborated in various capacities in the PR world, working with clients of nearly all demographics.
        While Blish and Allison share a similar sixth sense about the way the media universe works, they chalk their continued success up to their complementary strengths and efficiently matched working styles.

        During their initial stint working together, Blish and Allison noticed that the traditional PR model just wasn't cutting it.
        Journalists were being bogged down with bureaucratic minutia, while smaller businesses were unable to make any headway for themselves.
        With Allison's future-forward mindset and Blish's depth of industry knowledge, they knew they were uniquely qualified to do something about it.
      </Typography>

      <Typography type="span" variant="h6" color="#DACCFF">
        And so: DeskSides was born.
      </Typography>
    </Box>

    <Box height="20vh" sx={{ backgroundColor: "#FFFFFF", align: "center", justifyContent: "center", textAlign: "center" }} >
        <Button color="info" variant="contained" typography="h6" > Get Started</Button>
    </Box>

  </>
  );
}

export default AboutPage;
