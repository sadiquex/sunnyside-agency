import styled from "styled-components";

const Person = ({ testimony }) => {
  // content coming from testimonial component
  return (
    <Wrapper>
      <Profile_Image>
        <img src={testimony.image} alt="" />
      </Profile_Image>
      <Review>{testimony.review}</Review>
      <Person_Details>
        <Name>{testimony.name}</Name>
        <Position>{testimony.position}</Position>
      </Person_Details>
    </Wrapper>
  );
};

export default Person;

const Wrapper = styled.div`
  /* border: 2px solid red;\ */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  font-size: 18px;
  gap: 50px;
  font-family: "Barlow";

  @media screen and (max-width: 480px) {
    /* border: 1px solid red; */
    gap: 30px;
  }
`;

const Profile_Image = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    width: 70px;
    height: 70px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Review = styled.p`
  line-height: 1.2;
  text-align: center;
  color: hsl(213, 9%, 39%);
`;

const Person_Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.p`
  font-size: 24px;
  font-family: "Fraunces";
`;
const Position = styled.p`
  color: hsl(210, 4%, 67%);
`;
