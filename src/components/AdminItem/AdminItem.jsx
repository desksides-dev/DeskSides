import React, { useState, useEffect } from "react";
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
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { Typography } from "@mui/material";

function AdminItem() {
  const history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const adminItem = store.adminItem;
  const adminUsers = store.adminUsers;
  const adminMatches = store.adminMatches;

  useEffect(() => {
    dispatch({ type: "GET_ADMIN_MATCHES", payload: adminItem });
  }, []);

  //used to hold values from multi select (add or delete matches) lists on change
  const [state, setState] = useState({
    matches: [],
  });

  const [matches, setMatches] = useState([]);

  //Back to admin list view
  const handleBack = () => {
    history.push("/admin");
  };

  //Toggles 'approved' in user table of database, updates reducer to render new/opposite button
  const handleApproval = () => {
    console.log("handleApproval clicked! adminItem: ", adminItem);
    const id = adminItem.id;
    let approvalStatus;
    if (adminItem.approved === true) {
      approvalStatus = false;
      adminItem.approved = false;
    } else {
      approvalStatus = true;
      adminItem.approved = true;
    }
    console.log("Approval Status =", approvalStatus, "adminItem =", adminItem);
    dispatch({ type: "UPDATE_APPROVAL_STATUS", payload: id, approvalStatus });
    dispatch({ type: "SET_ADMIN_ITEM", payload: adminItem });
  };

  const handleMatchChange = (event) => {
    const { options } = event.target;
    const inputs = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        inputs.push(options[i].value);
      }
    }
    setState({
      ...state,
      matches: inputs,
    });
  };

  const handleSubmit = () => {
    console.log(
      "#### handleSubmit clicked! adminItem =",
      adminItem,
      "state =",
      state
    );
    dispatch({ type: "POST_MATCHES", payload: adminItem, state });
  };

  const setUserMatches = () => {
    const userMatches = [];

    for (const user of adminUsers) {
      for (const match of adminMatches.journalists_id) {
        if (user.id === match.journalists_id) {
        }
      }
      for (const match of adminMatches.brands_id) {
        if (user.id === match.brand_id) {
        }
      }
      setMatches(matches);
    }
    console.log(matches);
  };

  console.log();

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
              <ListItemText
                primary={`Approved : ${adminItem.approved.toString()}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary={`User Type : ${adminItem.user_type}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Email : ${adminItem.username}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`City : ${adminItem.city}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`State : ${adminItem.state}`} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Description : ${adminItem.description}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Medium : ${adminItem.pub_medium}`} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Preferred Time Of Day : ${adminItem.time_of_day_pref}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Years Of Experience : ${adminItem.years_of_exp}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Stories Per Month : ${adminItem.stories_per_month}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Brand Name : ${adminItem.brand_name}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Plan Type : ${adminItem.plan_type}`} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Payment Status : ${adminItem.payment_status}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Payment Link : ${adminItem.payment_link}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Profile Image Link: ${adminItem.profile_image_link}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Calendar Link : ${adminItem.calendar_link}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Fileshare Link : ${adminItem.fileshare_link}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Brand Assets Link : ${adminItem.brand_assets_link}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={`Affiliate Link : ${adminItem.affiliate_link}`}
              />
            </ListItem>
          </List>
        </Box>

        {/* Admin Input Box */}
        <Box width="50vw">
          {/* button to return to admin list */}
          <Button
            color="info"
            variant="contained"
            sx={{ fontFamily: "Lato, sansSerif", ml: "1em", mt: "1em" }}
            onClick={() => handleBack()}
          >
            Back
          </Button>

          {/* displays button to toggle approval status. renders based on current status */}
          <Box>
            {adminItem.approved === false ? (
              <Box sx={{ ml: "20vw" }}>
                <Typography variant="h5" sx={{ fontFamily: "Lato, sansSerif" }}>
                  Approve User?
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ fontFamily: "Lato, sansSerif", ml: "2em", mt: "1em" }}
                  onClick={() => handleApproval(adminItem)}
                >
                  Approve
                </Button>
              </Box>
            ) : (
              <Box sx={{ ml: "20vw" }}>
                <Typography variant="h5" sx={{ fontFamily: "Lato, sansSerif" }}>
                  Remove Approval?
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ fontFamily: "Lato, sansSerif", ml: "2em", mt: "1em" }}
                  onClick={() => handleApproval(adminItem.id)}
                >
                  Remove
                </Button>
              </Box>
            )}
          </Box>

          {/* matches list */}
          <Box sx={{ mt: "1em" }}>
            {adminItem.user_type === "brand" ? (
              <>
                <Typography
                  variant="h5"
                  sx={{ ml: "18vw", fontFamily: "Lato, sansSerif" }}
                >
                  Select New Match(es)
                </Typography>
                <Select
                  multiple
                  native
                  variant="filled"
                  color="warning"
                  value={state.matches}
                  // @ts-ignore Typings are not considering `native`
                  onChange={handleMatchChange}
                  inputProps={{
                    id: "select-multiple-matches",
                  }}
                  sx={{ ml: "15vw", mt: "1em", width: "20vw" }}
                >
                  {adminUsers.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.first_name} {user.last_name}
                    </option>
                  ))}
                </Select>
                <FormHelperText sx={{ ml: "15vw" }}>
                  Hold ctrl or command to select multiple options
                </FormHelperText>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ fontFamily: "Lato, sansSerif", ml: "20vw", mt: "1em" }}
                  onClick={() => handleSubmit()}
                >
                  Submit Match(es)
                </Button>
              </>
            ) : (
              <h2>List of brands to match to journos</h2>
            )}
          </Box>

          <Box sx={{ mt: "1em" }}>
            <Typography
              variant="h5"
              sx={{ ml: "17vw", fontFamily: "Lato, sansSerif" }}
            >
              Delete Existing Match(es)
            </Typography>
            {/* <Select
                  multiple
                  native
                  variant="filled"
                  color="warning"
                  value={state.deleteMatches}
                  // @ts-ignore Typings are not considering `native`
                  onChange={handleDeleteMatchChange}
                  inputProps={{
                    id: "select-multiple-matches",
                  }}
                  sx={{ ml: "15vw", mt: "1em", width: "20vw" }}
                >
                  {adminMatches.map((match) => (
                    <option key={user.id} value={user.id}>
                      {user.first_name} {user.last_name}
                    </option>
                  ))}
                </Select> */}
            <FormHelperText sx={{ ml: "15vw" }}>
              Hold ctrl or command to select multiple options
            </FormHelperText>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontFamily: "Lato, sansSerif", ml: "20vw", mt: "1em" }}
            >
              Delete Match(es)
            </Button>
          </Box>
        </Box>
      </Stack>
    </div>
  );
}

export default AdminItem;
