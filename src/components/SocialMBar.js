import React from 'react';
import './CSS/SocialMBar.css';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import tiktokIconWhite from "../components/images/TikTokWhite.png";
import CtaButton from './CtaButton';

const SocialMBar = () => {
  return (
    <div className="social-container">
      <div id="social-book-now">
        <CtaButton />
      </div>
      <div className="social-icons">
        <a className="icons" href="https://www.instagram.com/royal.bliss.events/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" rel="noopener noreferrer" target="_blank">
          <FaInstagram size={28} />
        </a>
        <a className="icons" href="https://www.facebook.com/profile.php?id=100089277339991&amp;mibextid=gik2fB" rel="noopener noreferrer" target="_blank">
          <FaFacebook size={28} />
        </a>
        <a href="https://www.tiktok.com/@royalblissevents_satx?_t=8hweXN7a8Dr&amp;_r=1" rel="noopener noreferrer" target="_blank">
          <img className="tiktok-blue" src={tiktokIconWhite} alt="TikTok Blue Icon" />
        </a>
        {/* <img className="tiktok-white" id="tiktok-hover" src={tiktokIconWhite} alt="TikTok White Icon" /> */}
      </div>
    </div>
  );
};

export default SocialMBar;
