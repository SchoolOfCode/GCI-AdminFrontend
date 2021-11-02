import React from "react";
import { PolarArea } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";

const data = {
  labels: ["Male", "Female", "Non-binary", "Prefer not to say", "Other"],
  datasets: [
    {
      data: [760, 600, 150, 300, 250],
      backgroundColor: [
        "rgba(0, 0, 255, 0.5)",
        "rgba(60, 179, 133, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(255, 0, 0, 0.5)",
        "rgba(200 , 100, 233, 0.5)",
      ],
      borderColor: [
        "rgba(0, 0, 255, 1)",
        "rgba(60, 179, 133, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 0, 0, 1)",
        "rgba(200 , 100, 233, 0.5)",
      ],
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

const GenderChart = () => (
  <Box
    bg="rgba(222, 222, 222,0.2)"
    borderWidth="1px"
    borderRadius="lg"
    className="max-w-sm text-center font-bold"
  >
    <div>
      <div className="header">
        <h1 className="title">Gender Data</h1>
      </div>
      <PolarArea data={data} options={options} />
    </div>
  </Box>
);

export default GenderChart;
