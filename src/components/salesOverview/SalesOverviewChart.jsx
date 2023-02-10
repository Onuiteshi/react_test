import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const SalesOverviewChart = () => {
  const [series, setSeries] = useState([
    {
      name: "Income",
      data: [3100, 400, 208, 510, 420, 1009, 100, 500, 200, 800, 1000, 3000],
    },
    {
      name: "Expenses",
      data: [110, 320, 450, 3200, 340, 520, 410, 500, 200, 650, 200, 600],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      categories: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default SalesOverviewChart;
