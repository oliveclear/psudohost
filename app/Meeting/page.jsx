import React from "react";
import Link from "next/link";

const MeetingSchedule = () => {
  // Schedule data
  const scheduleData = [
    {
      date: "1",
      day: "SEP, SAT",
    },
    {
      date: "3",
      day: "SEP, SAT",
    },
    {
      date: "7",
      day: "SEP, SAT",
    },
    {
      date: "9",
      day: "SEP, SAT",
    },
  ];

  // Inline styles
  const meetingStyles = {
    container: {
      position: "relative",
      marginLeft: "250px",
      top: "88px",
      padding: "20px",
      backgroundColor: "#1D1D1D",
      color: "#EBEBEB",
      fontFamily: "Arial, sans-serif",
      height: "100vh",
      // zIndex: "-1",
    },
    monthTitle: {
      fontSize: "2em",
      fontWeight: "bold",
      marginBottom: "10px",
      fontFamily: "Outfit",
    },
    meetingItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #444",
      padding: "10px 0",
      fontFamily: "Istok Web",
    },
    meetingDetails: {
      flex: 1,
      paddingLeft: "10px",
      display: "flex",
    },
    dateCircle: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#CEDF9F",
      color: "#1D1D1D",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.2em",
      fontWeight: "bold",
    },
    button: {
      backgroundColor: "#0070f3",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      padding: "8px 16px",
      cursor: "pointer",
      fontSize: "14px",
      textDecoration: "none", // Remove underline from <a> tag
      display: "inline-block",
      textAlign: "center",
    },
    buttonContainer: {
      zIndex: "1px",
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <div style={meetingStyles.container}>
      <div style={meetingStyles.monthTitle}>September</div>
      {scheduleData.map((item, index) => (
        <div key={index} style={meetingStyles.meetingItem}>
          <div style={meetingStyles.dateCircle}>{item.date}</div>
          <div style={meetingStyles.meetingDetails}>
            <div>{item.day}</div>
            <div style={{ marginLeft: "20px" }}>{item.time}</div>
            <div style={{ marginLeft: "20px" }}>
              {item.treatment} &#123; {item.doctor} &#125;
            </div>
          </div>
          <div style={meetingStyles.buttonContainer}>
            <Link href="/DetailedAnalysis" passHref>
              <div style={meetingStyles.button}>Show</div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetingSchedule;
