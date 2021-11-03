import React from "react";
import ApplicationChart from "../ApplicationsChart";
import StageChart from "../StageChart";
import RegionChart from "../RegionChart";
import GenderChart from "../GenderChart";
import { Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex">
      <section className="flex-initial w-96 h-96">
        <ApplicationChart />
        <StageChart />
      </section>
      <section className="flex-initial w-96 h-96">
        <RegionChart />
        <GenderChart />
      </section>
      <motion.img
        animate={{ scale: [0, 2, 1], rotate: 360 }}
        transition={{ duration: 1.5 }}
        className="object-right"
        src="https://i.ibb.co/cbQRNWK/chris.png"
        alt="chris"
      />
      <Text fontSize="3xl" fontFamily="fantasy">
        Hi Gang! Welcome to your admin page. Go forth and get us the best
        candidates!
      </Text>
    </div>
  );
}
