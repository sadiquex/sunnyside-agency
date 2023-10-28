import styled from "styled-components";

import React from "react";

const MobileNav = () => {
  return (
    <Navbar_NAV>
      <Triangle />
      <Nav_UL>
        <Nav_LI>About</Nav_LI>
        <Nav_LI>Services</Nav_LI>
        <Nav_LI>Projects</Nav_LI>
        <Nav_LI className="active">Contact</Nav_LI>
      </Nav_UL>
    </Navbar_NAV>
  );
};

export default MobileNav;

const Navbar_NAV = styled.nav`
  background: #fff;
  width: 90%;
  height: 300px;
  position: absolute;
  top: 100px;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  transition: all 0.8 ease-in-out;
  /* hide on non-mobile screens */
  @media screen and (min-width: 480px) {
    display: none;
    z-index: 2000;
  }
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-right: 50px solid #555;
  border-bottom: 25px solid transparent;
  position: absolute;
  right: 0;
  top: -50px;
`;

const Nav_UL = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  .active {
    background: hsl(51, 100%, 49%);
    padding: 20px;
    border-radius: 30px;
    text-transform: uppercase;
    font-family: "Fraunces";
    color: #000;
  }
`;

const Nav_LI = styled.li`
  font-family: "Barlow";
  font-size: 20px;
  color: hsl(213, 9%, 39%);
`;
