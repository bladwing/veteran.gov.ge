import React from "react";
import "./socMedia.scss";

const SocialMediaLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="http://facebook.com" target="_blank" rel="noreferrer">
            {" "}
            <i className="fab fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#!" target="_blank" rel="noreferrer">
            {" "}
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#!" target="_blank" rel="noreferrer">
            {" "}
            <i className="fab fa-google-plus-g" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#!" target="_blank" rel="noreferrer">
            {" "}
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#!" target="_blank" rel="noreferrer">
            {" "}
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
