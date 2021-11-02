import React from "react";
import ApplicationChart from "../ApplicationsChart";
import StageChart from "../StageChart";

export default function HomePage() {
  return (
    <section>
      <ApplicationChart />
      <StageChart />
    </section>
  );
}
