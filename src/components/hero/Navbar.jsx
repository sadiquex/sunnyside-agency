import styled from "styled-components";
import Logo from "../../assets/images/logo.svg";
import HamburgerIcon from "../../assets/images/icon-hamburger.svg";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  // state to display navigation
  const [isClicked, setIsClicked] = useState(false);

  const showMobileNav = () => {
    console.log(111);
    setIsClicked(!isClicked);
  };

  return (
    <Navbar_NAV>
      <Logo_IMG src={Logo} />
      <Nav_UL>
        <Nav_LI>About</Nav_LI>
        <Nav_LI>Services</Nav_LI>
        <Nav_LI>Projects</Nav_LI>
        <Nav_LI className="active">Contact</Nav_LI>
      </Nav_UL>
      {/* hamburger menu for mobile */}
      <HamburgerMenu
        src={HamburgerIcon}
        onClick={() => {
          showMobileNav();
        }}
      />
      {isClicked && <MobileNav />}
    </Navbar_NAV>
  );
};

export default Navbar;

const Navbar_NAV = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* background: green; */
  color: #fff;
  padding: 20px 0;
  position: absolute;
  @media screen and (max-width: 480px) {
    position: fixed;
    justify-content: space-around;
  }
`;

const Logo_IMG = styled.img`
  padding-left: 50px;
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

const HamburgerMenu = styled.img`
  /* if width is mobile, show else hide */
  display: none;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

const Nav_UL = styled.ul`
  flex: 1;
  /* border: 2px solid #ff0; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 60px;
  padding-right: 50px;
  height: 60px;
  @media screen and (max-width: 480px) {
    display: none;
  }
  .active {
    background: hsl(51, 100%, 49%);
    padding: 20px;
    border-radius: 30px;
    text-transform: uppercase;
  }
`;

const Nav_LI = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: "Barlow";

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    padding: 10px 20px;
  }
`;
