import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./socialMedia.css";

const SocialMedia = () => {

  return (
    <div rel="noopener noreferrer" className="social-links">
      <div className="links">
        <a href="https://github.com/RochakSiwach" target='_blank' rel="noopener noreferrer" className="mediaLinks">
          <FaGithub color="white"/>
        </a>

        <a href="https://x.com/Siwach_1" target='_blank' rel="noopener noreferrer" className="mediaLinks">
          <FaTwitter  color="white"/>
        </a>

        <a href="https://www.linkedin.com/in/rochak-siwach-10b608441" target='_blank' rel="noopener noreferrer" className="mediaLinks">
          <FaLinkedin  color="white"/>
        </a>

        <a href="mailto:rochaksiwach13@gmail.com" target='_blank' rel="noopener noreferrer" className="mediaLinks">
          <MdEmail  color="white"/>
        </a>

        <a href="https://rochakportfolio.vercel.app" target='_blank' rel="noopener noreferrer" className="mediaLinks">
          <FaFileAlt  color="white"/>
        </a>

      </div>
    </div>
  );
};

export default SocialMedia;
