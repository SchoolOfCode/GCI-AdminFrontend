import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
const axios = require("axios").default;

export default function RegionChart() {
  const [isLoading, setLoading] = useState(true);
  const [northWest, setNorthWest] = useState(0);
  const [westMid, setWestMid] = useState(0);
  const [eastMid, setEastMid] = useState(0);
  const [london, setLondon] = useState(0);
  const [southEast, setSouthEast] = useState(0);
  const [other, setOther] = useState(0);

  //fetching region from database to fill chart
  useEffect(() => {
    axios.get(`https://gci-backend.herokuapp.com/users/`).then((response) => {
      response.data.payload.forEach((item) => {
        if (item.region === "North West") {
          setNorthWest(northWest + 1);
        } else if (item.region === "West Midlands") {
          setWestMid(westMid + 1);
        } else if (item.region === "East Midlands") {
          setEastMid(eastMid + 1);
        } else if (item.region === "London") {
          setLondon(london + 1);
        } else if (item.region === "South East") {
          setSouthEast(southEast + 1);
        } else if (item.region === "Other") {
          setOther(other + 1);
        }
      });

      setLoading(false);
    });
  }, []);

  let data = {
    labels: ["Region"],
    datasets: [
      {
        label: "North West",
        data: [northWest],
        backgroundColor: ["rgba(0, 0, 255, 0.5)"],
        borderColor: ["rgba(0, 0, 255, 1)"],
        borderWidth: 1,
      },
      {
        label: "West Midlands",
        data: [westMid],
        backgroundColor: ["rgba(60, 179, 133, 0.5)"],
        borderColor: ["rgba(60, 179, 133, 1)"],
        borderWidth: 1,
      },
      {
        label: "East Midlands",
        data: [eastMid],
        backgroundColor: ["rgba(255, 206, 86, 0.5)"],
        borderColor: ["rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
      {
        label: "London",
        data: [london],
        backgroundColor: ["rgba(255, 0, 0, 0.5)"],
        borderColor: ["rgba(255, 0, 0, 1)"],
        borderWidth: 1,
      },
      {
        label: "South East",
        data: [southEast],
        backgroundColor: ["rgba(255 , 105, 180, 0.5)"],
        borderColor: ["rgba(255 , 105, 180, 1)"],
        borderWidth: 1,
      },
      {
        label: "Other",
        data: [other],
        backgroundColor: ["rgba(241, 90, 34, 0.5)"],
        borderColor: ["rgba(241, 90, 34, 1)"],
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
          <h1 className="title m-4 text-3xl">Region Data</h1>
        </div>
        <Bar data={data} options={options} />
      </div>
    </Box>
  );
}
