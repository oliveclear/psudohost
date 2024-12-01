"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Istok_Web } from "next/font/google";
import Cookies from "js-cookie";

const istokweb = Istok_Web({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const DiscussionRoom = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScreen, setIsScreen] = useState(false);
  const [posts, setPosts] = useState([]);
  const token = Cookies.get("token");

  // Handle screen resizing for mobile responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  // Fetch posts from the backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_HOST}/discuss/get-message`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setPosts(data.messages || []);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [token]);

  return (
    <div
      style={{
        ...styles.container,
        zIndex: isScreen ? "0" : "-1",
        // height: isScreen ? "0" : "100vh",
        marginLeft: isMobile ? "0px" : "250px",
        // marginTop: isMobile ? "0px" : "88px",
      }}
    >
      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.title}>Discussion Room</h1>
        <Link href="/DiscussionPost" passHref>
          <button style={styles.newPostButton}>+</button>
        </Link>
      </div>

      <div style={styles.line}></div>

      {/* Posts Section */}
      <div style={styles.postsContainer}>
        {posts.map((post, index) => (
          <div key={index}>
            <div style={styles.post}>
              <img
                src="/assets/user.png" // Reference the image path relative to the public folder
                alt="User Avatar"
                style={styles.avatar}
              />
              <div style={styles.postContent}>
                <p style={styles.username}>@anonymous {index + 1}</p>
                <p style={styles.content}>{post.content}</p>
              </div>
              <div style={styles.voteSection}>
                <p style={styles.voteCount}>{post.upvotes}</p>
                <button style={styles.voteButton}>↑</button>
                <p style={styles.voteCount}>{post.downvotes}</p>
                <button style={styles.voteButton}>↓</button>
              </div>
            </div>
            <div style={styles.line}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    padding: "20px",
    fontFamily: "Outfit",
    display: "flex",
    flexDirection: "column",
    marginTop: "84px",
    marginLeft: "250px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    margin: "0",
    fontFamily: istokweb.style.fontFamily,
    letterSpacing: "-1.9px",
  },
  newPostButton: {
    backgroundColor: "#CEDF9F",
    color: "#1a1a1a",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "24px",
    cursor: "pointer",
  },
  postsContainer: {
    flex: 1,
    fontFamily: istokweb.style.fontFamily,
    paddingTop: "3px",
  },
  post: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    height: "100px",
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "15px",
  },
  postContent: {
    flex: 1,
  },
  username: {
    margin: "0 0 5px 0",
    fontWeight: "bold",
    fontSize: "16px",
    color: "#CEDF9F",
    fontFamily: istokweb.style.fontFamily,
  },
  content: {
    margin: 0,
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    fontFamily: istokweb.style.fontFamily,
  },
  voteSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "20px",
  },
  voteCount: {
    margin: "5px 0",
    fontSize: "16px",
  },
  voteButton: {
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
    border: "2px solid #EBEBEB",
    borderRadius: "14px",
    marginRight: "5px",
    marginLeft: "5px",
  },
  line: {
    backgroundColor: "#FFFFFF1A",
    height: "1px",
    marginBottom: "2px",
  },
};

export default DiscussionRoom;
