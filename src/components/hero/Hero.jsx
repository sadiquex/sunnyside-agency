import styled from "styled-components";
import Header_Image from "../../assets/images/desktop/image-header.jpg";
import Navbar from "./Navbar";
import ArrowDown from "../../assets/images/icon-arrow-down.svg";

function Hero() {
  return (
    <Wrapper>
      <Navbar />
      <Hero_Text_And_Arrow>
        <Main_Text>WE ARE CREATIVES</Main_Text>
        <Arrow>
          <img src={ArrowDown} alt="down-arrow" />
        </Arrow>
      </Hero_Text_And_Arrow>
      <Background_Image src={Header_Image} />
    </Wrapper>
  );
}

export default Hero;

const Wrapper = styled.div`
  /* background: pink; */
  height: 100vh;
  position: relative;
`;
const Background_Image = styled.img`
  z-index: -10;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Hero_Text_And_Arrow = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 40%;
  /* z-index: 1; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background: pink; */
  height: 350px;

  @media screen and (max-width: 480px) {
    height: 200px;
  }
`;
const Main_Text = styled.p`
  font-size: 56px;
  color: #fff;
  text-align: center;
  line-height: 1.2;
  letter-spacing: 8px;
  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`;
const Arrow = styled.div``;
