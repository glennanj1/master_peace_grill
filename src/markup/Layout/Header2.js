import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../../images/mpglogo2.png";
// import hours from './../../images/icons/hours.png'

class Header2 extends Component {
  state = {
    isMobileHoursOpen: false,
    isScrolled: false,
    isMobile: window.innerWidth <= 768,
    isNavOpen: false, // <-- New state to track mobile menu open
    showHoursPopup: false
  };

  // Update isMobile state on resize
  handleResize = () => {
    this.setState({ isMobile: window.innerWidth <= 768 });
  };

  // If on mobile, mark as scrolled if window is scrolled down
  handleScroll = () => {
    this.setState({ isScrolled: window.scrollY > 0 });
  };

  componentDidMount() {
    const hasSeenPopup = localStorage.getItem('hoursPopupSeen');
    if (!hasSeenPopup) {
      this.setState({ showHoursPopup: true });
      localStorage.setItem('hoursPopupSeen', 'true');
    }
    // Existing componentDidMount code for other listeners...
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  }

  // New toggle function for mobile menu
  toggleNav = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  };

  render() {
    const businessHours = [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "11:00 AM - 3:00 PM" },
      { day: "Wednesday", hours: "11:00 AM - 9:00 PM" },
      { day: "Thursday", hours: "11:00 AM - 9:00 PM" },
      { day: "Friday", hours: "11:00 AM - 9:00 PM" },
      { day: "Saturday", hours: "11:00 AM - 9:00 PM" },
      { day: "Sunday", hours: "11:00 AM - 4:00 PM" }
    ];

    return (
      <>
        <header className="site-header mo-left header header-transparent pizza-header">
          <div
            className="sticky-header main-bar-wraper navbar-expand-lg"
            style={{
              backgroundColor: this.state.isScrolled 
                ? (this.state.isMobile ? 'white' : 'red') 
                : 'white',
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 1000,
              transition: 'background-color 0.3s ease',
            }}
          >
            <div className="main-bar clearfix ">
              <div className="container clearfix" style={{ 
                padding: this.state.isMobile ? 0 : 'inherit',
				paddingLeft: this.state.isMobile ? 0 : '10px',
				paddingRight: this.state.isMobile ? 0 : '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                {/* Logo Section */}
                <div className="logo-header" style={{ 
                  flex: '0 0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  height: '65px'
                }}>
                  <Link to="/">
                    <img 
                      src={logo} 
                      alt="logo2" 
                      style={{ 
                        maxHeight: '35px',
                        width: 'auto',
                        objectFit: 'contain'
                      }} 
                    />
                  </Link>
                </div>

                {/* Hamburger button updated to use React state */}
                <button
                  className={
                    "navbar-toggler collapsed navicon justify-content-end" +
                    (this.state.isNavOpen ? " open" : "")
                  }
                  type="button"
                  onClick={this.toggleNav}
                  style={{
                    position: "fixed",
                    right: "10px",
                    zIndex: 15000,
                    borderRadius: "4px",
                    backgroundColor: this.state.isNavOpen
                      ? "transparent"
                      : "transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "24px",
                      height: "24px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        height: "2px",
                        width: "24px",
                        backgroundColor: "red",
                        top: this.state.isNavOpen ? "11px" : "4px",
                        left: "0",
                        transform: this.state.isNavOpen
                          ? "rotate(45deg)"
                          : "rotate(0)",
                        transition: "all 0.3s ease",
                      }}
                    ></span>
                    <span
                      style={{
                        position: "absolute",
                        height: "2px",
                        width: "24px",
                        backgroundColor: "red",
                        top: "12px",
                        left: "0",
                        opacity: this.state.isNavOpen ? 0 : 1,
                        transition: "all 0.3s ease",
                      }}
                    ></span>
                    <span
                      style={{
                        position: "absolute",
                        height: "2px",
                        width: "24px",
                        backgroundColor: "red",
                        top: this.state.isNavOpen ? "11px" : "18px",
                        left: "0",
                        transform: this.state.isNavOpen
                          ? "rotate(-45deg)"
                          : "rotate(0)",
                        transition: "all 0.3s ease",
                      }}
                    ></span>
                  </div>
                </button>

                <div className="extra-nav" style={{
                  flex: '0 0 auto',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div className="extra-cell">
                    <ul className="extra-info">
                      <li>
                        <div className="header-phone-no">
                          {/* <img src={hours} alt=""/> */}
                          <span style={{ 
                            color: this.state.isScrolled ? 'white' : 'black', // Force black color
                            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' 
                          }}>fast delivery $10 minimum</span>
                          <h2 style={{ 
                            color: this.state.isScrolled ? 'white' : 'black', // Force black color
                            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'}}>484-344-5250</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Add desktop navigation */}
                {!this.state.isMobile && (
                  <div className="desktop-nav" style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '0 1rem'
                  }}>
                    <ul className="nav-links" style={{
                      display: 'flex',
                      gap: '2rem',
                      margin: 0,
                      padding: 0,
                      listStyle: 'none',
                      alignItems: 'center'
                    }}>
                      <li>
                        <Link to="/menu" style={{ 
                          textDecoration: 'none',
                          color: this.state.isScrolled ? 'white' : 'black',
                          fontSize: '1.1rem',
                          fontWeight: 'bold',
                          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                          transition: 'color 0.3s ease',
                          ':hover': {
                            color: 'red'
                          }
                        }}>Menu</Link>
                      </li>
                      <li>
                        <a
                          href={this.props.online}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            textDecoration: 'none',
                            color: this.state.isScrolled ? 'white' : 'black',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                            transition: 'color 0.3s ease',
                            ':hover': {
                              color: 'red'
                            }
                          }}
                        >
                          Order Online
                        </a>
                      </li>
                      <li>
                        <Link to="/about" style={{ 
                          textDecoration: 'none',
                          color: this.state.isScrolled ? 'white' : 'black',
                          fontSize: '1.1rem',
                          fontWeight: 'bold',
                          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                          transition: 'color 0.3s ease',
                          ':hover': {
                            color: 'red'
                          }
                        }}>About Us</Link>
                      </li>
                    </ul>
                  </div>
                )}

                <div className="dlab-quik-search ">
                  <form action="#">
                    <input
                      name="search"
                      value=""
                      type="text"
                      className="form-control"
                      placeholder="Type to search"
                    />
                    <span id="quik-search-remove">
                      <i className="ti-close"></i>
                    </span>
                  </form>
                </div>

                <div
                  className={
                    "header-nav navbar-collapse collapse myNavbar justify-content-end" +
                    (this.state.isNavOpen ? " show" : "")
                  }
                  id="navbarNavDropdown"
                  style={
                    this.state.isNavOpen
                      ? {
                          position: "fixed",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          zIndex: 10000, // below hamburger button
                          backgroundColor: "white",
                          overflowY: "auto",
                          paddingTop: "60px", // shift menu content below header
                        }
                      : {}
                  }
                >
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to={"/menu"}>Menu</Link>
                    </li>
                    <li>
                      <a
                        href={this.props.online}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Order Online
                      </a>
                    </li>
                    <li>
                      <Link to={"/about"}>About Us</Link>
                    </li>
                  </ul>
                  <div className="sidebar-hours">
                    <h3 className="hours-title">Hours of Operation</h3>
                    <div className="hours-list">
                      {businessHours.map((schedule) => (
                        <div className="hours-row" key={schedule.day}>
                          <span className="day">{schedule.day}</span>
                          <span className="time">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="dlab-social-icon">
                    <ul>
                      <li>
                        <a
                          className="site-button sharp-sm fa fa-facebook"
                          href={this.props.facebook}
                        >
                          {null}
                        </a>
                      </li>
                      <li>
                        <a
                          className="site-button sharp-sm fa fa-yelp"
                          href={this.props.yelp}
                        >
                          {null}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Hours Modal */}
        {this.state.isMobileHoursOpen && (
          <div className="hoursContainer-mobile">
            <button
              className="hours-close-btn"
              onClick={this.toggleMobileHours}
            >
              ×
            </button>
            <div className="hours-content">
              <h3 className="hours-title">Business Hours</h3>
              <div className="hours-list">
                {businessHours.map((schedule) => (
                  <div className="hours-row" key={schedule.day}>
                    <span className="day">{schedule.day}</span>
                    <span className="time">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {this.state.showHoursPopup && (
          <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            color: 'white',
            padding: '1rem',
            textAlign: 'center',
            zIndex: 2000
          }}>
            <button 
              onClick={() => this.setState({ showHoursPopup: false })}
              style={{
                position: 'absolute',
                right: '10px',
                top: '5px',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '1.2rem'
              }}
            >
              ×
            </button>
            <p>Sunday hours update: Now closing at 4pm</p>
          </div>
        )}
      </>
    );
  }
}

export default Header2;
