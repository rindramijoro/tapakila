import React from "react";
import "./styles.css"; 
import ReactApexChart from "react-apexcharts";

const DashboardAdmin: React.FC = () => {

  const chartOptions = {
    series: [
      {
        name: "Standard",
        data: [44, 55, 57, 56, 0, 61, 58, 63, 60, 66, 1, 157],
      },
      {
        name: "Early Bird",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 99, 69, 201],
      },
      { name: "VIP", data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 12, 15, 55] },
    ],
    chart: {
      type: "bar",
      height: 500,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      title: { text: "Tickets" },
    },
    fill: { opacity: 1 },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + " Tickets";
        },
      },
    },
  };

  return (
    <div>
      <div className="container">
        <div className="cards">
          <h1>19 Users</h1>
        </div>
        <div className="cards">
          <h1>20 events</h1>
        </div>
        <div className="cards">
          <h1>100 tickets</h1>
        </div>
      </div>

      <div className="chart-container">
        <ReactApexChart
          options={chartOptions}
          series={chartOptions.series}
          type="bar"
          height={500}
        />
      </div>
    </div>
  );
};

export default DashboardAdmin;
