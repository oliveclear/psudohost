"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie"; // Import js-cookie
const token = Cookies.get("token");


export default function AddToCart() {
  const [cartItems, setCartItems] = useState([]); // Store cart items
  const [quantities, setQuantities] = useState([]); // Store quantities

  // Fetch cart data on component mount
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_HOST}/cart`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Authorization":`Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Cart Data:", data); // Log the response
        setCartItems(data.products); // Set cart items to fetched data
        setQuantities(data.products.map((item) => item.quantity)); // Initialize quantities
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  const handleQuantityChange = (index, amount) => {
    setQuantities((prev) => {
      const newQuantities = [...prev];
      newQuantities[index] = Math.max(newQuantities[index] + amount, 1); // Minimum 1
      return newQuantities;
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item, index) => {
      return total + (quantities[index] * (item.price || 0)); // Fallback to 0 if price is undefined
    }, 0);
    // return 6000;
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#212121",
        color: "#fff",
        padding: "20px",
        marginLeft: "250px",
        marginTop: "88px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h2
            style={{
              fontSize: "24px",
              color: "#EBEBEB7A",
              fontWeight: "400",
              marginBottom: "10px",
            }}
          >
            Subtotal{" "}
            <span style={{ fontWeight: "700" }}> ₹{getTotalPrice()}</span>
          </h2>
        </div>

        <button
          style={{
            backgroundColor: "#435940",
            color: "#fff",
            padding: "15px 30px",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            borderRadius: "9px",
            width: "180px",
            height: "53px",
            boxShadow: "4px 4px 11.6px #00000033 inset",
            color: "#CEDF9F",
            fontFamily: "Outfit",
            fontWeight: "900",
            // marginTop: "20px",
          }}
        >
          CHECKOUT
        </button>
      </div>
      <p style={{ color: "#EBEBEB7A", fontSize: "15px" }}>
        Checkout with your saved items in cart...
      </p>
      {cartItems.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            marginTop: "60px",
          }}
        >
          <img
            src={item.imageURL} // Use the image URL from the product data
            alt={item.title} // Use the title from the product data
            style={{
              width: "80px",
              marginRight: "20px",
              boxShadow: "6px 4px 12.7px #10101040 inset",
              borderRadius: "9px",
            }}
          />
          <div style={{ flex: 1, color: "#EBEBEB7A" }}>
            <h3>{item.title}</h3>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <span style={{ color: "#CEDF9F6B" }}>
                ⭐⭐⭐⭐⭐ 1,101 Reviews
              </span> */}
            </div>
            <p>Price: ₹{item.price}</p> {/* Display product price */}
          </div>
          <div
            style={{
              backgroundColor: "#333333",
              border: "2px solid #333333",
              width: "110px",
              height: "39px",
              borderRadius: "9px",
              boxShadow: "4px 4px 11.6px #00000033 inset",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <button
                onClick={() => handleQuantityChange(index, -1)}
                style={{
                  backgroundColor: "#333",
                  color: "#EBEBEB5C",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "19px",
                }}
              >
                -
              </button>
              <span
                style={{
                  margin: "9px 10px",
                  marginRight: "25px",
                  marginLeft: "20px",
                  color: "#EBEBEB9C",
                }}
              >
                {quantities[index]}
              </span>
              <button
                onClick={() => handleQuantityChange(index, 1)}
                style={{
                  backgroundColor: "#333",
                  color: "#EBEBEB5C",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "19px",
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
      <div
        style={{
          width: "1220px",
          height: "1px",
          backgroundColor: "#EBEBEB2E",
        }}
      />
    </div>
  );
}
