"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie"; // Import js-cookie
const token = Cookies.get("token");

const CameraCapture = () => {
  const [image, setImage] = useState(null);
  const [skinType, setSkinType] = useState(null); // State for major skin type
  const [skinTypes, setSkinTypes] = useState([]); // State for skin type percentages
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Start the camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  // Capture the image from the camera
  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (videoRef.current && videoRef.current.readyState === 4) {
      // Ensure video is ready
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataURL = canvas.toDataURL("image/jpeg");
      setImage(dataURL);
      sendImageToBackend(dataURL);
    } else {
      console.error("Video not ready for capture");
    }
  };

  // Handle image file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataURL = reader.result;
        setImage(dataURL);
        sendImageToBackend(dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  // Send image to backend
  const sendImageToBackend = async (dataURL) => {
    try {
      // Convert dataURL to a Blob
      const response = await fetch(dataURL);
      const blob = await response.blob();

      // Create FormData and append the Blob as 'image'
      const formData = new FormData();
      formData.append("image", blob, "image.jpg");

      const responseBackend = await fetch(
        `${process.env.NEXT_PUBLIC_URL_HOST}/aiface/image`,
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`, // Send token in the headers
            // "Content-Type": "application/json",
          },
          credentials: "include",
          body: formData,
        }
      );

      const result = await responseBackend.json();
      console.log(result);

      // Handle successful response
      if (responseBackend.ok) {
        setSkinType(result.majorType); // Set major skin type
        setSkinTypes(result.skinTypes); // Set skin types array with percentages
        setImage(null); // Clear the image preview
      } else {
        console.error("Error uploading image:", result);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // Handle link click to start camera and capture image
  const handleCapture = async (e) => {
    e.preventDefault();
    await startCamera();
    setTimeout(captureImage, 3000); // Capture image after a short delay (e.g., 3 seconds)
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Change to flex-start for top alignment
        alignItems: "center",
        marginLeft: "250px",
        minHeight: "100vh", // Set minHeight instead of height
        backgroundColor: "#121212",
        marginTop: "88px",
        color: "#EAEAEA",
        fontFamily: "Arial, sans-serif",
        overflowY: "auto", // Allow content to scroll vertically
      }}
    >
      {/* Disclaimer */}
      <p
        style={{
          backgroundColor: "#1e1e1e",
          color: "#BFD16D",
          padding: "10px",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          width: "80%",
          maxWidth: "600px",
          marginBottom: "20px",
        }}
      >
        Disclaimer: The image you provide is used solely for analysis and is not
        being saved.
      </p>

      <div
        style={{
          backgroundColor: "#1e1e1e",
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
          width: "80%",
          maxWidth: "600px",
        }}
      >
        <h2
          style={{
            color: "#EBEBEB",
            fontFamily: "Outfit, sans-serif",
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "39px",
            letterSpacing: "-1.6px",
            marginBottom: "20px",
          }}
        >
          detect your skin type
        </h2>
        <div
          style={{
            backgroundColor: "#333",
            height: "auto", // Set to auto for dynamic content
            minHeight: "300px", // Minimum height to ensure space for video or image
            borderRadius: "20px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {image ? (
            <img
              src={image}
              alt="Captured or Uploaded"
              style={{ width: "100%", borderRadius: "20px", height: "auto" }} // Set height to auto for responsiveness
            />
          ) : (
            <video
              ref={videoRef}
              style={{
                display: image ? "none" : "block",
                width: "100%",
                height: "100%", // Ensure video fills the container
                borderRadius: "20px",
              }}
            />
          )}
          <canvas
            ref={canvasRef}
            width="640"
            height="480"
            style={{ display: "none" }}
          />
        </div>

        {/* Capture and Recapture Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            onClick={handleCapture}
            style={{
              backgroundColor: "#BFD16D",
              border: "none",
              borderRadius: "20px",
              padding: "10px 20px",
              cursor: "pointer",
              fontSize: "16px",
              color: "#000",
            }}
          >
            capture
          </button>
          <button
            onClick={() => setImage(null)}
            style={{
              backgroundColor: "#BFD16D",
              border: "none",
              borderRadius: "20px",
              padding: "10px 20px",
              cursor: "pointer",
              fontSize: "16px",
              color: "#000",
            }}
          >
            recapture
          </button>
        </div>

        {/* Skin Type and Chart */}
        {skinType && (
          <>
            <h3
              style={{
                marginTop: "40px",
                color: "#BFD16D",
                fontSize: "24px",
              }}
            >
              your skin type is{" "}
              <span style={{ fontWeight: "bold" }}>{skinType}</span>
            </h3>

            <div style={{ marginTop: "20px" }}>
              {skinTypes.map((type, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "5px",
                      fontSize: "18px",
                    }}
                  >
                    <span>{type.class}</span>
                    <span>{(type.score * 100).toFixed(2)}%</span>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#444",
                      borderRadius: "10px",
                      height: "20px",
                      width: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        backgroundColor: "#BFD16D",
                        width: `${(type.score * 100).toFixed(2)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Conditionally render the button if skinType is present */}
      {skinType && (
        <Link href="/Ecommmerce/BuyProduct" passHref>
          <button
            style={{
              backgroundColor: "#BFD16D",
              border: "none",
              borderRadius: "20px",
              padding: "10px 20px",
              cursor: "pointer",
              fontSize: "16px",
              color: "#000",
              marginTop: "20px",
            }}
          >
            view suggested products
          </button>
        </Link>
      )}
    </div>
  );
};

export default CameraCapture;
