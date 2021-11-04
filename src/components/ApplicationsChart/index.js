import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
const axios = require("axios").default;

export default function ApplicationsChart() {
  const [isLoading, setLoading] = useState(true);
  const [array, setArray] = useState([0, 0, 0, 0]);
  let applications = [0, 0, 0, 0];

  useEffect(() => {
    axios
      .get(`https://gci-backend.herokuapp.com/users/`)

      .then((response) => {
        applications[0] = response.data.payload.length;
        response.data.payload.forEach((item) => {
          if (item.final === true) {
            return (applications[1] += 1);
          } else if (item.final === false) {
            return (applications[3] += 1);
          } else if (item.final === null) {
            return (applications[2] += 1);
          }
        });
        console.log("applications", applications);
        setArray(applications);
        console.log("array", array);
        setLoading(false);
      });
  }, []);

  let data = {
    labels: ["Number of Applicants"],
    datasets: [
      {
        label: "Total Applicants",
        data: applications[0],
        backgroundColor: ["rgba(0, 0, 255, 0.5)"],
        borderColor: ["rgba(0, 0, 255, 1)"],
        borderWidth: 1,
      },
      {
        label: "Accepted",
        data: applications[1],
        backgroundColor: ["rgba(60, 179, 133, 0.5)"],
        borderColor: ["rgba(60, 179, 133, 1)"],
        borderWidth: 1,
      },
      {
        label: "Pending",
        data: applications[2],
        backgroundColor: ["rgba(255, 206, 86, 0.5)"],
        borderColor: ["rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
      {
        label: "Rejected",
        data: applications[3],
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
          <h1 className="title m-4 text-3xl">Applicant Status</h1>
        </div>
        <Bar className="w-8" data={data} options={options} />
      </div>
    </Box>
  );
}
