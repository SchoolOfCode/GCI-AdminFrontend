import React, { useState, useEffect } from "react";
import ApplicationChart from "../ApplicationsChart";
import StageChart from "../StageChart";
import RegionChart from "../RegionChart";
import GenderChart from "../GenderChart";
import { Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { useWindowSize } from "../../hooks/useWindowSize";
import { detectMob } from "../../functions/detectMob";
const axios = require("axios").default;

export default function HomePage() {
  //   // for mobile interface usage
  const [width, height] = useWindowSize();
  const [vWidth, setvWidth] = useState("w-auto");
  const [vHeight, setvHeight] = useState("h-auto");
  const [isMobile, setIsMobile] = useState(false);
  // let values = [];
  // let stages = [0, 0, 0, 0, 0, 0, 0];

  useEffect(() => {
    if (width <= 1080 || detectMob()) {
      setvWidth("min-2/4");
      setvHeight("min-2/4");
      setIsMobile(true);
      console.log("mobile");
    } else if (width > 1080) {
      setvWidth("w-auto");
      setvHeight("h-auto");
      setIsMobile(false);
    }
  }, [width]);

  // axios.get(`https://gci-backend.herokuapp.com/users/`).then((result) => {
  //   {
  //     result.data.payload.forEach(function (item) {
  //       values.push(item.current_stage);
  //     });
  //   }
  //   values.forEach((item) => {
  //     if (item === 1) {
  //       return (stages[0] += 1);
  //     } else if (item === 2) {
  //       return (stages[1] += 1);
  //     } else if (item === 3) {
  //       return (stages[2] += 1);
  //     } else if (item === 4) {
  //       return (stages[3] += 1);
  //     } else if (item === 5) {
  //       return (stages[4] += 1);
  //     } else if (item === 6) {
  //       return (stages[5] += 1);
  //     } else if (item === 7) {
  //       return (stages[6] += 1);
  //     }
  //   });console.log("stages on the homepage", stages);
  // });

  
  return (
    <div className="">
      {isMobile && (
        <div className="grid grid-rows-1 grid-flow-col">
          <section
            className={
              vWidth + " flex flex-initial flex-col flex-wrap " + vHeight
            }
          >
            <ApplicationChart />
            <StageChart  />
            <RegionChart />
            <GenderChart />
          </section>
        </div>
      )}
      {!isMobile && (
        <div>
          <section>
            <section className={"grid grid-rows-2 grid-flow-col"}>
              <ApplicationChart />
              <StageChart  />
              <RegionChart />
              <GenderChart />
              <div className="flex flex-row flex-wrap">
                <Text
                  fontSize="3xl"
                  fontFamily="fantasy"
                  className="font-bold break-normal ml-40"
                >
                  <p className="ml-40">
                    Hi Gang! Welcome to your admin page. Go forth and get us the
                    best candidates!
                  </p>
                  <motion.img
                    animate={{ scale: [0, 2, 1], rotate: 360 }}
                    transition={{ duration: 1.5 }}
                    className="w-1/4"
                    src="https://i.ibb.co/cbQRNWK/chris.png"
                    alt="chris"
                  />
                </Text>
              </div>
            </section>
          </section>
        </div>
      )}
    </div>
  );
}
