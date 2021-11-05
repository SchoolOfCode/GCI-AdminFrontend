import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
const axios = require("axios").default;

export default function GenderChart() {
  const [isLoading, setLoading] = useState(true);
  const [array, setArray] = useState([0, 0, 0, 0, 0]);
  let gender = [0, 0, 0, 0, 0];

  useEffect(() => {
    axios
      .get(`https://gci-backend.herokuapp.com/users/`)

      .then((response) => {
        response.data.payload.forEach((item) => {
          if (item.stage_1[6] === "Male") {
            return (gender[0] += 1);
          } else if (item.stage_1[6] === "Female") {
            return (gender[1] += 1);
          } else if (item.stage_1[6] === "Non-binary") {
            return (gender[2] += 1);
          } else if (item.stage_1[6] === "Prefer not to say") {
            return (gender[3] += 1);
          } else if (item.stage_1[6] === "Other") {
            return (gender[4] += 1);
          }
        });
        setArray(gender);
        setLoading(false);
      });
  }, []);

  let data = {
    labels: ["Male", "Female", "Non-binary", "Prefer not to say", "Other"],
    datasets: [
      {
        data: array,
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
      className="m-5 border-4 p-6 text-center font-bold"
    >
      <div>
        <div className="header">
          <h1 className="title m-4 text-3xl">Gender Data</h1>
        </div>
        <Doughnut data={data} options={options} />
      </div>
    </Box>
  );
}
