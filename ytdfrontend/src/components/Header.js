import React from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

const Header = () => {
  return (
    <>
      <Navbar color="dark" dark expand="md" fixed="top">
        <div className="container">
          <NavbarBrand
            style={{
              color: "orange",
              letterSpacing: 1,
              lineHeight: 1.5,
              fontWeight: 500,
            }}
          >
            Youtube Videos Downloader
          </NavbarBrand>
        </div>
      </Navbar>
      <Jumbotron>
        <h1 className="display-3 mt-5">Download Youtube Videos</h1>
        <p className="lead">
          Just paste links of Youtube videos and click download
        </p>
      </Jumbotron>
    </>
  );
};

export default Header;
