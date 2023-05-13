import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">FAQ</li>
          <li className="menuItem">Terms Of Use</li>
        </ul>
        <div className="infoText">
          ©Copyright by QJCoder. Use for learning or your portfolio. Don't claim
          as your own.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a
              href="https://github.com/qaiserjofficial"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size="20px" />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.linkedin.com/in/qaiserjofficial"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size="20px" />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://twitter.com/qaiserjofficial"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size="20px" />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
