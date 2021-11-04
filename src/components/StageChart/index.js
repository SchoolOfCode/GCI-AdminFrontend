import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
const axios = require("axios").default;

export default function StageChart() {
  const [isLoading, setLoading] = useState(true);
  const [array, setArray] = useState([0, 0, 0, 0, 0, 0, 0]);
  let stages = [0, 0, 0, 0, 0, 0, 0];

  useEffect(() => {
    axios
      .get(`https://gci-backend.herokuapp.com/users/`)
      .then((response) => {
        response.data.payload.forEach((item) => {
          if (item.current_stage === 1) {
            return (stages[0] += 1);
          } else if (item.current_stage === 2) {
            return (stages[1] += 1);
          } else if (item.current_stage === 3) {
            return (stages[2] += 1);
          } else if (item.current_stage === 4) {
            return (stages[3] += 1);
          } else if (item.current_stage === 5) {
            return (stages[4] += 1);
          } else if (item.current_stage === 6) {
            return (stages[5] += 1);
          } else if (item.current_stage === 7) {
            return (stages[6] += 1);
          }
        });
        setArray(stages);
        setLoading(false);
      });
  }, []);

  let data = {
    labels: [
      "Stage one",
      "Stage two",
      "Stage three",
      "Stage four",
      "Application Completed",
      "Interview",
      "Final",
    ],
    datasets: [
      {
        data: array,
        backgroundColor: [
          "rgba(0, 0, 255, 0.5)",
          "rgba(60, 179, 133, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(255, 0, 0, 0.5)",
          "rgba(255 , 105, 180, 0.5)",
          "rgba(241, 90, 34, 0.5)",
          "rgba(100 , 50, 116, 0.5)",
        ],
        borderColor: [
          "rgba(0, 0, 255, 1)",
          "rgba(60, 179, 133, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 0, 0, 1)",
          "rgba(255 , 105, 180, 1)",
          "rgba(241, 90, 34, 1)",
          "rgba(100 , 50, 116, 1)",
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

  if (isLoading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderRadius="lg"
      className="m-5 border-4 p-6 text-center  font-bold"
    >
      <div>
        <div className="header">
          <h1 className="title m-4 text-3xl">Applicant Stage</h1>
        </div>
        <Doughnut data={data} options={options} />
      </div>
    </Box>
  );
}
