'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import searchIcon from '../../public/icons kit/search.png';
import notiffsIcon from '../../public/icons kit/notiffs.png'

<Image src={searchIcon} alt="Search Icon" width={24} height={24} />


const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update the width on window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Apply styles based on screen width
  const styles = {
    headerContainer: {
      height: "84px",
      position: "fixed",
      top: "0",
      left: isMobile ? "40px" : screenWidth > 1200 ? "250px" : isScreen ? "40px" : "140px",
      width:
        isMobile
          ? "91%"
          : screenWidth > 1200
          ? "calc(100% - 250px)"
          : isScreen
          ? "calc(100% - 40px)"
          : screenWidth > 430
          ? "89%"
          : "82%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isScreen ? "20px" : "15px",
      backgroundColor: "#1A1A1A",
      zIndex: "1",
    },

    ordersInfo: {
      display: "flex",
      alignItems: "center",
      color: "#CEDF9F",
      display: isScreen ? "none" : "flex",
    },
    ordersNumber: {
      fontSize: isScreen ? "32px" : "24px",
      fontWeight: "bold",
      marginRight: "10px",
    },
    ordersText: {
      fontSize: isScreen ? "18px" : "16px",
      marginRight: "5px",
    },
    ordersSubText: {
      fontSize: isScreen ? "14px" : "12px",
      color: "#A1A1A1",
    },
    toggleButtons: {
      marginLeft: isMobile ? "75px" : "0px",
      display: "flex",
      alignItems: "center",
      borderRadius: "20px",
      padding: "2px",
      border: "3px solid #CEDF9F",
      // flexDirection: isScreen ? "row" : "column",
    },
    activeButton: {
      padding: isMobile? "4px 3px" : "10px 20px",
      backgroundColor: "#CEDF9F",
      border: "none",
      borderRadius: isMobile ? "22px":"15px",
      marginRight: isScreen ? "10px" : "0",
      marginRight: isMobile ? "5px" : "0px",
      marginBottom: isScreen ? "0" : "0px",
      marginBottom: isMobile ? "0" : "0px",
      width: isScreen ? "auto" : "100%",
      fontWeight:isMobile ? "" : "bold",
      cursor: "pointer",
    },

    inactiveButton: {
      padding: isMobile? "4px 3px" : "10px 20px",
      backgroundColor: "transparent",
      color: "#CEDF9F",
      borderRadius: isMobile ? "22px":"15px",
      marginRight: isScreen ? "10px" : "0",
      marginRight: isMobile ? "5px" : "0px",
      marginBottom: isScreen ? "0" : "0px",
      marginBottom: isMobile ? "0" : "0px",
      width: isScreen ? "auto" : "100%",
      cursor: "pointer",
    },
    headerIcons: {
      display: "flex",
      alignItems: "center",
    },
    headerIcon1: {
      fontSize: isScreen ? "24px" : "20px",
      color: "#CEDF9F",
      marginRight: isScreen ? "0px" : "10px",
      marginRight: isMobile ? "0px" : "10px",
      cursor: "pointer",
      display: isMobile ? "none" : "",
    },
    headerIcon2: {
      width: isScreen ? "24px" : "20px", // Adjust width instead of fontSize for images
      height: isScreen ? "24px" : "20px", // Ensure the image is square
      marginRight: isMobile ? "15px" : "10px",
      cursor: "pointer",
    },
    headerIcon3: {
      fontSize: isScreen ? "28px" : "20px",
      height: isMobile ? "31px" : "",
      width: isMobile ? "28px" : "",
      color: "#CEDF9F",
      marginRight: isScreen ? "0px" : "10px",
      marginRight: isMobile ? "0px" : "10px",
      cursor: "pointer",
    },
    userAvatar: {
      width: isScreen ? "40px" : "30px",
      height: isScreen ? "40px" : "30px",
      borderRadius: "50%",
      cursor: "pointer",
      display: isMobile ? "none" : "",
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
        {/* <span style={styles.headerIcon2}>🔍</span> */}
        <Image src={searchIcon} alt="Search Icon" style={styles.headerIcon2}/>
        <Image src={notiffsIcon} alt="Notif Icon" style={styles.headerIcon3}/>
        <Link href="/AddToCart">
          <button style={styles.headerIcon1} aria-label="Add to Cart">
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
