import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const adminUsers = store.adminUsers;

  useEffect(() => {
    dispatch({ type: "GET_ADMIN_USERS" });
    dispatch({ type: "GET_ADMIN_BRANDS" });
    dispatch({ type: "GET_ADMIN_JOURNOS" });
  }, []);

  const handleDetails = (user) => {
    dispatch({ type: "SET_ADMIN_ITEM", payload: user });
    history.push("/adminItem");
  };

  //table sort state
  const [orderDirection, setOrderDirection] = useState('asc');
  const [valueToOrderBy, setValueToOrderBy] = useState('name');
  
  //table pagination state
  // const [page, setPage] = useState(0)
  // const [rowsPerPage, setRowsPerPage] = useState(10) 

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell key="name" sx={{ fontWeight: "bolder" }}>
                <TableSortLabel
                  active={"name" === "name"}
                  direction="asc"
                  onClick={createSortHandler("name")}
                >Name</TableSortLabel>
              </TableCell>
              <TableCell key="city" sx={{ fontWeight: "bolder" }}>
                <TableSortLabel
                  active={"city" === "city"}
                  direction="asc"
                  onClick={createSortHandler("city")}
                >City</TableSortLabel>
              </TableCell>
              <TableCell key="state" sx={{ fontWeight: "bolder" }}>
                <TableSortLabel
                  active={"state" === "state"}
                  direction="asc"
                  onClick={createSortHandler("state")}
                >State</TableSortLabel>
              </TableCell>
              <TableCell key="type" sx={{ fontWeight: "bolder" }}>
                <TableSortLabel
                  active={"type" === "type"}
                  direction="asc"
                  onClick={createSortHandler("type")}
                >User Type</TableSortLabel>
              </TableCell>
              <TableCell key="status" sx={{ fontWeight: "bolder" }}>
                <TableSortLabel
                    active={"status" === "status"}
                    direction="asc"
                    onClick={createSortHandler("status")}
                >Approved</TableSortLabel>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* short circuit to prevent race condition, only executes .map when array is not empty */}
            {adminUsers.length > 0 &&
              adminUsers?.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.first_name} {user.last_name}
                  </TableCell>
                  <TableCell>{user.city}</TableCell>
                  <TableCell>{user.state}</TableCell>
                  <TableCell>{user.user_type}</TableCell>
                  <TableCell>{user.approved.toString()}</TableCell>
                  <TableCell>
                    <Button
                      disableElevation
                      variant="contained"
                      color="info"
                      sx={{ fontFamily: "Lato, sansSerif" }}
                      onClick={() => handleDetails(user)}
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AdminList;
