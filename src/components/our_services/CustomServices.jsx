import styled from "styled-components";

// content coming from Services component
const CustomServices = ({ service }) => {
  return (
    <Wrapper>
      <Image_Div>
        <Image_Img src={service.img} />
        <Text_Container type={service.type}>
          <Title>{service.title}</Title>
          <Description>{service.description}</Description>
        </Text_Container>
      </Image_Div>
    </Wrapper>
  );
};

export default CustomServices;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #eee;
  z-index: 3;
`;
const Image_Div = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;

const Image_Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* opacity: 0.5; */
`;

const Text_Container = styled.div`
  width: 30%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* border: 2px solid red; */
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  /* dynamically change text color with 'type' props */
  p {
    color: ${(props) =>
      props.type === "graphicdesign"
        ? "hsl(167, 40%, 24%)"
        : "hsl(198, 62%, 26%)"};
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    text-align: center;
    transform: translate(-50%, 0);
  }
`;

const Title = styled.p`
  font-size: 24px;
  font-family: "Fraunces";
`;

const Description = styled.p`
  font-family: "Barlow";
  line-height: 1.3;
  color: #000;
  text-align: center;
`;
