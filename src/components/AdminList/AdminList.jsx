import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

//MUI imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



// function createData(first_name, last_name, city, state, user_type, approved) {
//   return { first_name, last_name, city, state, user_type, approved };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

function AdminList() {

    const dispatch = useDispatch();
    const store = useSelector((store) => store);
    const adminUsers = store.adminUsers;

    useEffect(() => {
        dispatch({ type: 'GET_ADMIN_USERS' });
      }, []);

    console.log('ADMIN - Get all users: ', adminUsers);
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>User Type</TableCell>
            <TableCell>Approved</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {/* short circuit to prevent race condition, only executes .map when array is not empty */}
          {adminUsers.length > 0 && adminUsers?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.state}</TableCell>
              <TableCell>{row.user_type}</TableCell>
              <TableCell>{row.approved}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminList;
