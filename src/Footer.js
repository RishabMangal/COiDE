import React from "react";

function Footer() {
  return (
    <footer>
      <div
        style={{
          color: "gray",
          backgroundColor: "#000000",
          borderTop: "1px solid gray",
          marginTop: "10px",
          width: "100%",
        }}
      >
        <div className="header">
          <span className="code">CO</span>
          <u className="ide">
            i<span className="code">DE</span>
          </u>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "large",
          }}
          className="footer"
        >
          <div className="links">
            <a href="https://github.com/RishabMangal">
              <i className="fab fa-git "></i>
            </a>
            <a href="mailto:rishabhmangal1@gmail.com?subject=Awesome App">
              <i className="fas fa-envelope "></i>
            </a>
            <a href="https://www.linkedin.com/in/rishab-m-00b60a103/">
              <i className="fab fa-linkedin "></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=9928799243&text=Hello">
              <i className="fab fa-whatsapp "></i>
            </a>
            <a href="https://www.facebook.com/rishabh.mangal.77">
              <i className="fab fa-facebook "></i>
            </a>
            <a href="https://www.instagram.com/rishabhmangal1/">
              <i className="fab fa-instagram "></i>
            </a>
            <a href="https://github.com/RishabMangal">
              <i className="fab fa-github "></i>
            </a>
          </div>
          <div className="developer">
            <p className="name">
              Developed By{" "}
              <a href="https://rishabmangal.netlify.app" target="__blank">
                Rishab Mangal
              </a>
            </p>
            <p className="name">Version 1.0.0</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
