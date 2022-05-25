import React from "react";
import { Box, Button, Typography } from "@mui/material";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function PresentationPage(props) {
  return (
    <Box
      sx={{
        backgroundColor: "#232323",
        align: "center",
        textAlign: "center",
        height: "80vh",
      }}
    >
      <Typography variant="h1" color="#F6F3E3" sx={{ pt: "5vh" }}>
        Team Desksides
      </Typography>

      <Stack direction="row" justifyContent="space-around" sx={{ pt: "10vh" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/presentation/ashlyn.jpeg"
            alt="Ashlyn Sheppard"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ashlyn Sheppard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              https://www.linkedin.com/in/atshepard/

              https://github.com/atshepard
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/presentation/maggie.jpeg"
            alt="Maggie Jenkins"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Maggie Jenkins
            </Typography>
            <Typography variant="body2" color="text.secondary">
              https://www.linkedin.com/in/margaret-jenkins/
              https://github.com/adairjenkins
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/images/presentation/zach.jpg"
            alt="Zach Carter"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Zach Carter
            </Typography>
            <Typography variant="body2" color="text.secondary">
              https://www.linkedin.com/in/thezachcarter/

              https://github.com/thezachcarter
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}

export default PresentationPage;
