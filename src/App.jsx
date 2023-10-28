import styled from "styled-components";
import Hero from "./components/hero/Hero";
import Testimonial from "./components/testimonials/Testimonial";
import Featured from "./components/featured-images/Featured";
import Footer from "./components/footer/Footer";
import Services from "./components/our_services/Services";

function App() {
  return (
    <Wrapper>
      <Hero />
      <Services />
      <Testimonial />
      <Featured />
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  /* background: pink; */
  /* height: 100%; */
  position: relative;
`;
