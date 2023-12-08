import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

import Chart from 'chart.js/auto';

const countUsersByTimePeriod = (users, period) => {
  const userCounts = {};

  users.forEach((user) => {
    const createdAt = new Date(user.createdAt);
    let periodKey;

    switch (period) {
      case "week":
        const weekStart = new Date(
          createdAt.setDate(createdAt.getDate() - createdAt.getDay())
        );
        periodKey = `${weekStart.toLocaleDateString()} - ${new Date(
          weekStart.setDate(weekStart.getDate() + 6)
        ).toLocaleDateString()}`;
        break;
      case "month":
        periodKey = `${createdAt.getMonth() + 1}-${createdAt.getFullYear()}`;
        break;
      case "year":
        periodKey = createdAt.getFullYear().toString();
        break;
      default:
        periodKey = `${createdAt.getMonth() + 1}-${createdAt.getFullYear()}`;
    }

    if (!userCounts[periodKey]) {
      userCounts[periodKey] = 0;
    }
    userCounts[periodKey]++;
  });

  return userCounts;
};

const UserGraph = ({ users }) => {
  const [timePeriod, setTimePeriod] = useState("month");
  const userCounts = countUsersByTimePeriod(users, timePeriod);

  const data = {
    labels: Object.keys(userCounts),
    datasets: [
      {
        label: "Number of Users Created",
        data: Object.values(userCounts),
        backgroundColor: "#23B0BE",
      },
    ],
  };

  return (
    <>
      <Box display="flex" justifyContent="flex-end" marginBottom="20px">
        <FormControl variant="outlined" style={{ width: 120 }}>
          <InputLabel>Time Period</InputLabel>
          <Select
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            label="Time Period"
          >
            <MenuItem value="week">Week</MenuItem>
            <MenuItem value="month">Month</MenuItem>
            <MenuItem value="year">Year</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Bar data={data} />
    </>
  );
};

export default UserGraph;
