import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
const axios = require("axios").default;

export default function ApplicationsChart() {
  const [isLoading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [accepted, setAccepted] = useState(0);
  const [rejected, setRejected] = useState(0);

  useEffect(() => {
    axios.get(`https://gci-backend.herokuapp.com/users/`).then((response) => {
      setTotal(response.data.payload.length);
      response.data.payload.forEach((item) => {
        if (item.status === "Accepted") {
          setAccepted(accepted + 1);
        } else if (item.status === "Rejected") {
          setRejected(rejected + 1);
        }
      });

      setLoading(false);
    });
  }, []);

  let data = {
    labels: ["Number of Applicants"],
    datasets: [
      {
        label: "Total Applicants",
        data: [total],
        backgroundColor: ["rgba(0, 0, 255, 0.5)"],
        borderColor: ["rgba(0, 0, 255, 1)"],
        borderWidth: 1,
      },
      {
        label: "Accepted",
        data: [accepted],
        backgroundColor: ["rgba(60, 179, 133, 0.5)"],
        borderColor: ["rgba(60, 179, 133, 1)"],
        borderWidth: 1,
      },
      {
        label: "Pending",
        data: [total - (accepted + rejected)],
        backgroundColor: ["rgba(255, 206, 86, 0.5)"],
        borderColor: ["rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
      {
        label: "Rejected",
        data: [rejected],
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
