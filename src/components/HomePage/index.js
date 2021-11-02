import React from "react";
import ApplicationChart from "../ApplicationsChart";
import StageChart from "../StageChart";
import RegionChart from "../RegionChart";
import GenderChart from "../GenderChart";

export default function HomePage() {
  return (
    <div className="flex">
      <section>
        <ApplicationChart />
        <StageChart />
      </section>
      <section>
        <RegionChart />
        <GenderChart />
      </section>
    </div>
  );
}
