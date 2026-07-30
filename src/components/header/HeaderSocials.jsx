import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/david-bradford-651769160/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/deviator53" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://twitter.com/Brad_for_d" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
