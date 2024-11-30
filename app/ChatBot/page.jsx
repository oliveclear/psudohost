"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import sherxSkinCareImage from "/public/sherxskinkare1.png";
import { Istok_Web } from "next/font/google";

const istokweb = Istok_Web({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]); // Store chat history
  const [screenWidth, setScreenWidth] = useState(0); // Default value

  useEffect(() => {
    setScreenWidth(window.innerWidth); // Set the initial width
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = async () => {
    if (message.trim() === "") return; // Prevent empty messages

    // Add user's message to chat history
    setChatHistory((prev) => [...prev, { sender: "user", text: message }]);

    // Send message to backend API
    try {
      const response = await fetch(
        "https://admiring-lamarr-charming.lemme.cloud/api/skincare",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API response data:", data); // Debug log

      // Check if the response contains an error
      if (data.res && data.res.reply) {
        // Add AI's response to chat history
        setChatHistory((prev) => [
          ...prev,
          { sender: "bot", text: data.res.reply },
        ]);
      } else {
        setChatHistory((prev) => [
          ...prev,
          { sender: "bot", text: "No response from server" },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setChatHistory((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong." },
      ]);
    }

    setMessage(""); // Clear input after sending
  };

  return (
    <div
      style={{
        ...styles.container,
        marginLeft: screenWidth > 768 ? "250px" : "0",
        marginTop: screenWidth > 768 ? "88px" : "84px",
      }}
    >
      <Image
        src={sherxSkinCareImage}
        alt="Sherx Skincare"
        width={108}
        height={96}
      />
      <h1 style={styles.heading}>
        sherrrr.ai
        <br />
      </h1>

      <div style={styles.chatHistory}>
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            style={
              chat.sender === "user" ? styles.userMessage : styles.botMessage
            }
          >
            {chat.text}
          </div>
        ))}
      </div>

      <div style={styles.chatInputContainer}>
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message..."
          style={styles.chatInput}
        />
        <button onClick={handleSend} style={styles.sendButton}>
          ➤
        </button>
      </div>
    </div>
  );
};

// Styles remain unchanged
const styles = {
  container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "92vh",
        backgroundColor: "#1C1C1C",
        position: "relative",
        overflow: "hidden",
        justifyContent: "center",
        zIndex: "-1",
      },
      heading: {
        color: "rgba(206, 223, 159, 0.85)",
        textAlign: "center",
        fontFamily: istokweb.style.fontFamily, // Apply the Istok Web font
        fontSize: "50px",
        fontWeight: "700",
        lineHeight: "36px",
        width: "622px",
        marginBottom: "0",
        opacity: 0.7,
      },
      description: {
        color: "rgba(235, 235, 235, 0.71)",
        textAlign: "center",
        fontFamily: '"Istok Web"',
        fontSize: "15px",
        fontWeight: 400,
        lineHeight: "21px",
        maxWidth: "600px",
        marginBottom: "3rem",
      },
      chatHistory: {
        width: "80%",
        maxWidth: "600px",
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "20px",
        overflowY: "hidden",
        maxHeight: "300px",
        height: "80vh",
      },
      userMessage: {
        textAlign: "right",
        color: "#fff",
        marginBottom: "10px",
      },
      botMessage: {
        textAlign: "left",
        color: "#c7d0b8",
        marginBottom: "10px",
      },
      chatInputContainer: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#2a2a2a",
        borderRadius: "50px",
        padding: "10px 20px",
        width: "80%",
        maxWidth: "600px",
      },
      chatInput: {
        flex: 1,
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        color: "#fff",
        fontSize: "1rem",
      },
      sendButton: {
        backgroundColor: "transparent",
        border: "none",
        color: "#c7d0b8",
        fontSize: "1.5rem",
        cursor: "pointer",
      },
};

export default Chatbot;
