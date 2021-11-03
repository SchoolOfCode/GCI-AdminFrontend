import React from "react";
import ApplicationChart from "../ApplicationsChart";
import StageChart from "../StageChart";
import RegionChart from "../RegionChart";
import GenderChart from "../GenderChart";

export default function HomePage() {
  return (
    <div className="flex flex-shrink-0">
      <section className="w-96 h-96">
        <ApplicationChart className="flex-shrink-0" />
        <StageChart className="flex-shrink-0" />
      </section>
      <section className="w-96 h-96">
        <RegionChart className="flex-shrink-0" />
        <GenderChart className="flex-shrink-0" />
      </section>
    </div>
  );
}
