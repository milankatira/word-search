import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://github.com/milankatira/word-search.git" target="__blank">
          Milan katira
        </a>
      </span>
    </div>
  );
};

export default Footer;
