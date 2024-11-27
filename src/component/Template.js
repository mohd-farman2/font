import React from "react";
import "./Template.css";
import colleagues from './assests/colleagues.jpg'
import search from './assests/search.png'
import readbook from './assests/readbook.png'
import bookmark from './assests/bookmark.png'

function Template() {
  return (
    <div className="container">
      {/* Main Heading */}
      <h1 className="main-heading">how does it work</h1>

      {/* Transparent Full-Size Image Section */}
      <div className="image-container">
        <img
          className="transparent-image"
          src={colleagues}
          alt="Transparent Background"
        />

        {/* Content Section */}
        <div className="content-container">
          <div className="content-item">
            <h3>Search the World</h3>
            <p>Find endless opportunities with our advanced search tools.</p>
          </div>
          <div className="content-item">
            <h3>Bookmark Favorites</h3>
            <p>Save your most important content for quick access anytime.</p>
          </div>
          <div className="content-item">
            <h3>Read and Learn</h3>
            <p>Explore knowledge that inspires and transforms your journey.</p>
          </div>
        </div>

        {/* Icon Section */}
        <div className="icon-container">
          <div className="icon-item">
            <img
              src={search}
              alt="Search Icon"
            />
          </div>
          <div className="icon-item">
            <img
              src={bookmark}
              alt="Bookmark Icon"
            />
          </div>
          <div className="icon-item">
            <img
              src={readbook}
              alt="ReadBook Icon"
            />
          </div>
        </div>

        {/* Button */}
        <button className="transparent-button">checkout youtube</button>
      </div>
    </div>
  );
}

export default Template;
