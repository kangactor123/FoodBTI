import Header from "../components/Header";
import styled from "styled-components";
import Wrapper from "../components/Wrapper";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${(props) => props.theme.bgColor};
`;

//StartBtn 클릭시 새로운 페이지로 전환
//퀴즈 시작 (스테이트로 관리)
//상태관리는 recoil로
function Home() {
  return (
    <>
      <Header />
      <Container>
        <Wrapper />
      </Container>
    </>
  );
}

export default Home;
