import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//MUI imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TableSortLabel from "@mui/material/TableSortLabel";

function AdminList() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const adminUsers = store.adminUsers;

  useEffect(() => {
    dispatch({ type: "GET_ADMIN_USERS" });
  }, []);

  console.log("ADMIN - Get all users: ", adminUsers);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bolder" }}>First Name</TableCell>
            <TableCell sx={{ fontWeight: "bolder" }}>Last Name</TableCell>
            <TableCell sx={{ fontWeight: "bolder" }}>City</TableCell>
            <TableCell sx={{ fontWeight: "bolder" }}>State</TableCell>
            <TableCell sx={{ fontWeight: "bolder" }}>User Type</TableCell>
            <TableCell sx={{ fontWeight: "bolder" }}>Approved</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* short circuit to prevent race condition, only executes .map when array is not empty */}
          {adminUsers.length > 0 &&
            adminUsers?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.first_name}
                </TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.user_type}</TableCell>
                <TableCell>{(row.approved).toString()}</TableCell>
                <TableCell>
                    <Button 
                        variant="contained"
                        color="info"
                        sx={{ fontFamily: "Lato, sansSerif" }}

                    >Details</Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminList;
