import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//MUI imports
import Avatar from "@mui/material/Avatar";
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
  const adminJournos = store.adminJournos;
  const adminBrands = store.adminBrands;

  useEffect(() => {
    dispatch({ type: "GET_ADMIN_MATCHES", payload: adminItem });
    dispatch({ type: "GET_ADMIN_BRANDS" });
    dispatch({ type: "GET_ADMIN_JOURNOS" });
  }, []);

  //used to hold values from multi select (add or delete matches) lists on change
  const [state, setState] = useState({
    matches: [],
    toDelete: [],
  });

  //Back to admin list view
  const handleBack = () => {
    history.push("/admin");
  };

  //Toggles 'approved' in user table of database, updates reducer to render new/opposite button
  const handleApproval = () => {
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

  //stores selections from match list in an array to accommodate multiple selections
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

  //stores selections from delete list in an array to accommodate multiple selections
  const handleDeleteChange = (event) => {
    const { options } = event.target;
    const inputs = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        inputs.push(options[i].value);
      }
    }
    setState({
      ...state,
      toDelete: inputs,
    });
  };

  //adds matched suers to database
  const handleSubmit = () => {
    dispatch({ type: "POST_MATCHES", payload: adminItem, state });
  };

  //removes matches from database
  const handleDelete = () => {
    dispatch({ type: "DELETE_MATCHES", payload: adminItem, state });
  };

  return (
    <div>
      <Stack direction="row" spacing={0}>
        <Box width="10vw">
          {/* button to return to admin list */}
          <Button
            disableElevation
            color="info"
            variant="contained"
            sx={{ fontFamily: "Lato, sansSerif", ml: "1em", mt: "1em" }}
            onClick={() => handleBack()}
          >
            Back
          </Button>
        </Box>
        {/* User Information Box, renders content based on user_type */}
        <Box width="40vw">
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
            {adminItem.user_type === "brand" ? (
              <>
                <ListItem>
                  <Avatar
                    sx={{
                      bgcolor: "#FFAA45",
                      color: "#DC4634",
                      width: 90,
                      height: 90,
                      fontSize: 38,
                      border: 1,
                      borderColor: "#DC4634",
                      padding: 3,
                      textTransform: "uppercase",
                    }}
                  >
                    {adminItem.first_name[0]}
                    {adminItem.last_name[0]}
                  </Avatar>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={`${adminItem.first_name} ${adminItem.last_name}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={`Approved : ${adminItem.approved.toString()}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={`User Type : ${adminItem.user_type}`}
                  />
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
                  <ListItemText
                    primary={`Preferred Time Of Day : ${adminItem.time_of_day_pref}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={`Brand Name : ${adminItem.brand_name}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={`Plan Type : ${adminItem.plan_type}`}
                  />
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
              </>
            ) : (
              <>
                <ListItem>
                  <Avatar
                    sx={{
                      bgcolor: "#DACCFF",
                      color: "#352558",
                      width: 90,
                      height: 90,
                      fontSize: 38,
                      border: 1,
                      borderColor: "#352558",
                      padding: 3,
                      textTransform: "uppercase",
                    }}
                  >
                    {adminItem.first_name[0]}
                    {adminItem.last_name[0]}
                  </Avatar>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={`${adminItem.first_name} ${adminItem.last_name}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={`Approved : ${adminItem.approved.toString()}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={`User Type : ${adminItem.user_type}`}
                  />
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
                    primary={`Affiliate Link : ${adminItem.affiliate_link}`}
                  />
                </ListItem>
              </>
            )}
          </List>
        </Box>

        {/* Admin Input Box */}
        <Box width="40vw">
          {/* displays button to toggle approval status. renders based on current status */}
          <Box>
            {adminItem.approved === false ? (
              <Box sx={{ mt: "1em" }}>
                <Typography variant="h5" sx={{ fontFamily: "Lato, sansSerif" }}>
                  Approve User?
                </Typography>
                <Button
                  disableElevation
                  variant="contained"
                  color="secondary"
                  sx={{ fontFamily: "Lato, sansSerif" }}
                  onClick={() => {
                    window.open(`mailto: ${adminItem.username}`),
                      handleApproval(adminItem);
                  }}
                >
                  Approve
                </Button>
                <FormHelperText sx={{}}>
                  Reminder: email user to notify upon approval
                </FormHelperText>
              </Box>
            ) : (
              <Box sx={{}}>
                <Typography variant="h5" sx={{ fontFamily: "Lato, sansSerif" }}>
                  Remove Approval?
                </Typography>
                <Button
                  disableElevation
                  variant="contained"
                  color="primary"
                  sx={{ fontFamily: "Lato, sansSerif" }}
                  onClick={() => {
                    window.open(`mailto: ${adminItem.username}`),
                      handleApproval(adminItem);
                  }}
                >
                  Remove
                </Button>
                <FormHelperText sx={{}}>
                  Reminder: email user to notify upon removal
                </FormHelperText>
              </Box>
            )}
          </Box>

          {/* potential matches list */}
          <Box sx={{ mt: "1em" }}>
            {adminItem.user_type === "brand" ? (
              <>
                <Typography variant="h5" sx={{ fontFamily: "Lato, sansSerif" }}>
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
                  sx={{ width: "20vw" }}
                >
                  {adminJournos?.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.first_name} {user.last_name}
                    </option>
                  ))}
                </Select>
                <FormHelperText sx={{}}>
                  Hold ctrl or command to select multiple options
                </FormHelperText>
                <Button
                  disableElevation
                  variant="contained"
                  color="secondary"
                  sx={{ fontFamily: "Lato, sansSerif" }}
                  onClick={() => handleSubmit()}
                >
                  Submit Match(es)
                </Button>
              </>
            ) : (
              <>
                <Typography variant="h5" sx={{ fontFamily: "Lato, sansSerif" }}>
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
                  sx={{ width: "20vw" }}
                >
                  {adminBrands?.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.first_name} {user.last_name}
                    </option>
                  ))}
                </Select>
                <FormHelperText sx={{}}>
                  Hold ctrl or command to select multiple options
                </FormHelperText>
                <Button
                  disableElevation
                  variant="contained"
                  color="secondary"
                  sx={{ fontFamily: "Lato, sansSerif" }}
                  onClick={() => handleSubmit()}
                >
                  Submit Match(es)
                </Button>
              </>
            )}
          </Box>

          {/* display current matches / delete from list */}
          <Box sx={{ mt: "1em" }}>
            <Typography variant="h5" sx={{ fontFamily: "Lato, sansSerif" }}>
              Delete Existing Match(es)
            </Typography>
            <Select
              multiple
              native
              variant="filled"
              color="warning"
              value={state.toDelete}
              // @ts-ignore Typings are not considering `native`
              onChange={handleDeleteChange}
              inputProps={{
                id: "select-multiple-matches",
              }}
              sx={{ width: "20vw" }}
            >
              {adminMatches.length > 0 &&
                adminMatches?.map((match) => (
                  <option key={match.id} value={match.id}>
                    {match.first_name} {match.last_name}
                  </option>
                ))}
            </Select>
            <FormHelperText sx={{}}>
              Hold ctrl or command to select multiple options
            </FormHelperText>
            <Button
              disableElevation
              variant="contained"
              color="primary"
              sx={{ fontFamily: "Lato, sansSerif" }}
              onClick={() => handleDelete()}
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
