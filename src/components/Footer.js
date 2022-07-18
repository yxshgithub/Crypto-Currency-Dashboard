import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        height: "150px",
        fontSize: "25px",
        fontWeight: "200",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h2 style={{ paddingTop: "30px" }}>
          Made with ❤️ by <span style={{ color: "Yellow" }}>Yash Sonawane</span>{" "}
        </h2>
        <div className="Socials">
          <a
            href="https://www.linkedin.com/in/yash-sonawane5621/"
            style={{
              paddingRight: "30px",
              color: "whitesmoke",
            }}
          >
            Linkedin
          </a>
          <a
            href="https://github.com/yxshgithub"
            style={{
              gap: "50px",
              color: "whitesmoke",
            }}
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
