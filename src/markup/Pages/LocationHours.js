import React, { useState, useEffect } from "react";
import "../../css/app.css";

function LocationHours() {
  // Update the hours array to match the new schedule
  const hours = [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday', time: '11:00 AM - 3:00 PM' },
    { day: 'Wednesday', time: '11:00 AM - 9:00 PM' },
    { day: 'Thursday', time: '11:00 AM - 9:00 PM' },
    { day: 'Friday', time: '11:00 AM - 9:00 PM' },
    { day: 'Saturday', time: '11:00 AM - 9:00 PM' },
    { day: 'Sunday', time: '11:00 AM - 4:00 PM' },
  ];

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
            {hours.map((schedule) => (
              <div key={schedule.day} className="hours-row">
                <span className="day" style={{ color: "red" }}>{schedule.day}</span>
                <span className="time" style={{ color: "red" }}>{schedule.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationHours;

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
