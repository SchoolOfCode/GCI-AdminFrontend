import React from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";

const data = {
  labels: ["Region"],
  datasets: [
    {
      label: "North West",
      data: [200],
      backgroundColor: ["rgba(0, 0, 255, 0.5)"],
      borderColor: ["rgba(0, 0, 255, 1)"],
      borderWidth: 1,
    },
    {
      label: "West Midlands",
      data: [500],
      backgroundColor: ["rgba(60, 179, 133, 0.5)"],
      borderColor: ["rgba(60, 179, 133, 1)"],
      borderWidth: 1,
    },
    {
      label: "East Midlands",
      data: [550],
      backgroundColor: ["rgba(255, 206, 86, 0.5)"],
      borderColor: ["rgba(255, 206, 86, 1)"],
      borderWidth: 1,
    },
    {
      label: "London",
      data: [400],
      backgroundColor: ["rgba(255, 0, 0, 0.5)"],
      borderColor: ["rgba(255, 0, 0, 1)"],
      borderWidth: 1,
    },
    {
      label: "South East",
      data: [250],
      backgroundColor: ["rgba(200 , 100, 233, 0.5)"],
      borderColor: ["rgba(200 , 100, 233, 1)"],
      borderWidth: 1,
    },
    {
      label: "Other",
      data: [100],
      backgroundColor: ["rgba(34, 232, 180, 0.5)"],
      borderColor: ["rgba(34, 232, 180, 1)"],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const RegionChart = () => (
  <Box
    bg="white"
    borderWidth="1px"
    borderRadius="lg"
    className="m-5 border-4 p-6 text-center font-bold"
  >
    <div>
      <div className="header">
        <h1 className="title m-4 text-3xl">Region Data</h1>
      </div>
      <Bar data={data} options={options} />
    </div>
  </Box>
);

export default RegionChart;
