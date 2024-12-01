"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import Link from "next/link";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const lineData = {
  labels: ["Jan", "Mar", "May", "Jul", "Sep", "Now"],
  datasets: [
    {
      label: "Progress over Time",
      data: [0, 75, 50, 50, 50, 80],
      borderColor: "#b6e486",
      backgroundColor: "#b6e486",
      tension: 0.4,
      fill: false,
    },
    {
      label: "Hyperpigmentation",
      data: [0, 25, 40, 60, 60, 60],
      borderColor: "#8f8f8f",
      backgroundColor: "#8f8f8f",
      tension: 0.4,
      fill: false,
    },
  ],
};

const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
};

const DashboardLog = () => {
  const [isScreen, setIsScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreen(window.innerWidth <= 768); // Adjust for Screen screen width
      setIsMobile(window.innerWidth <= 430);
    };

    // Initial check and adding a resize listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    dashboardContainer: {
      marginTop: "88px",
      marginLeft: "250px", // Removed margin left for Screen
      height: "100vh",
      backgroundColor: "#1C1C1C",
      // width: "100%", // Set to full width for responsiveness
      marginLeft: isScreen ? "0px" : "250px",
      marginTop: isScreen ? "0px" : "88px",
    },
    cardsContainer: {
      padding: "16px",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
      marginBottom: "20px",
      gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
    },
    card: {
      height: "150px",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#222",
      cursor: "pointer",
    },
    cardText: {
      padding: "20px",
      color: "#ffffff",
      fontSize: "16px",
    },
    chartContainer: {
      display: "flex",
      justifyContent: "space-around",
    },
    lineChart: {
      width: "60%",
    },
    circularProgress: {
      width: "30%",
      textAlign: "center",
    },
    progressCircle: {
      position: "relative",
      width: "150px",
      height: "150px",
      margin: "0 auto",
    },
    progressText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "24px",
    },
    progressDetails: {
      marginTop: "1rem",
      textAlign: "left",
      lineHeight: "1.5",
    },
    headerTitle: {
      position: "relative",
      color: "#ffffff",
      fontFamily: "Outfit",
      fontSize: "30px",
      fontWeight: 600,
      lineHeight: "39px",
      letterSpacing: "-2.4px",
      transition: "color 0.3s ease, text-decoration 0.3s ease",
    },
  };

  return (
    <div style={styles.dashboardContainer}>
      <div style={{ width: "100%", marginTop: "84px" }}>
        {/* Cards Section */}
        <div style={styles.cardsContainer}>
          <Link href="/FaceScan">
            <div
              style={{
                ...styles.card,
                backgroundImage: "url('/icons kit/facescan.png')",
                backgroundSize: "cover",
                backgroundPosition: "-5px -83px",
                backgroundPosition: isScreen ? "-5px -83px" : "0px 0px",
                backgroundPosition: isMobile ? "-3px -30px" : "0px 0px",
              }}
            >
              <div style={styles.cardText}></div>
            </div>
          </Link>
          <Link href="/ChatBot">
            <div
              style={{
                ...styles.card,
                backgroundImage: "url('/icons kit/answer.png')",
                backgroundSize: "cover",
                backgroundPosition: "-5px -83px",
                backgroundPosition: isScreen ? "-5px -83px" : "0px 0px",
                backgroundPosition: isMobile ? "-3px -30px" : "0px 0px",
              }}
            >
              <div style={styles.cardText}></div>
            </div>
          </Link>
          <Link href="/Ecommmerce/BuyProduct" passHref>
            <div
              style={{
                ...styles.card,
                backgroundImage: "url('/icons kit/discover.png')",
                backgroundSize: "cover",
                backgroundPosition: "-5px -83px",
                backgroundPosition: isScreen ? "-5px -83px" : "0px 0px",
                backgroundPosition: isMobile ? "-3px -30px" : "0px 0px",
              }}
            >
              <div style={styles.cardText}></div>
            </div>
          </Link>
          <div
            style={{
              ...styles.card,
              backgroundImage: "url('/icons kit/bookyourskin.png')",
              backgroundSize: "cover",
              backgroundPosition: "-5px -83px",
              backgroundPosition: isScreen ? "-5px -83px" : "0px 0px",
              backgroundPosition: isMobile ? "-3px -30px" : "0px 0px",
            }}
          />
        </div>

        {/* Chart JS */}
        <div
          style={{
            margin: "20px",
            padding: "20px",
            borderRadius: "28px",
            background: "#171717",
            boxShadow: "inset -20px -16px 12.7px 0px rgba(16, 16, 16, 0.48)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Link href="/Chart">
              <h1
                style={{
                  // left: "-450px",
                  // marginLeft: "250px",
                  paddingLeft: "20px",
                  // position: "relative",
                  color: "#ffffff", // Default color
                  fontFamily: "Outfit",
                  fontSize: "30px",
                  fontWeight: 600,
                  lineHeight: "39px",
                  letterSpacing: "-2.4px",
                  transition: "color 0.3s ease, text-decoration 0.3s ease", // Smooth transition for both color and underline
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#CEDF9F"; // Change color on hover
                  e.target.style.textDecoration = "underline"; // Add underline on hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#ffffff"; // Revert color when hover ends
                  e.target.style.textDecoration = "none"; // Remove underline when hover ends
                }}
              >
                Track Your Progress
              </h1>
            </Link>
            <div
              style={{
                display: "flex",
                width: "100%",
                maxWidth: "1101px",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2rem",
                backgroundColor: "#222",
                color: "#b6e486",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional: Adds depth
                margin: "1rem 0", // Optional: Adds space between elements
                display: isMobile ? "" : "flex",
                padding: isMobile ? "1.5rem" : "2rem",
              }}
            >
              {/* Line Chart */}
              <div
                style={{
                  width: "60%",
                  width: isMobile ? "100%" : "60%",
                  height: isMobile ? "15vh" : "",
                }}
              >
                <Line data={lineData} options={lineOptions} />
              </div>

              {/* Circular Progress Indicator */}
              <div
                style={{
                  width: "30%",
                  textAlign: "center",
                  display: isMobile ? "none" : "",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "150px",
                    height: "150px",
                    margin: "0 auto",
                  }}
                >
                  <svg width="150" height="150">
                    <circle
                      cx="75"
                      cy="75"
                      r="70"
                      stroke="#333"
                      strokeWidth="10"
                      fill="none"
                    />
                    <circle
                      cx="75"
                      cy="75"
                      r="70"
                      stroke="#b6e486"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray="440"
                      strokeDashoffset="132"
                    />
                  </svg>
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "24px",
                      color: "#ffffff", // Text color for the percentage
                    }}
                  >
                    70%
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "1rem",
                    textAlign: "left",
                    lineHeight: "1.5",
                    color: "#b6e486", // Text color for the details
                  }}
                >
                  <div>acne reduced: 50%</div>
                  <div>hyperpigmentation: 60%</div>
                  <div>blackheads: 70%</div>
                  <div>oiliness reduced: 80%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLog;

//margin-top: 88px;
//margin-left: 250px;
