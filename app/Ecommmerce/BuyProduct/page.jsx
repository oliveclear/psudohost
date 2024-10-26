"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const BuyProduct = () => {
  const [products, setProducts] = useState([]);
  const [skinTypeFilter, setSkinTypeFilter] = useState("");
  const router = useRouter(); // Initialize the router

  // Function to fetch products
  const fetchProducts = async (filter = "") => {
    try {
      let url = `${process.env.NEXT_PUBLIC_URL_HOST}/products`;
      if (filter) {
        url += `?skintypefor=${filter}`; // Add filter to query if provided
      }
      const response = await fetch(url, {
        credentials: "include", // Include credentials (cookies, etc.) in the request
      });

      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    // Fetch products on component mount
    fetchProducts();
  }, []);

  useEffect(() => {
    // Fetch products based on filter change
    fetchProducts(skinTypeFilter);
  }, [skinTypeFilter]);

  // Handle skin type filter change
  const handleSkinTypeChange = (e) => {
    setSkinTypeFilter(e.target.value);
  };

  // Function to handle product detail navigation
  const viewProductDetails = (id) => {
    router.push(`/ProductDetail/${id}`); // Navigate to the product detail page
  };

  return (
    <div style={styles.dashboardContainer}>
      <div style={styles.mainContent}>
        <div style={styles.midImg}>
          <Image
            src="/icons kit/bgimage.png"
            alt="Rain Drops"
            width={1603}
            height={464}
            style={styles.image}
          />
        </div>
        {/* Scrollable grid section */}
        <div style={styles.gridWrapper}>
          <h1 style={styles.title}>Our Best Sellers</h1>
          
          <h2 style={{color: "white"}}>Filter by Skin Type</h2>
          <select value={skinTypeFilter} onChange={handleSkinTypeChange}>
          <option value="">All</option>
            <option value="">Normal</option>
            <option value="oily">Oily</option>
            <option value="dry">Dry</option>
          </select>
          <div style={styles.gridContainer}>
            {products.map((product) => (
              <div key={product._id} style={styles.gridItem}>
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={300}
                  height={400}
                  style={styles.productImage}
                />
                <div style={styles.productDetails}>
                  <h2>{product.title}</h2>
                  <p>
                    <strong>Skin Type:</strong> {product.skintypefor}
                  </p>
                  <div style={styles.price}>
                    <span>₹ {product.price}</span>
                  </div>
                  <div style={styles.buttons}>
                    <button
                      style={styles.viewButton}
                      onClick={() => viewProductDetails(product._id)} // Navigate to the product detail page
                    >
                      VIEW
                    </button>
                    <button style={styles.addToCartButton}>ADD TO CART</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#1C1C1C",
  },
  mainContent: {
    flex: 1,
    marginLeft: "250px",
    overflowY: "auto",
  },
  midImg: {
    marginTop: "100px",
    borderRadius: "10px",
  },
  image: {
    borderRadius: "10px",
  },
  gridWrapper: {
    padding: "30px 10px 10px",
    // display: "flex",
  },
  title: {
    color: "#EBEBEB",
    fontFamily: "Outfit, sans-serif",
    fontSize: "39px",
    fontWeight: 700,
    paddingLeft: "20px",
    letterSpacing: "-2.73px",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "20px",
    padding: "20px",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#2E2E2E",
    color: "#CEDF9F",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    height: "100%",
  },
  productImage: {
    objectFit: "cover",
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    height: "250px",
    marginBottom: "10px",
  },
  productDetails: {
    marginTop: "20px",
    color: "#EBEBEB",
    fontSize: "17px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  price: {
    fontSize: "18px",
    marginBottom: "16px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
  viewButton: {
    backgroundColor: "#CEDF9F",
    color: "#435940",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: "900",
  },
  addToCartButton: {
    backgroundColor: "#435940",
    color: "#CEDF9F",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: "900",
  },
};

export default BuyProduct;

// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// const BuyProduct = () => {
//   const [products, setProducts] = useState([]);

//   const [skinTypeFilter, setSkinTypeFilter] = useState(""); // For filtering skin type

//   // Fetch product data with optional skin type filter
//   const fetchProducts = async (filter = "") => {
//     try {
//       let url = "http://localhost:8001/products";
//       if (filter) {
//         url += `?skintypefor=${filter}`; // Add filter to query if provided
//       }
//       const response = await fetch(url);
//       const data = await response.json();
//       setProducts(data.products);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts(skinTypeFilter); // Fetch products based on filter
//   }, [skinTypeFilter]);

//   const handleSkinTypeChange = (e) => {
//     setSkinTypeFilter(e.target.value); // Set filter to selected value
//   };

//   return (
//     <div style={styles.dashboardContainer}>
//       <div style={styles.mainContent}>
//         <div style={styles.midImg}>
//           <Image
//             src="/icons kit/bgimage.png"
//             alt="Rain Drops"
//             width={1603}
//             height={464}
//             style={styles.image}
//           />
//         </div>

//         {/* Scrollable grid section */}
//         <div style={styles.gridWrapper}>
//           <h1 style={styles.title}>Our Best Sellers</h1>
//           {/* Filter section */}
//             <h2>Filter by Skin Type</h2>
//             <select
//               value={skinTypeFilter}
//               onChange={handleSkinTypeChange}
//             >
//               <option value="">Normal</option>
//               <option value="oily">Oily</option>
//               <option value="dry">Dry</option>
//             </select>
//           <div style={styles.gridContainer}>
//             {products.map((product) => (
//               <div key={product.id} style={styles.gridItem}>
//                 <Image
//                   src={product.imageUrl}
//                   alt={product.title}
//                   width={300}
//                   height={400}
//                   style={styles.productImage}
//                 />
//                 <div style={styles.productDetails}>
//                   <h2>{product.title}</h2>
//                   <p>
//                     <strong>Skin Type:</strong> {product.skintypefor}
//                   </p>
//                   <div style={styles.price}>
//                     <span>₹ {product.price}</span>
//                   </div>
//                   <div style={styles.buttons}>
//                     <button style={styles.viewButton}>VIEW</button>
//                     <button style={styles.addToCartButton}>ADD TO CART</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   dashboardContainer: {
//     display: "flex",
//     height: "100vh",
//     backgroundColor: "#1C1C1C",
//   },
//   filterSection: {
//     width: "250px",
//     padding: "20px",
//     backgroundColor: "#2E2E2E",
//     color: "#CEDF9F",
//   },
//   filterTitle: {
//     fontSize: "20px",
//     marginBottom: "10px",
//   },
//   filterSelect: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#435940",
//     color: "#CEDF9F",
//     border: "none",
//     cursor: "pointer",
//   },
//   mainContent: {
//     flex: 1,
//     marginLeft: "10px",
//     overflowY: "auto",
//   },
//   midImg: {
//     marginTop: "100px",
//     borderRadius: "10px",
//   },
//   image: {
//     borderRadius: "10px",
//   },
//   gridWrapper: {
//     padding: "30px 10px 10px",
//     marginLeft: "250px",
//   },
//   title: {
//     color: "#EBEBEB",
//     fontFamily: "Outfit, sans-serif",
//     fontSize: "39px",
//     fontWeight: 700,
//     paddingLeft: "20px",
//     letterSpacing: "-2.73px",
//   },
//   gridContainer: {
//     display: "grid",
//     gridTemplateColumns: "repeat(4, 1fr)",
//     gridGap: "20px",
//     padding: "20px",
//   },
//   gridItem: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     backgroundColor: "#2E2E2E",
//     color: "#CEDF9F",
//     padding: "20px",
//     borderRadius: "10px",
//     textAlign: "center",
//     height: "100%",
//   },
//   productImage: {
//     objectFit: "cover",
//     width: "100%",
//     height: "auto",
//     borderRadius: "10px",
//     height: "250px",
//     marginBottom: "10px",
//   },
//   productDetails: {
//     marginTop: "20px",
//     color: "#EBEBEB",
//     fontSize: "17px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     flexGrow: 1,
//   },
//   price: {
//     fontSize: "18px",
//     marginBottom: "16px",
//   },
//   buttons: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   viewButton: {
//     backgroundColor: "#CEDF9F",
//     color: "#435940",
//     border: "none",
//     padding: "10px 20px",
//     cursor: "pointer",
//     fontWeight: "900",
//   },
//   addToCartButton: {
//     backgroundColor: "#435940",
//     color: "#CEDF9F",
//     border: "none",
//     padding: "10px 20px",
//     cursor: "pointer",
//     fontWeight: "900",
//   },
// };

// export default BuyProduct;
