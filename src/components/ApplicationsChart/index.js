import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
const axios = require("axios").default;

export default function ApplicationsChart() {
  const [isLoading, setLoading] = useState(true);
  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);
  const [data4, setData4] = useState(0);

  useEffect(() => {
    axios.get(`https://gci-backend.herokuapp.com/users/`).then((response) => {
      console.log("this should be true, false or null", response.data.payload);
      setData1(response.data.payload.length);
      response.data.payload.forEach((item) => {
        if (item.current_stage === 7 && item.final.final === true) {
          setData2(data2 + 1);
        } else if (item.current_stage === 7 && item.final.final === false) {
          setData4(data4 + 1);
        } else if (item.current_stage < 7){
          setData3(data3+1);
        }
      });
      
      console.log("new arrays", data1, data2, data3, data4);
      setLoading(false);
    });
  }, [isLoading]);

  let data = {
    labels: ["Number of Applicants"],
    datasets: [
      {
        label: "Total Applicants",
        data: [data1],
        backgroundColor: ["rgba(0, 0, 255, 0.5)"],
        borderColor: ["rgba(0, 0, 255, 1)"],
        borderWidth: 1,
      },
      {
        label: "Accepted",
        data: [data2],
        backgroundColor: ["rgba(60, 179, 133, 0.5)"],
        borderColor: ["rgba(60, 179, 133, 1)"],
        borderWidth: 1,
      },
      {
        label: "Pending",
        data: [data3],
        backgroundColor: ["rgba(255, 206, 86, 0.5)"],
        borderColor: ["rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
      {
        label: "Rejected",
        data: [data4],
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
