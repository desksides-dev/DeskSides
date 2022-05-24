import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//MUI imports
import Table from "@mui/material/Table";
import { Typography } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TableSortLabel from "@mui/material/TableSortLabel";
import { Info } from "@mui/icons-material";

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
  const [valueToOrderBy, setValueToOrderBy] = useState('status');

  const handleRequestSort = (event, property) => {
    const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
    setValueToOrderBy(property)
    setOrderDirection(isAscending ? 'desc' : 'asc')
  }

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property)
  }

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1
    }
    else if (b[orderBy] > a[orderBy]) {
      return 1
    }
    else {
      return 0
    }
  }

  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy)
  }

  const sortedRowInformation = (rowArray, comparator) => {
    const stabilizeRowArray = rowArray.map((el, index) => [el, index])
    stabilizeRowArray.sort((a, b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) return order
      return a[1] - b[1]
    })
    return stabilizeRowArray.map((el) => el[0])
  }


  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, bgcolor:'#F6F3E3'}} aria-label="simple table">
          <TableHead sx={{bgcolor:'#F6F3E3'}}>
            <TableRow>
              <TableCell key="first_name" sx={{ fontWeight: "bolder" }}>
                <TableSortLabel
                  active={valueToOrderBy === "first_name"}
                  direction={valueToOrderBy === "first_name" ? orderDirection : "asc"}
                  onClick={createSortHandler("first_name")}
                >Name</TableSortLabel>
              </TableCell>
              <TableCell key="city" sx={{ fontWeight: "bolder" }}>
                <TableSortLabel
                  active={valueToOrderBy === "city"}
                  direction={valueToOrderBy === "city" ? orderDirection : "asc"}
                  onClick={createSortHandler("city")}
                >City</TableSortLabel>
              </TableCell>
              <TableCell key="state" sx={{ fontWeight: "bolder" }}>
                <TableSortLabel
                  active={valueToOrderBy === "state"}
                  direction={valueToOrderBy === "state" ? orderDirection : "asc"}
                  onClick={createSortHandler("state")}
                >State</TableSortLabel>
              </TableCell>
              <TableCell key="user_type" sx={{ fontWeight: "bolder" }}>
                <TableSortLabel
                  active={valueToOrderBy === "user_type"}
                  direction={valueToOrderBy === "user_type" ? orderDirection : "asc"}
                  onClick={createSortHandler("user_type")}
                >User Type</TableSortLabel>
              </TableCell>
              <TableCell key="approved" sx={{ fontWeight: "bolder" }}>
                <TableSortLabel
                  active={valueToOrderBy === "approved"}
                  direction={valueToOrderBy === "approved" ? orderDirection : "asc"}
                  onClick={createSortHandler("approved")}
                >Approved</TableSortLabel>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          {
            adminUsers.length > 0 &&
            sortedRowInformation(adminUsers, getComparator(orderDirection, valueToOrderBy)).map((user, index) => (
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
                <TableCell>{user.approved?.toString()}</TableCell>
                <TableCell>
                  <Button
                    disableElevation
                    variant="outlined"
                    color="info"
                    size="small"
                    sx={{ fontFamily: "Lato, sansSerif", borderRadius: 1, border: '1.4px solid' }}
                    onClick={() => handleDetails(user)}
                  >
                    <Typography sx={{fontWeight:"bold"}}>
                      Details
                    </Typography>
                  </Button>
                </TableCell>
              </TableRow>
            ))
          }

        </Table>
      </TableContainer>
    </>
  );
}

export default AdminList;
