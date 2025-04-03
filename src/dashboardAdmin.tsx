import React, { useState, useEffect } from "react";
import "./styles.css";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

const DashboardAdmin: React.FC = () => {
  const [userCount, setUserCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8081/users/count")
      .then((response) => {
        setUserCount(response.data.count);
      })
      .catch((error) => {
        console.error("Error fetching user count:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8081/events/count")
      .then((response) => {
        setEventCount(response.data.count);
      })
      .catch((error) => {
        console.error("Error fetching event count:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8081/reservations/count")
      .then((response) => {
        setTicketCount(response.data.count);
      })
      .catch((error) => {
        console.error("Error fetching event count:", error);
      });
  }, []);

  const ticketChart = {
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
    colors: ["#1ABC9C", "#3498DB", "#ffc109"],
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
          return val + " Tickets vendu";
        },
      },
    },
  };

  const [eventChart, setEventChart] = useState({
    series: [{ name: "Total", data: [] }],
    chart: {
      type: "bar",
      height: 500,
    },
    colors: ["#FF4560"],
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
      title: { text: "Events" },
    },
    fill: { opacity: 1 },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " Events";
        },
      },
    },
  });

  useEffect(() => {
    axios
      .get("http://localhost:8081/events/eventPerMonths")
      .then((response) => {
        const data = response.data;

        const monthlyData = new Array(12).fill(0); // Array to hold event count per month (12 months)

        // Populate the data array with the fetched data
        data.forEach((event) => {
          const month = parseInt(event.month, 10) - 1; // Adjust the month index (0-based)
          monthlyData[month] = parseInt(event.total_events, 10);
        });

        // Update the chart state
        setEventChart((prevChart) => ({
          ...prevChart,
          series: [{ name: "Total", data: monthlyData }],
        }));
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });
  }, []);

  const revenuData = [
    500.0, 750.0, 250.0, 900.0, 798.265, 950.32, 1000000, 600.0, 200000, 500.0,
    850.0, 1500000,
  ];

  const totalIncome = revenuData.reduce((acc, value) => acc + value, 0);

  const revenuChart = {
    series: [
      {
        name: "Revenus (Ar)",
        data: revenuData,
      },
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: { enabled: false },
    },
    colors: ["#00E396"],
    stroke: { curve: "straight" },
    title: { text: "Revenus par mois", align: "left" },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
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
  };

  return (
    <div>
      <div className="container">
        <div className="cards">
          <h1>{userCount} Users</h1>
        </div>
        <div className="cards">
          <h1>{eventCount} events</h1>
        </div>
        <div className="cards">
          <h1>{ticketCount} tickets</h1>
        </div>
      </div>

      <div className="chart-container">
        <h2>Tickets vendus par mois</h2>
        <ReactApexChart
          options={ticketChart}
          series={ticketChart.series}
          type="bar"
          height={500}
        />
      </div>

      <div className="chart-container">
        <h2>Evenements mensuel</h2>
        <ReactApexChart
          options={eventChart}
          series={eventChart.series}
          type="bar"
          height={500}
        />
      </div>

      <div className="chart-container">
        <ReactApexChart
          options={revenuChart}
          series={revenuChart.series}
          type="line"
          height={350}
        />
        <div>
          <h2>Total income: {totalIncome.toLocaleString("fr-FR")} Ar </h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
