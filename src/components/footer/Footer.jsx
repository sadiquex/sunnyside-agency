import styled from "styled-components";
import Logo from "../../assets/images/logo.svg";
import {
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
  BiLogoTwitter,
  BiLogoUnsplash,
} from "react-icons/bi";

const Footer = () => {
  return (
    <Wrapper>
      <Footer_UL>
        <img src={Logo} alt="Sunnyside-Logo" />
        <Footer_Nav_UL>
          <Footer_Nav_LI>About</Footer_Nav_LI>
          <Footer_Nav_LI>Services</Footer_Nav_LI>
          <Footer_Nav_LI>Projects</Footer_Nav_LI>
        </Footer_Nav_UL>
        <Icons_DIV>
          <BiLogoFacebookSquare />
          <BiLogoInstagramAlt />
          <BiLogoTwitter />
          <BiLogoUnsplash />
        </Icons_DIV>
      </Footer_UL>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  height: 30vh;
  background: hsl(168, 34%, 41%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Footer_UL = styled.ul`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  /* background: hsl(167, 40%, 24%); */
`;

const Footer_Nav_UL = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Footer_Nav_LI = styled.li`
  cursor: pointer;
  font-family: "Barlow";
  color: hsl(167, 40%, 24%);
  &:hover {
    color: #fff;
  }
`;
const Icons_DIV = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;

  svg {
    font-size: 24px;
    text-decoration: none;
    color: hsl(167, 40%, 24%);
    &:hover {
      color: #fff;
    }
  }
`;
