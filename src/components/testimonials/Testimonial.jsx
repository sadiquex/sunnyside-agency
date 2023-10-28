import styled from "styled-components";

import React from "react";
import Person from "./Person";

const Testimonial = () => {
  return (
    <Wrapper>
      <Title>CLIENT TESTIMONIALS</Title>
      <Testimonial_List>
        {Testimonial_Content.map((testimony, i) => (
          <Person key={i} testimony={testimony} />
        ))}
      </Testimonial_List>
    </Wrapper>
  );
};

export default Testimonial;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 90px;

  @media screen and (max-width: 480px) {
    height: auto;
    padding: 50px 0;
  }
`;

const Title = styled.p`
  font-size: 24px;
`;

const Testimonial_List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* gap: 30px; */
  /* background: pink; */
  width: 70%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Testimonial_Content = [
  {
    image:
      "https://images.pexels.com/photos/18847930/pexels-photo-18847930/free-photo-of-venice.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    review:
      " We put our trust in SunnySide and they delivered, making sure our needs were met and deadlines were always met.",
    name: "Emily R.",
    position: "Marketing CEO",
  },
  {
    image:
      "https://images.pexels.com/photos/18847930/pexels-photo-18847930/free-photo-of-venice.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    review:
      " We put our trust in SunnySide and they delivered, making sure our needs were met and deadlines were always met.",
    name: "Thomas S.",
    position: "Marketing CEO",
  },
  {
    image:
      "https://images.pexels.com/photos/18847930/pexels-photo-18847930/free-photo-of-venice.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    review:
      " We put our trust in SunnySide and they delivered, making sure our needs were met and deadlines were always met.",
    name: "Jennie F.",
    position: "Marketing CEO",
  },
];
