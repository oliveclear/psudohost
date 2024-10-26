"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; 

const LoginPage = () => {
  const [loginField, setLoginField] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_HOST}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loginField, password }),
      });

      const result = await response.json();

      if (response.ok) {
        // Store token in cookies using js-cookie
        Cookies.set("token", result.token, { expires: 7 }); // 7 days expiration
        console.log;

        // Redirect to the dashboard or desired page
        router.push("/");
        window.location.href = "/";
        router.refresh();
      } else {
        // Handle error response
        setError(result.message || "Login failed, please try again.");
      }
    } catch (error) {
      // Catch and handle any other errors
      setError("An unexpected error occurred. Please try again.");
      console.error("Error during login:", error);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>skincare</h1>
      </header>
      <h2 style={styles.loginTitle}>Login</h2>
      <div style={styles.loginBox}>
        <form style={styles.contain} onSubmit={handleLogin}>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="username">
              Username / Email / Phone
            </label>
            <input
              type="text"
              id="username"
              name="loginField"
              placeholder="Enter your username / email / phone"
              style={styles.input}
              value={loginField}
              onChange={(e) => setLoginField(e.target.value)}
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="password">
              Password
            </label>
            <a href="#" style={styles.forgotLink}>
              Forgot?
            </a>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <div style={styles.loginButtonDiv}>
            <button type="submit" style={styles.loginButton}>
              Login
            </button>
            <p style={styles.signupText}>
              If you are not registered{""}
              <a href="/register" style={styles.signupLink}>
                  Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  contain: {
    display: "flex",
    position: "relative",
    top: "70px",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#222222",
    color: "#ffffff",
  },
  header: {
    position: "absolute",
    top: "20px",
    left: "20px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ffffff",
  },
  loginBox: {
    width: "672px",
    height: "669px",
    borderRadius: "85px",
    border: "12px solid rgba(227, 227, 227, 0.40)",
    background: "rgba(255, 255, 255, 0.20)",
    backdropFilter: "blur(5.85px)",
  },
  loginTitle: {
    color: "#FFF",
    fontSize: "96px",
    fontWeight: 900,
    letterSpacing: "-5.76px",
  },
  inputContainer: {
    marginBottom: "20px",
    position: "relative",
  },
  label: {
    marginLeft: "30px",
    marginTop: "40px",
    color: "#FFF",
    fontSize: "36px",
    fontWeight: 600,
    letterSpacing: "-1.44px",
  },
  input: {
    marginLeft: "30px",
    marginTop: "5px",
    padding: "10px",
    borderRadius: "23px",
    border: "3px solid rgba(255, 255, 255, 0.40)",
    background: "rgba(255, 255, 255, 0.20)",
    backdropFilter: "blur(5.85px)",
    width: "570px",
    height: "66px",
  },
  forgotLink: {
    position: "relative",
    left: "250px",
    // top: "45%",
    fontSize: "20px",
    color: "#C3C4A9",
    textDecoration: "none",
  },
  loginButtonDiv: {
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    padding: "10px 0",
    borderRadius: "56px",
    border: "3px solid #CEDF9F",
    background: "#181818",
    width: "226px",
    height: "74px",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: "10px",
  },
  signupText: {
    marginTop: "20px",
    display: "flex",
    // flexDirection: "column",
    fontSize: "14px",
  },
  signupLink: {
    color: "#C3C4A9",
    textDecoration: "none",
  },
};

export default LoginPage;
