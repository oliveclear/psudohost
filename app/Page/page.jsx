// "use client";

// import React, { useState, useEffect } from "react";
// import LandingPage from "../Landing/LandingPage";
// import Dashboard1 from "../Landing/Dashboard1";
// import DashboardLog from "../Landing/DashboardLog";
// import Dashboard2 from "../Landing/Dashboard2";
// import Dashboard3 from "../Landing/Dashboard3";
// import Layout from "../layout";
// import { useRouter } from "next/navigation";
// import { AuthProvider } from "../context/AuthContext";

// const Page = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true); // `null` for loading state
//   const router = useRouter();

//   // Fetch login status from backend (use actual API or authentication check)
//   // useEffect(() => {
//   //   const checkLoginStatus = async () => {
//   //     try {
//   //       const response = await fetch(""); // API to check session
//   //       const data = await response.json();

//   //       if (data.isAuthenticated) {
//   //         setIsLoggedIn(true); // User is logged in
//   //       } else {
//   //         setIsLoggedIn(false); // User is not logged in
//   //         router.push("/login"); // Redirect to login if not authenticated
//   //       }
//   //     } catch (error) {
//   //       console.error("Error checking login status:", error);
//   //       setIsLoggedIn(false);
//   //       router.push("/login"); // Redirect to login on error
//   //     }
//   //   };

//   //   checkLoginStatus();
//   // }, [router]);

//   // Show a loading state while checking login status
//   if (isLoggedIn === null) {
//     return <div>Loading...</div>; // Show loading while checking auth
//   }

//   return (
//     <>
//       <AuthProvider>
//         {isLoggedIn ? (
//           <Layout>
//             <DashboardLog />
//           </Layout>
//         ) : (
//           <>
//             <LandingPage />
//             <Dashboard1 />
//             <Dashboard2 />
//             <Dashboard3 />
//           </>
//         )}
//       </AuthProvider>
//     </>
//   );
// };

// export default Page;

// "use client";

// import React, { useState, useEffect } from "react";
// import LandingPage from "../Landing/LandingPage";
// import Dashboard1 from "../Landing/Dashboard1";
// import DashboardLog from "../Landing/DashboardLog";
// import Dashboard2 from "../Landing/Dashboard2";
// import Dashboard3 from "../Landing/Dashboard3";
// import Layout from "../layout";
// import ProductDetail from "./ProductDetail/ProductDetail";
// import DoctorConsultation from "./DoctorConsultation/page";
// import DiscussionRoom from "./Discussion/page";
// import BookSession from "./BookSession/page";
// import Confirmation from "./Confirmation/Confirmation";
// import AddToCart from "./Ecommmerce/AddToCart";
// import { useRouter } from "next/navigation";
// import Header from "./Layout/Header";
// import Sidebar from "./Layout/Sidebar";

// const Page = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(null); // `null` for loading state
//   const [hasReloaded, setHasReloaded] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const handleMouseEnter = () => {
//       if (!hasReloaded) {
//         setHasReloaded(true);
//         window.location.reload();
//       }
//     };

//     if (isLoggedIn === null) return; // Wait until isLoggedIn state is determined

//     if (isLoggedIn) {
//       document.addEventListener('mouseenter', handleMouseEnter);

//       // Cleanup the event listener on component unmount
//       return () => document.removeEventListener('mouseenter', handleMouseEnter);
//     }
//   }, [isLoggedIn, hasReloaded]);

//   // Show a loading state while checking login status
//   if (isLoggedIn === false) {
//     return <div>Loading...</div>; // Show loading while checking auth
//   }

//   return (
//     <>
//       {/* <AuthProvider> */}
//       {isLoggedIn ? (
//         <Layout>
//           <DashboardLog />
//         </Layout>
//       ) : (
//         <div style={styles.container}>
//           <LandingPage />
//           <Dashboard1 />
//           <Dashboard2 />
//           <Dashboard3 />
//           {/* <ProductDetail /> */}
//           {/* <DoctorConsultation /> */}
//           {/* <DiscussionRoom /> */}
//           {/* <Sidebar></Sidebar> */}
//            {/* <Confirmation /> */}
//           {/* <BookSession /> */}
//           {/* <AddToCart /> */}
//         </div>
//       )}
//       {/* </AuthProvider> */}
//     </>
//   );
// };

// const styles = {
//   container: {
//     height: "100vh", 
//     overflowY: "auto", 
//   },
// };

// export default Page;

