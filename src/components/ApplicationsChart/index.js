import React from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";

const data = {
  labels: ["Number of Applicants"],
  datasets: [
    {
      label: "Total Applicants",
      data: [2000],
      backgroundColor: ["rgba(0, 0, 255, 0.5)"],
      borderColor: ["rgba(0, 0, 255, 1)"],
      borderWidth: 1,
    },
    {
      label: "Accepted",
      data: [500],
      backgroundColor: ["rgba(60, 179, 133, 0.5)"],
      borderColor: ["rgba(60, 179, 133, 1)"],
      borderWidth: 1,
    },
    {
      label: "Pending",
      data: [1200],
      backgroundColor: ["rgba(255, 206, 86, 0.5)"],
      borderColor: ["rgba(255, 206, 86, 1)"],
      borderWidth: 1,
    },
    {
      label: "Rejected",
      data: [1200],
      backgroundColor: ["rgba(255, 0, 0, 0.5)"],
      borderColor: ["rgba(255, 0, 0, 1)"],
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

const ApplicationChart = () => (
  <Box
    bg="white"
    borderWidth="1px"
    borderRadius="lg"
    className="m-5 border-4 p-6 text-center font-bold"
  >
    <div>
      <div className="header">
        <h1 className="title m-4 text-3xl">Applicant Status</h1>
      </div>
      <Bar className="w-8" data={data} options={options} />
    </div>
  </Box>
);

export default ApplicationChart;
