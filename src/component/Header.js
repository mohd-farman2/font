import React from "react";
import './Header.css'; // Import the CSS file
import undraw_Remote from './assests/undraw_Remote.png';
import undraw_Redesign from './assests/undraw_Redesign.png'
import working from './assests/working.png';

function Header() {
  return (
    <div className="container">
      {/* Header with Links */}
      <header>
        <h1 className="main-heading">Browser topics</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#design">Design</a></li>
            <li><a href="#marketing">Marketing</a></li>
            <li><a href="#finance">Finance</a></li>
            <li><a href="#music">Music</a></li>
            <li><a href="#education">Education</a></li>
          </ul>
        </nav>
      </header>

      {/* Image Section with Headings and Notifications */}
      <section className="image-section">
        <div className="image-box">
           <h3>Web Design</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
          <div className="notification-badge">5</div>
          <img src={undraw_Remote} alt="Design" />
        </div>

        <div className="image-box">
        <h3>Graphic</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
          <div className="notification-badge">3</div>
          <img src={undraw_Redesign} alt="Marketing" />
          
        </div>

        <div className="image-box">
        <h3>Logo design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
          <div className="notification-badge">8</div>
          <img src={working} alt="Finance" />
        </div>
      </section>
    </div>
  );
}

export default Header;
