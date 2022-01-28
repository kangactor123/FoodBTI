import styled from "styled-components";
import Header from "../components/Header";
import { Container, Wrapper, Body, BannerSection, Banner } from "./Home";

const Paging = styled(Banner)`
  font-size: 24px;
  top: 70px;
  right: 100px;
  letter-spacing: 2px;
  color: ${(props) => props.theme.textColor};
`;

function Quiz() {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Body>
            <BannerSection>
              <Paging>1/8</Paging>
            </BannerSection>
          </Body>
        </Wrapper>
      </Container>
    </>
  );
}

export default Quiz;
