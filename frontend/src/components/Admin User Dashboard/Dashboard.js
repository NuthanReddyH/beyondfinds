import React from "react";
import { Typography, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";



const Dashboard = () => {
    return (
        <div className="container">
            <Typography variant="h4" align="center" style={{ marginBottom: "3rem"}}>User Management</Typography>
            <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Anusha</TableCell>
                            <TableCell>anusha.shrestha65@gmail.com</TableCell>
                            <TableCell>5122223434</TableCell>
                            <TableCell><Button variant="contained" color="error">Delete</Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
    </TableContainer>
            </div>
        </div>
    );

}

export default Dashboard;