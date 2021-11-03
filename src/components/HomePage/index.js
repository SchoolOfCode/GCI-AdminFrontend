import React from "react";
import ApplicationChart from "../ApplicationsChart";
import StageChart from "../StageChart";
import RegionChart from "../RegionChart";
import GenderChart from "../GenderChart";

export default function HomePage() {
  return (
    <div className="flex">
      <section className="flex-initial w-1/4 h-1/4">
        <ApplicationChart className="h-1/4" />
        <StageChart />
      </section>
      <section className="flex-initial w-1/4 h-1/4">
        <RegionChart />
        <GenderChart />
      </section>
    </div>
  );
}
