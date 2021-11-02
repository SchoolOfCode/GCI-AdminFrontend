import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";

const data = {
  labels: ["Stage one", "Stage two", "Stage three", "Stage four", "Interview"],
  datasets: [
    {
      data: [800, 500, 300, 200, 200],
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

const StageChart = () => (
  <Box
    bg="rgba(222, 222, 222,0.2)"
    borderWidth="1px"
    borderRadius="lg"
    className="max-w-xs text-center font-bold"
  >
    <div>
      <div className="header">
        <h1 className="title">Applicant Stage</h1>
      </div>
      <Doughnut data={data} options={options} />
    </div>
  </Box>
);

export default StageChart;
