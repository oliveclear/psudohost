"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Apply styles based on screen width
  const styles = {
    dashboardContainer: {
      marginTop: "88px",
      marginLeft: screenWidth > 768 ? "250px" : "0",
      marginTop: screenWidth > 768 ? "88px" : "84px",
      height: "100vh",
      backgroundColor: "#1C1C1C",
      width: screenWidth > 768 ? "auto" : "100%",
    },
    cardsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
      marginBottom: "20px",
      gap: screenWidth > 768 ? "20px" : "10px",
      
    },
    card: {
      height: "150px",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#222",
      cursor: "pointer",
      grid: screenWidth > 768 ? "150px": "300px",
      height: screenWidth > 768 ? "150px" : "120px",
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
      width: screenWidth > 768 ? "60%" : "100%",
    },
    circularProgress: {
      width: screenWidth > 768 ? "30%" : "100%",
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
      <div
        style={{
          width: screenWidth > 768 ? "auto" : "100%",
          marginTop: "84px",
        }}
      >
        {/* Cards Section */}
        <div style={styles.cardsContainer}>
          <Link href="/FaceScan">
            <div
              style={{
                ...styles.card,
                backgroundImage: "url('/icons kit/facescan.png')",
                backgroundSize: "cover",
                backgroundPosition: "-5px -83px",
                backgroundPosition: screenWidth > 768 ? "-5px -83px" : "0px -47px",
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
                backgroundPosition: screenWidth > 768 ? "-5px -83px" : "0px -47px",
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
                backgroundPosition: "-5px -83px",
                backgroundSize: "cover",
                backgroundPosition: screenWidth > 768 ? "-5px -83px" : "0px -47px",
              }}
            >
              <div style={styles.cardText}></div>
            </div>
          </Link>
          <div
            style={{
              ...styles.card,
              backgroundImage: "url('/icons kit/bookyourskin.png')",
              backgroundPosition: "-5px -83px",
              backgroundSize: "cover",
              backgroundPosition: screenWidth > 768 ? "-5px -83px" : "0px -47px",
            }}
          />
        </div>

        {/* Chart JS */}
        <div>
          <Link href="/Chart">
            <h1
              style={{
                position: "relative",
                color: "#ffffff", // Default color
                fontFamily: "Outfit",
                fontSize: "30px",
                fontStyle: "normal",
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
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
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
              }}
            >
              {/* Line Chart */}
              <div style={{ width: "60%" }}>
                <Line data={lineData} options={lineOptions} />
              </div>

              {/* Circular Progress Indicator */}
              <div style={{ width: "30%", textAlign: "center" }}>
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
