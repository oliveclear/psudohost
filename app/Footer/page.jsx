import React from "react";

const Footer = () => {
  const footerStyles = {
    container: {
      justifyContent: "space-between",
      backgroundColor: "#000000",
      padding: "20px",
      color: "#D1E231",
      fontFamily: "Arial, sans-serif",
    },
    section: {
      display: "flex",
      flexDirection: "row",
      padding: "20px",
      fontWeight: "400",
      fontSize: "17px",
      lineHeight: "41px",
      justifyContent: "space-around",
    },
    logo: {
      fontSize: "3em",
      fontWeight: "bold",
      color: "#FFF",
      marginBottom: "20px",
      padding: "20px",
    },
    linkList: {
      listStyle: "none",
      padding: 0,
    },
    linkList1: {
      marginLeft: "300px",
      listStyle: "none",
      padding: 0,
    },
    link: {
      color: "#CEDF9F",
      textDecoration: "none",
      fontSize: "1.2em",
      marginBottom: "10px",
    },
    centerText: {
      justifyContent: "center",
      alignItems: "center",
      fontSize: "4em",
      fontWeight: "bold",
      color: "#FFF",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
    },
    address: {
      marginLeft: "300px",
      marginTop: "20px",
      fontStyle: "normal",
      color: "#CEDF9F",
      fontSize: "20px",
      fontWeight: "400",
    },
    addressLink: {
      color: "#CEDF9F",
      textDecoration: "none",
    },
    imgskincare: {
      position: "relative",
      padding: "20px",
    },
    logo: {
      padding: "20px",
      width: "86px",
      height: "96px",
    },
  };

  return (
    <footer style={footerStyles.container}>
      <div style={footerStyles.logo}>
        <img src="/icons kit/small logo (k).png" alt="logo" />
      </div>
      <div style={footerStyles.section}>
        <ul style={footerStyles.linkList}>
          <li>
            <a href="#" style={footerStyles.link}>
              About Us
            </a>
          </li>
          <li>
            <a href="#" style={footerStyles.link}>
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" style={footerStyles.link}>
              Instagram
            </a>
          </li>
        </ul>
        <ul style={footerStyles.linkList1}>
          <li>
            <a href="#" style={footerStyles.link}>
              Help
            </a>
          </li>
          <li>
            <a href="#" style={footerStyles.link}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#" style={footerStyles.link}>
              Twitter
            </a>
          </li>
        </ul>
        <address style={footerStyles.address}>
          Marwadi University
          <br />
          Rajkot-Morbi Road, Rajkot 360 003 Gujarat, India
          <br />
          Email:{" "}
          <a
            href="mailto:info@marwadiuniversity.ac.in"
            style={footerStyles.addressLink}
          >
            info@marwadiuniversity.ac.in
          </a>
        </address>
      </div>
      <div style={footerStyles.imgskincare}>
        <img src="/icons kit/logo final.png" alt="skincare" />
      </div>
    </footer>
  );
};

export default Footer;
