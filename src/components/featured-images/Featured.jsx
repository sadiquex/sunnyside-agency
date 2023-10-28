import styled from "styled-components";
import MilkBottles from "../../assets/images/desktop/image-gallery-milkbottles.jpg";
import Orange from "../../assets/images/desktop/image-gallery-orange.jpg";
import Cone from "../../assets/images/desktop/image-gallery-cone.jpg";
import SugarCubes from "../../assets/images/desktop/image-gallery-sugarcubes.jpg";

const Featured = () => {
  return (
    <Wrapper>
      {Images.map((image, i) => (
        <Image_div key={i}>
          <img src={image} alt="" />
        </Image_div>
      ))}
    </Wrapper>
  );
};

export default Featured;

const Wrapper = styled.div`
  height: 50vh;
  /* background: pink; */
  display: flex;

  @media screen and (max-width: 480px) {
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Image_div = styled.div`
  flex: 1;
  /* border: 1px solid #ff0; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// images imported from top
const Images = [MilkBottles, Orange, Cone, SugarCubes];
