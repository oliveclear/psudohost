import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import Image from "next/image";

import sideIcon from "../../public/icons kit/sideicon.png";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Detect screen size changes and automatically show/hide the sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarVisible(true);
      } else {
        setIsSidebarVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize visibility based on current window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  const handleLogout = () => {
    // Remove authentication cookies
    Cookies.remove("token"); // Replace with your cookie name
    window.location.href = "/";
  };

  return (
    <div>
      {window.innerWidth <= 768 && (
        <button style={styles.toggleButton} onClick={toggleSidebar}>
          <Image
            src={sideIcon}
            alt="Toggle Sidebar"
            width={20} // Specify width of the image
            height={20} // Specify height of the image
            style={{ objectFit: "contain" }} // Optional: Ensures image scaling
          />
        </button>
      )}

      <div
        // style={{
        //   ...styles.sidebar,
        //   width: isSidebarVisible ? "250px" : "0", // Toggle sidebar width
        //   visibility: isSidebarVisible ? "visible" : "hidden",
        //   transition: "width 0.3s ease, visibility 0.3s ease",
        // }}
        style={{
          ...styles.sidebar,
          width: isSidebarVisible ? "250px" : "0", // Toggle sidebar width
          marginLeft: isSidebarVisible ? "0" : "-250px", // Slide sidebar in and out
          visibility: isSidebarVisible ? "visible" : "hidden", // Control visibility
          transition: "left 0.3s ease, width 0.3s ease, visibility 0.3s ease", // Smooth transitions
          // position: "none", // Positioning without fixed
          // marginLeft: "-250px",
        }}
      >
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>skincare</h1>
        </div>
        <nav style={styles.nav}>
          <Link href="/Landing/DashboardLog" passHref style={styles.navItem}>
            <span style={styles.icon}>
              <Image
                src="/icons kit/home.png"
                alt="Home Icon"
                width={13}
                height={15}
              />
            </span>
            <span style={styles.navText}>Home</span>
          </Link>
          <Link href="/ChatBot" passHref style={styles.navItem}>
            <Image
              src="/icons kit/ai chat.png"
              alt="Chat Icon"
              width={13}
              height={15}
            />
            <span style={styles.navText}>AI Chat</span>
          </Link>
          <Link href="/BookSession" passHref style={styles.navItem}>
            <Image
              src="/icons kit/book session.png"
              alt="Book Session Icon"
              width={13}
              height={15}
            />
            <span style={styles.navText}>Book Session</span>
          </Link>

          <Link href="/Ecommmerce/BuyProduct" passHref style={styles.navItem}>
            <Image
              src="/icons kit/shop now.png"
              alt="Shop Icon"
              width={13}
              height={15}
            />
            <span style={styles.navText}>Shop Now!</span>
          </Link>
          <Link href="/ChatDoc" passHref style={styles.navItem}>
            <Image
              src="/icons kit/shop now.png"
              alt="Chat Doc Icon"
              width={13}
              height={15}
            />
            <span style={styles.navText}>Chat with Doc</span>
          </Link>
          <Link href="/Discussion" passHref style={styles.navItem}>
            <Image
              src="/icons kit/disscusion forum.png"
              alt="Discussion Icon"
              width={13}
              height={15}
            />
            <span style={styles.navText}>Discussion</span>
          </Link>
          <Link href="#" style={styles.navItem}>
            <Image
              src="/icons kit/settings.png"
              alt="Settings Icon"
              width={13}
              height={15}
            />
            <span style={styles.navText}>Settings</span>
          </Link>
        </nav>

        <div style={styles.logoutContainer}>
          <Link
            href="/"
            passHref
            style={styles.logoutLink}
            onClick={handleLogout}
          >
            → Log Out
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    height: "100vh",
    background: "#1a1a1a",
    color: "#CEDF9F",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    position: "fixed",
    left: "0",
    top: "0",
    overflow: "hidden", // Prevent content overflow when hidden
  },
  toggleButton: {
    fontSize: "20px",
    color: "#ffffff",
    background: "#1a1a1a",
    border: "none",
    padding: "0px",
    paddingLeft: "18px",
    cursor: "pointer",
    position: "fixed",
    // left: "10px",
    // top: "10px",
    zIndex: "2",
    width: "40px",
    height: "84px",
    fontSize: "25px",
    fontWeight: "bold",
  },
  logoContainer: {
    marginBottom: "40px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ffffff",
  },
  nav: {
    flexGrow: 1,
    marginTop: "85px",
    position: "relative",
    zIndex: "2",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    color: "#CEDF9F",
    textDecoration: "none",
    marginBottom: "20px",
  },
  navText: {
    marginLeft: "10px",
    fontSize: "18px",
  },
  logoutContainer: {
    marginTop: "20px",
  },
  logoutLink: {
    color: "#FF4C4C",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Sidebar;
