import React from "react"
import { useState, useEffect } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import "../../css/app.css"

const center = {
  lat: 40.0776189,
  lng: -75.3021571,
}

const mapContainerStyle = {
  width: "100%",
  height: "400px",
}

const businessHours = [
  { day: "Monday", hours: "9:00 AM - 5:00 PM" },
  { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
  { day: "Friday", hours: "9:00 AM - 4:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

function App() {
  const [isHoursExpanded, setIsHoursExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isMobile) {
      setIsHoursExpanded(true)
    }
  }, [isMobile])

  return (
    <div className="section-full bg-white content-inner-2" style={{backgroundColor: 'white'}}>
      <div className="layout">
        <div className="map-section">
          <LoadScript 
            googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}
            onLoad={() => console.log("Google Maps script loaded successfully")}
            onError={(e) => console.error("Error loading Google Maps script:", e)}
          >
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="hours-section">
          <div className="hours-header">
            <h2 style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>Hours of Operation</h2>
            {!isMobile && (
              <button className="toggle-button" onClick={() => setIsHoursExpanded(!isHoursExpanded)}>
                {isHoursExpanded ? "▼" : "▲"}
              </button>
            )}
          </div>

          <div className={`hours-content ${isHoursExpanded ? "expanded" : ""}`}>
            {businessHours.map((schedule) => (
              <div key={schedule.day} className="hours-row">
                <span className="day" style={{ color: 'red' }}>{schedule.day}</span>
                <span className="time" style={{ color: 'red' }}>{schedule.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

