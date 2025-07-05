"use client";
import React from "react";

const GithubChart = () => {
  return (
    <div className="w-full hidden lg:flex items-center justify-center mb-10">
      <img
        src="https://ghchart.rshah.org/2095ff/Nishantjaryal"
        alt=""
        className="w-[65%] min-w-[320px] h-auto invert hue-rotate-90 saturate-75 contrast-100"
        fetchPriority="high"
      />
    </div>
  );
};

export default GithubChart;
