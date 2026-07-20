import { useState, useEffect } from "react";

const MobileGuard = ({ children }) => {
  // Check if screen is wider than 768px (standard tablet/mobile breakpoint)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    // This function runs every time the window is resized
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup listener to prevent memory leaks
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // If it's a desktop, show the exact screen from your image
  if (isDesktop) {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#ffffff", // Pure white background
        color: "#000000",           // Pure black text
        textAlign: "center",
        padding: "20px",
        boxSizing: "border-box"
      }}>
        <h1 style={{
          fontFamily: '"Times New Roman", Georgia, serif', // Matches the font in your image
          fontSize: "2.5rem",
          fontWeight: "bold",
          lineHeight: "1.4",
          maxWidth: "800px"
        }}>
          Please open this link in Mobile Or Tablet to View the website.
        </h1>
      </div>
    );
  }

  // If it's a mobile device, show the actual website
  return children;
};

export default MobileGuard;