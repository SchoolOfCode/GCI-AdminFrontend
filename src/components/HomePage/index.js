import React from "react";
import ApplicationChart from "../ApplicationsChart";
import StageChart from "../StageChart";
import RegionChart from "../RegionChart";
import GenderChart from "../GenderChart";

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
    </div>
  );
}
