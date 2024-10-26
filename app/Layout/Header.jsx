import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update the width on window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Apply styles based on screen width
  const styles = {
    headerContainer: {
      position: "fixed",
      top: "0",
      left: screenWidth > 1200 ? "250px" : screenWidth > 768 ? "250px" : "140px",
      width:
        screenWidth > 1200
          ? "calc(100% - 250px)"
          : screenWidth > 768
          ? "calc(100% - 250px)"
          : "82%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: screenWidth > 768 ? "20px" : "15px",
      // width: screenWidth > 768 ? "100%": "82%",
      // gap: screenWidth > 768 ? "0px" : "40px",
      backgroundColor: "#1A1A1A",
      zIndex: "1000",
    },
    ordersInfo: {
      display: "flex",
      alignItems: "center",
      color: "#CEDF9F",
      // flexDirection: screenWidth > 768 ? "row" : "column",
      // alignItems: screenWidth > 768 ? "center" : "flex-start",
    },
    ordersNumber: {
      fontSize: screenWidth > 768 ? "32px" : "24px",
      fontWeight: "bold",
      marginRight: "10px",
    },
    ordersText: {
      fontSize: screenWidth > 768 ? "18px" : "16px",
      marginRight: "5px",
    },
    ordersSubText: {
      fontSize: screenWidth > 768 ? "14px" : "12px",
      color: "#A1A1A1",
    },
    toggleButtons: {
      display: "flex",
      alignItems: "center",
      borderRadius: "20px",
      padding: "2px",
      border: "3px solid #CEDF9F",
      // flexDirection: screenWidth > 768 ? "row" : "column",
    },
    activeButton: {
      padding: "10px 20px",
      backgroundColor: "#CEDF9F",
      border: "none",
      borderRadius: "15px",
      marginRight: screenWidth > 768 ? "10px" : "0",
      marginBottom: screenWidth > 768 ? "0" : "0px",
      width: screenWidth > 768 ? "auto" : "100%",
      fontWeight: "bold",
      cursor: "pointer",
    },
    inactiveButton: {
      padding: "10px 20px",
      backgroundColor: "transparent",
      color: "#CEDF9F",
      borderRadius: "20px",
      width: screenWidth > 768 ? "auto" : "100%",
      cursor: "pointer",
    },
    headerIcons: {
      display: "flex",
      alignItems: "center",
      // justifyContent: screenWidth > 768 ? "flex-start" : "space-around",
      // width: screenWidth > 768 ? "auto" : "100%",
    },
    headerIcon: {
      fontSize: screenWidth > 768 ? "24px" : "20px",
      color: "#CEDF9F",
      marginRight: screenWidth > 768 ? "20px" : "10px",
      cursor: "pointer",
    },
    userAvatar: {
      width: screenWidth > 768 ? "40px" : "30px",
      height: screenWidth > 768 ? "40px" : "30px",
      borderRadius: "50%",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.headerContainer}>
      <div style={styles.ordersInfo}>
        <span style={styles.ordersNumber}>37</span>
        <span style={styles.ordersText}>Orders</span>
        <span style={styles.ordersSubText}>Last 7 days</span>
      </div>
      <div style={styles.toggleButtons}>
        <Link href="/Landing/DashboardLog" passHref>
          <button style={styles.activeButton}>Dashboard</button>
        </Link>
        <Link href="/Meeting" passHref>
          <button style={styles.inactiveButton}>Meeting</button>
        </Link>
      </div>
      <div style={styles.headerIcons}>
        <span style={styles.headerIcon}>🔍</span>
        <span style={styles.headerIcon}>🔔</span>
        <Link href="/AddToCart">
          <button style={styles.headerIcon} aria-label="Add to Cart">
            🛒
          </button>
        </Link>
        <img
          src="/assets/user.png"
          alt="User Avatar"
          style={styles.userAvatar}
        />
      </div>
    </div>
  );
};

export default Header;
