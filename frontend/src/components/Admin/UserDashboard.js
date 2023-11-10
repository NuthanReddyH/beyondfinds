import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import { deleteUserThunk, getUsersThunk } from "../../data/authSlice";

const UserDashboard = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.auth.users);
    
    useEffect(() => {
        dispatch(getUsersThunk());
    }, [dispatch]);

    const handleDelete = (userId) => {
        dispatch(deleteUserThunk(userId));
    };

    return (
        <div className="container">
            <Typography variant="h4" align="center" sx={{ marginBottom: 4,marginTop: 5 }}>User Management</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <Button 
                                        variant="contained" 
                                        color="error" 
                                        onClick={() => handleDelete(user.id)}
                                        disabled={user?.username === 'admin'}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default UserDashboard;
