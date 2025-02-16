import React, { useState, useEffect } from "react";
import "../../css/app.css";

const businessHours = [
  { day: "Monday", hours: "9:00 AM - 5:00 PM" },
  { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
  { day: "Friday", hours: "9:00 AM - 4:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

function App() {
  const [isHoursExpanded, setIsHoursExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsHoursExpanded(true);
    }
  }, [isMobile]);

  return (
    <div className="section-full bg-white content-inner-2" style={{ backgroundColor: "white" }}>
      <div className="layout" style={{ 
        maxWidth: "82rem",
        margin: "0 auto",
        padding: "0 1rem"
      }}>
        {/* Map Section */}
        <div className="map-section">
          <EmbeddedMap />
        </div>
        
        {/* Hours Section */}
        <div className="hours-section">
          <div className="hours-header" style={{ width: "100%" }}>
            <h2 style={{ 
              color: "red", 
              textAlign: "center", 
              marginBottom: "1rem",
              textTransform: "uppercase",
              width: "100%",
              paddingTop: "0.5rem"
            }}>
              HOURS OF OPERATION
            </h2>
            {!isMobile && (
              <button className="toggle-button" onClick={() => setIsHoursExpanded(!isHoursExpanded)}>
                {isHoursExpanded ? "▼" : "▲"}
              </button>
            )}
          </div>
          <div className={`hours-content ${isHoursExpanded ? "expanded" : ""}`}>
            {businessHours.map((schedule) => (
              <div key={schedule.day} className="hours-row">
                <span className="day" style={{ color: "red" }}>{schedule.day}</span>
                <span className="time" style={{ color: "red" }}>{schedule.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

function EmbeddedMap() {
  // Your business place ID
  const placeId = "ChIJiZi4DF6-xokRIouXKdqDT-Q";
  // Build the embed URL
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_API_KEY}&q=place_id:${placeId}`;

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        title="Business Location"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={googleMapsEmbedUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
}
