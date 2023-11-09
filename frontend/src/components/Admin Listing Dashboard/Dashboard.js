import React from "react";
import { Typography, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";



const Dashboard = () => {
    return (
        <div className="container">
            <Typography variant="h4" align="center" style={{ marginBottom: "3rem"}}>Listing Management</Typography>
            <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Published By</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Demo Product</TableCell>
                            <TableCell>Furniture</TableCell>
                            <TableCell>Anusha</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary">Edit</Button>
                                <Button variant="contained" color="error">Delete</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
    </TableContainer>
            </div>
        </div>
    );

}

export default Dashboard;