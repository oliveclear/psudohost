// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Cookies from "js-cookie";
// import Image from "next/image";
// import { useRouter } from "next/router"; // Make sure to import this for routing

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true); // Sidebar state for visibility
//   const [windowWidth, setWindowWidth] = useState(0);
//   // const router = useRouter();

//   // Function to handle logout
//   const handleLogout = () => {
//     Cookies.remove("token"); // Replace with your cookie name
//     router.push("/");
//     window.location.href = "/";
//   };

//   // Function to handle refresh on navigation links
//   const handleRefresh = (e, href) => {
//     e.preventDefault();
//     window.location.href = href;
//   };

//   // Function to toggle sidebar visibility
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   // Set window width on resize
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//       if (window.innerWidth > 768) {
//         setIsOpen(true); // Always show sidebar for larger screens
//       } else {
//         setIsOpen(false); // Hide sidebar by default on smaller screens
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Set initial width on component mount

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <>
//       {windowWidth < 768 && (
//         <button onClick={toggleSidebar} style={styles.toggleButton}>
//           ☰
//         </button>
//       )}
//       {isOpen && (
//         <div style={styles.sidebar}>
//           <div style={styles.logoContainer}>
//             <h1 style={styles.logo}>skincare</h1>
//           </div>
//           <nav style={styles.nav}>
//             <Link
//               href="/Landing/DashboardLog"
//               passHref
//               onClick={(e) => handleRefresh(e, "/Landing/DashboardLog")}
//               style={styles.navItem}
//             >
//               <span style={styles.icon}>
//                 <Image
//                   src="/icons kit/home.png"
//                   alt="Home Icon"
//                   width={13}
//                   height={15}
//                 />
//               </span>
//               <span style={styles.navText}>Home</span>
//             </Link>

//             <Link
//               href="/ChatBot"
//               passHref
//               onClick={(e) => handleRefresh(e, "/ChatBot")}
//               style={styles.navItem}
//             >
//               <Image
//                 src="/icons kit/ai chat.png"
//                 alt="AI Chat Icon"
//                 width={13}
//                 height={15}
//               />
//               <span style={styles.navText}>AI Chat</span>
//             </Link>

//             <Link
//               href="/BookSession"
//               passHref
//               onClick={(e) => handleRefresh(e, "/BookSession")}
//               style={styles.navItem}
//             >
//               <Image
//                 src="/icons kit/book session.png"
//                 alt="Book Session Icon"
//                 width={13}
//                 height={15}
//               />
//               <span style={styles.navText}>Book Session</span>
//             </Link>

//             <Link
//               href="/Ecommmerce/BuyProduct"
//               passHref
//               onClick={(e) => handleRefresh(e, "/Ecommmerce/BuyProduct")}
//               style={styles.navItem}
//             >
//               <span style={styles.icon}>
//                 <Image
//                   src="/icons kit/shop now.png"
//                   alt="Shop Now Icon"
//                   width={13}
//                   height={15}
//                 />
//               </span>
//               <span style={styles.navText}>Shop Now!</span>
//             </Link>

//             <Link
//               href="/ChatDoc"
//               passHref
//               onClick={(e) => handleRefresh(e, "/ChatDoc")}
//               style={styles.navItem}
//             >
//               <span style={styles.icon}>
//                 <Image
//                   src="/icons kit/shop now.png"
//                   alt="Chat with Doc Icon"
//                   width={13}
//                   height={15}
//                 />
//               </span>
//               <span style={styles.navText}>Chat with Doc</span>
//             </Link>

//             <Link
//               href="/Discussion"
//               passHref
//               onClick={(e) => handleRefresh(e, "/Discussion")}
//               style={styles.navItem}
//             >
//               <span style={styles.icon}>
//                 <Image
//                   src="/icons kit/disscusion forum.png"
//                   alt="Discussion Icon"
//                   width={13}
//                   height={15}
//                 />
//               </span>
//               <span style={styles.navText}>Discussion</span>
//             </Link>

//             <a href="#" style={styles.navItem}>
//               <span style={styles.icon}>
//                 <Image
//                   src="/icons kit/settings.png"
//                   alt="Settings Icon"
//                   width={13}
//                   height={15}
//                 />
//               </span>
//               <span style={styles.navText}>Settings</span>
//             </a>
//           </nav>

//           <div style={styles.ordersSection}>
//             <p style={styles.ordersTitle}>Last orders:</p>
//             <ul style={styles.orderList}>
//               <li style={styles.orderItem}>
//                 <span style={styles.orderIcon}>🌞</span>
//                 sunscreen spf 50+...
//               </li>
//               <li style={styles.orderItem}>
//                 <span style={styles.orderIcon}>🌙</span>
//                 retinol based face...
//               </li>
//             </ul>
//             <a href="#" style={styles.seeAllLink}>
//               See All
//             </a>
//           </div>

//           <div style={styles.logoutContainer}>
//             <Link
//               href="/"
//               passHref
//               style={styles.logoutLink}
//               onClick={handleLogout}
//             >
//               → Log Out
//             </Link>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const styles = {
//   sidebar: {
//     display: "flex",
//     height: "100vh",
//     backgroundColor: "#171717",
//     width: "250px",
//     color: "#CEDF9F",
//     flexDirection: "column",
//     padding: "20px",
//     position: "fixed",
//     top: 0,
//     left: 0,
//     zIndex: 1000,
//   },
//   toggleButton: {
//     position: "fixed",
//     top: "20px",
//     left: "20px",
//     backgroundColor: "#171717",
//     color: "#CEDF9F",
//     border: "none",
//     padding: "10px",
//     cursor: "pointer",
//     zIndex: 1100,
//   },
//   logoContainer: {
//     marginBottom: "40px",
//   },
//   logo: {
//     fontSize: "24px",
//     fontWeight: "bold",
//     color: "#ffffff",
//   },
//   nav: {
//     marginTop: "85px",
//     flexGrow: 1,
//   },
//   navItem: {
//     display: "flex",
//     alignItems: "center",
//     color: "#CEDF9F",
//     textDecoration: "none",
//     marginBottom: "20px",
//   },
//   icon: {
//     marginRight: "10px",
//   },
//   navText: {
//     fontSize: "18px",
//   },
//   ordersSection: {
//     marginTop: "auto",
//     marginBottom: "20px",
//   },
//   ordersTitle: {
//     marginBottom: "10px",
//     color: "#CEDF9F",
//     fontSize: "14px",
//   },
//   orderList: {
//     listStyle: "none",
//     padding: "0",
//     margin: "0",
//   },
//   orderItem: {
//     marginBottom: "10px",
//     color: "#ffffff",
//   },
//   orderIcon: {
//     marginRight: "10px",
//   },
//   seeAllLink: {
//     color: "#CEDF9F",
//     fontSize: "14px",
//     textDecoration: "none",
//   },
//   logoutContainer: {
//     marginTop: "20px",
//   },
//   logoutLink: {
//     color: "#FF4C4C",
//     textDecoration: "none",
//     fontSize: "16px",
//   },
// };

// export default Sidebar;


import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import Image from "next/image";

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
          ☰ SkinKare
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
          <Link
            href="/Landing/DashboardLog"
            passHref
            style={styles.navItem}
          >
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
          <Link
            href="/ChatBot"
            passHref
            style={styles.navItem}
          >
            <Image
              src="/icons kit/ai chat.png"
              alt="Chat Icon"
              width={13}
              height={15}
            />
            <span style={styles.navText}>AI Chat</span>
          </Link>
          <Link
            href="/BookSession"
            passHref
            style={styles.navItem}
          >
            <Image
              src="/icons kit/book session.png"
              alt="Book Session Icon"
              width={13}
              height={15}
            />
            <span style={styles.navText}>Book Session</span>
          </Link>

          <Link
            href="/Ecommmerce/BuyProduct"
            passHref
            style={styles.navItem}
          >
            <Image
              src="/icons kit/shop now.png"
              alt="Shop Icon"
              width={13}
              height={15}
            />
            <span style={styles.navText}>Shop Now!</span>
          </Link>
          <Link
            href="/ChatDoc"
            passHref
            style={styles.navItem}
          >
            <Image
              src="/icons kit/shop now.png"
              alt="Chat Doc Icon"
              width={13}
              height={15}
            />
            <span style={styles.navText}>Chat with Doc</span>
          </Link>
          <Link
            href="/Discussion"
            passHref
            style={styles.navItem}
          >
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
    backgroundColor: "#171717",
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
    background: "#171717",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    position: "fixed",
    // left: "10px",
    // top: "10px",
    zIndex: 1000,
    width: "140px",
    height: "84px",
    fontSize: "21px",
    fontWeight: "bold",
    color: "#ffffff",
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
