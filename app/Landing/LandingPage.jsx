"use client";
import React from "react";
import { useRouter } from "next/navigation";
// import Image from "next/image";

const LandingPage = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    // Here you would replace this with your actual authentication check
    const isAuthorized = true; // Set this to true if the user is authenticated

    if (isAuthorized) {
      router.push("/login");
    } else {
      router.push("./register");
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>
          <img
            src="/icons kit/small logo (k).png"
            alt="logo"
            style={{ width: "56px", height: "67px" }}
          />
        </h1>
        <div style={styles.nav}>
          <button style={styles.loginButton} onClick={handleLoginClick}>
            Login
          </button>
          <button style={styles.searchButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
            >
              <rect
                x="1"
                y="1"
                width="46"
                height="47"
                rx="23"
                fill="#181818"
                stroke="#CEDF9F"
              />
              <path
                d="M23 31C27.4183 31 31 27.4183 31 23C31 18.5817 27.4183 15 23 15C18.5817 15 15 18.5817 15 23C15 27.4183 18.5817 31 23 31Z"
                stroke="#CEDF9F"
              />
              <path d="M33.0004 33L28.6504 28.65" stroke="#CEDF9F" />
            </svg>
          </button>
        </div>
      </header>
      <div style={styles.content}>
        <img
          src="/icons kit/logo final.png"
          alt="logo"
          style={{ width: "1255px", height: "276px" }}
        />

          <h2 style={styles.tagline2}>revitalize your care for skin</h2>
          <h2 style={styles.tagline}>with skincare</h2>
        </div>
      </div>
  );
};

const styles = {
  container: {
    // position: "relative",
    // width: "100%",
    height: "100vh",
    backgroundImage: "url('landing.png')",
    backgroundSize: "1440px 1024px", // Smaller background size
    backgroundRepeat: "no-repeat", // Prevent tiling if the image is smaller than the container
    backgroundPosition: "center",
    overflowY: "auto", // Allow vertical scrolling
    overflowX: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  },
  logo2: {
    fontSize: "3em",
    fontWeight: "bold",
    color: "#FFF",
    // marginBottom: "20px",
    padding: "20px",
  },
  logo: {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    alignItems: "center",
  },
  loginButton: {
    background: "#181818",
    backgroundColor: "#181818",
    border: "2px solid #CEDF9F",
    borderRadius: "31px",
    padding: "10px 20px",
    color: "#CEDF9F",
    cursor: "pointer",
    marginRight: "10px",
  },
  searchButton: {
    backgroundColor: "#181818",
    borderRadius: "100%",
    cursor: "pointer",
    width: "48px",
    height: "49px",
    flexshrink: "0",
  },
  searchIcon: {
    width: "24px",
    height: "24px",
  },
  content: {
    position: "relative",
    bottom: "20%",
    left: "4%",
    color: "#F0F0D4", // Use a light yellowish color
    top: "200px",
  },
  tagline: {
    // fontfamily: 'Istok Web',
    fontSize: "48px",
    //fontWeight: 'bold',
    position: "relative",
    left: "17px",
    margin: "0",
    color: "#CEDF9F",
    fontfamily: "Istok Web",
    fontsize: "96px",
    fontstyle: "normal",
    fontweight: "400",
    lineheight: "85px" /* 85.417% */,
    letterspacing: "-5.76px",
  },
  tagline2: {
    top: "12px",
    // fontfamily: 'Istok Web',
    fontSize: "48px",
    //fontWeight: 'bold',
    position: "relative",
    left: "17px",
    margin: "0",
    color: "#CEDF9F",
    fontfamily: "Istok Web",
    fontsize: "96px",
    fontstyle: "normal",
    fontweight: "400",
    lineheight: "85px" /* 85.417% */,
    letterspacing: "-5.76px",
  },
};

export default LandingPage;
