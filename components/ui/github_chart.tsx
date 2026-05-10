"use client";
import React from "react";

const GithubChart = () => {
  return (
    <div className="w-full hidden lg:flex items-center justify-center transition-all mb-10">
      <img
        src="https://ghchart.rshah.org/Nishantjaryal"
        alt=""
        className="w-[65%] transition-all min-w-[320px] h-auto  saturate-75 contrast-100"
        fetchPriority="high"
      />
    </div>
  );
};

export default GithubChart;
