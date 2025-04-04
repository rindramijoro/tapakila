import React, { useState, useEffect } from "react";
import "./Styles/styles.css";
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
        data: [0, 5, 0, 3, 0, 0, 4, 8, 0, 2, 1, 5],
      },
      {
        name: "Early Bird",
        data: [0, 2, 0, 5, 0, 0, 0, 5, 4, 1, 2, 1],
      },
      { name: "VIP", data: [0, 2, 0, 6, 0, 0, 2, 2, 2, 1, 2, 5] },
    ],
    chart: {
      type: "bar",
      height: 20,
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

        const monthlyData = new Array(12).fill(0); 

        data.forEach((event) => {
          const month = parseInt(event.month, 10) - 1; 
          monthlyData[month] = parseInt(event.total_events, 10);
        });

        setEventChart((prevChart) => ({
          ...prevChart,
          series: [{ name: "Total", data: monthlyData }],
        }));
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });
  }, []);

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
    </div>
  );
};

export default DashboardAdmin;
