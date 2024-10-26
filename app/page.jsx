"use client";

import React, { useState, useEffect } from "react";
import LandingPage from "./Landing/LandingPage";
import Dashboard1 from "./Landing/Dashboard1";
import DashboardLog from "./Landing/DashboardLog/page";
import Dashboard2 from "./Landing/Dashboard2";
import Dashboard3 from "./Landing/Dashboard3";
import Dashboard4 from "./Landing/Dashboard4";
import Dashboard5 from "./Landing/Dashboard5";
import FaceScan from "./FaceScan/page";
import Layout from "./layout";
import ChatBot from "./ChatBot/page";
import Form from "./Form/page";
import PreFooter from "./PreFooter/page"
import Footer from "./Footer/page"
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // Import js-cookie
const token = Cookies.get("token");
import Chart from "./Chart/page"
import Meeting from "./Meeting/page"




const Page = () => {
  // const isLoggedIn = false
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(null); // Initial state is null for loading

  useEffect(() => {
    // Simulate fetching login status
    const checkLoginStatus = async () => {
      if(token){
        setIsLoggedIn(true)
      }
      else
      {
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);
  // Show a loading state while checking login status
  // if (isLoggedIn === false) {
  //   return <div>Loading...</div>; // Show loading while checking auth
  // }

  return (
    <>
      {/* <AuthProvider> */}
      {isLoggedIn ? (
        <Layout>
          <DashboardLog />
        </Layout>
      ) : (
        <div style={styles.container}>
          <LandingPage />
          <Dashboard1 />
          <Dashboard2 />
          <Dashboard3 />
          <Dashboard4 />
          <Dashboard5 />
          <PreFooter />
          <Footer/>
          {/* <FaceScan /> */}
          {/* <Form/> */}
          {/* <Chart /> */}
          {/* <Meeting /> */}
          {/* <ChatBot /> */}
        </div>
      )}
      {/* </AuthProvider> */}
    </>
  );
};

const styles = {
  container: {
    height: "100vh", 
    overflowY: "auto", 
  },
};

export default Page;


