import React, { useState, useEffect, useCallback } from "react";

const AdSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const adCards = [
    { id: 1, gradient: "linear-gradient(135deg, #FF8C00, #FFA500)" },
    { id: 2, gradient: "linear-gradient(135deg, #FF1B6B, #FF930F)" },
    { id: 3, gradient: "linear-gradient(135deg, #FF6B6B, #FF3366)" },
    { id: 4, gradient: "linear-gradient(135deg, #E040FB, #9C27B0)" },
    { id: 5, gradient: "linear-gradient(135deg, #4169E1, #0000FF)" },
  ];

  const styles = {
    mainContainer: {
      backgroundColor: "#000",
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      position: "relative",
      marginTop: "300px",
    },
    carouselContainer: {
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      position: "absolute",
      width: "500px",
      height: "600px",
      padding: "40px",
      borderRadius: "20px",
      color: "white",
      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start", 
      alignItems: "center", 
      textAlign: "center", 
      paddingTop: "50px", 
    },
    
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      lineHeight: "1.2",
      marginBottom: "20px",
      fontFamily: "Arial, sans-serif",
    },
    description: {
      fontSize: "1.1rem",
      lineHeight: "1.6",
      opacity: "0.9",
      textAlign: "center",
      paddingTop: "50px", 
    },    
    controls: {
      position: "absolute",
      bottom: "40px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "12px",
      zIndex: 100,
    },
    dot: {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      cursor: "pointer",
      transition: "all 0.3s ease",
      border: "none",
      padding: 0,
    },
    activeDot: {
      backgroundColor: "white",
      transform: "scale(1.2)",
    },
  };

  const calculateCardStyles = (index) => {
    const totalCards = adCards.length;
    let diff = index - activeIndex;

    if (diff > totalCards / 2) diff -= totalCards;
    if (diff < -totalCards / 2) diff += totalCards;

    let translateX = 0;
    let translateZ = 0;
    let opacity = 1;
    let scale = 1;
    let zIndex = 5;

    if (diff !== 0) {
      translateX = 120 * diff;
      translateZ = -100 * diff;
      scale = Math.max(0.7, 1 - Math.abs(diff) * 0.15);
      opacity = Math.max(0.5, 1 - Math.abs(diff) * 0.2);
      zIndex = 5 - Math.abs(diff);
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  const handleCardClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % adCards.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, adCards.length]);

  // Keyboard navigation
  const handleKeyDown = useCallback((event) => {
    if (event.key === "ArrowRight") {
      setActiveIndex((prev) => (prev + 1) % adCards.length);
    } else if (event.key === "ArrowLeft") {
      setActiveIndex((prev) => (prev - 1 + adCards.length) % adCards.length);
    }
  }, [adCards.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      style={styles.mainContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div style={styles.carouselContainer}>
        {adCards.map((card, index) => (
          <div
            key={card.id}
            style={{
              ...styles.card,
              ...calculateCardStyles(index),
              background: card.gradient,
            }}
            onClick={() => handleCardClick(index)}
            role="button"
            tabIndex="0"
            onKeyPress={(e) => e.key === "Enter" && handleCardClick(index)}
          >
            <div style={styles.title}>
              Explore what's possible with{" "}
              <span style={{ fontWeight: "800", color: "#4169E1" }}>
                Spreads
              </span>{" "}
              ads
            </div>
            <div style={styles.description}>
              The cost to advertise is up to you. Select a budget that fits your
              business goals and update it at any time.
            </div>
          </div>
        ))}
      </div>
      <div style={styles.controls}>
        {adCards.map((_, index) => (
          <button
            key={index}
            style={{
              ...styles.dot,
              ...(activeIndex === index ? styles.activeDot : {}),
            }}
            onClick={() => handleCardClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdSection;
