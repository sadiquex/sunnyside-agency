import styled from "styled-components";
import CustomServices from "./CustomServices";
import { CustomServicesData } from "./servicesData";
import StandOut from "../../assets/images/desktop/image-stand-out.jpg";
import EggImage from "../../assets/images/desktop/image-transform.jpg";

const Services = () => {
  return (
    <Wrapper>
      {/* first row */}
      <Row>
        <One_Side>
          <Text_Container>
            <Title>Transform your brand</Title>
            <Description>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </Description>
            <Link>LEARN MORE</Link>
          </Text_Container>
        </One_Side>
        <One_Side>
          <Image_Img src={EggImage} />
        </One_Side>
      </Row>
      {/* second row */}
      <Row>
        <One_Side className="image-first">
          <Image_Img src={StandOut} />
        </One_Side>
        <One_Side>
          <Text_Container>
            <Title>Stand out to the right audience</Title>
            <Description>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </Description>
            <Link>LEARN MORE</Link>
          </Text_Container>
        </One_Side>
      </Row>
      <Row className="custom-services">
        {CustomServicesData.map((service, i) => {
          return (
            <One_Side key={i}>
              <CustomServices service={service} />
            </One_Side>
          );
        })}
      </Row>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div``;

const Row = styled.div`
  /* background: pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    height: auto;
    .image-first {
      order: 2;
    }
  }
`;

const One_Side = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid green; */
  height: 75vh;
`;

const Text_Container = styled.div`
  width: 40%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    padding: 20px;
    gap: 30px;
    align-items: center;
  }
`;

const Image_Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.p`
  font-size: 24px;
  font-family: "Fraunces";
  @media screen and (max-width: 480px) {
    font-size: 30px;
    width: 80%;
    text-align: center;
  }
`;

const Description = styled.p`
  font-family: "Barlow";
  line-height: 1.3;
  color: hsl(210, 4%, 67%);

  @media screen and (max-width: 480px) {
    text-align: center;
    width: 90%;
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 24px;
  font-family: "Fraunces";
  display: inline;
  border-bottom: 6px solid hsl(51, 100%, 49%);
  padding-bottom: 8px;
  @media screen and (max-width: 480px) {
    font-size: 16px;
    border-bottom: 4px solid hsl(51, 100%, 49%);
    padding-bottom: 4px;
  }
`;
