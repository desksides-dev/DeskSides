import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//MUI imports
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function AdminItem() {
  const history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const adminItem = store.adminItem;

  const handleBack = () => {
      history.push('/admin')
  }

  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={0}
      >
        {/* User Information Box */}
        <Box width="50vw">
          <List
            sx={{
              width: "100%",
              maxWidth: "50vw",
              bgcolor: "background",
              position: "relative",
              overflow: "auto",
              maxHeight: "78vh",
              "& ul": { padding: 0 },
            }}
          >
            <ListItem>
              <ListItemText primary={`First Name : ${adminItem.first_name}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Last Name : ${adminItem.last_name}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Approved : ${(adminItem.approved).toString()}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`User Type : ${adminItem.user_type}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`City : ${adminItem.city}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`State : ${adminItem.state}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Description : ${adminItem.description}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Medium : ${adminItem.pub_medium}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Preferred Time Of Day : ${adminItem.time_of_day_pref}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Years Of Experience : ${adminItem.years_of_exp}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Stories Per Month : ${adminItem.stories_per_month}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Brand Name : ${adminItem.brand_name}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Plan Type : ${adminItem.plan_type}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Payment Status : ${adminItem.payment_status}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Payment Link : ${adminItem.payment_link}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Profile Image Link: ${adminItem.profile_image_link}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Calendar Link : ${adminItem.calendar_link}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Fileshare Link : ${adminItem.fileshare_link}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Brand Assets Link : ${adminItem.brand_assets_link}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Affiliate Link : ${adminItem.affiliate_link}`} />
            </ListItem>
          </List>
        </Box>

        {/* Admin Input Box */}
        <Box width="50vw">

            <Button
                color="info"
                variant="contained"
                sx={{ fontFamily: "Lato, sansSerif", ml: "1em", mt: "1em"}}
                onClick={() => handleBack()}
            >Back
            </Button>

            <Box>
                {adminItem.approved === false ?
                    <Box
                        sx={{ ml: "20vw", mt: "1em"}}
                    >
                        <Typography 
                            variant="h5"
                            sx={{ fontFamily: "Lato, sansSerif" }}    
                        >Approve User?</Typography>
                        <Button 
                            variant="contained" 
                            color="secondary"
                            sx={{ fontFamily: "Lato, sansSerif", ml: "2em", mt: "1em" }}
                        >Approve</Button>
                    </Box>
                :
                    <Box
                    sx={{ ml: "20vw", mt: "1em"}}
                    >
                        <Typography 
                            variant="h5"
                            sx={{ fontFamily: "Lato, sansSerif" }}
                        >Remove Approval?</Typography>
                        <Button 
                            variant="contained"
                            color="primary"
                            sx={{ fontFamily: "Lato, sansSerif", ml: "2em", mt: "1em" }}
                        >Remove</Button>
                    </Box>
                }
            </Box>

        </Box>
      </Stack>
    </div>
  );
}

export default AdminItem;
