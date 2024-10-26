"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Istok_Web } from 'next/font/google';
import Cookies from "js-cookie"; // Import js-cookie
const token = Cookies.get("token");


const istokweb = Istok_Web({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const DiscussionRoom = () => {
  // State for posts
  const [posts, setPosts] = useState([]);

  // Fetch posts from backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL_HOST}/discuss/get-message`,{
            headers: {
              "Authorization":`Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setPosts(data.messages);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={styles.container}>
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
    marginLeft: "250px",
    marginTop: "87px",
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    padding: "20px",
    height: "90vh",
    fontFamily: "Outfit",
    display: "flex",
    flexDirection: "column",
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
    letterSpacing: "-1.9px", // Adjust letter spacing here
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
    paddingRight: "1px",
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
    fontSize: "36px",
    fontFamily: istokweb.style.fontFamily,
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  voteSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "right",
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
    marginBottom: "5px",
    border: "2px solid #EBEBEB",
    borderRadius: "14px",
    alignItems: "center",
    marginRight: "5px",
    marginLeft: "5px",
  },
  line: {
    backgroundColor: "#FFFFFF1A",
    padding: "1px",
    borderRadius: "2px",
    marginBottom: "2px",
  },
};

export default DiscussionRoom;
