import Header from "../components/Header";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width:60%;
  height:90vh;
  margin:0 auto;
  background-color: whitesmoke;
`;

const Body = styled.div`
  display:flex;
  flex-direction: column;
  box-shadow: 0 0 30px rgb(0 0 0/ 30%);
  height:100%;
`;

const BannerSection = styled.div`
  height:10%;
  position: relative;
`;

const Banner = styled.span`
  position:absolute;
  color:black;
  font-size: 18px;
  font-weight: 600;
  top:40px;
  right:50px;
`;

const ContentSection = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Song+Myung&display=swap');
  margin:20px;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  color: rgb(143, 135, 135);
  font-family: 'Amatic SC', cursive;
  font-family: 'Song Myung', serif;
  span {
      font-size: 36px;
      margin-right: 10px;
  }
`;
const ButtonSection = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartDiv = styled.div`
  width:60%;
  border:0;
  background-color: tomato;
  height:60px;
  border-radius: 30px;
  color:white;
  font-size: 24px;
  text-align: center;
  padding-top:17px;
  &:hover {
    cursor:pointer;
    color:black;
    box-shadow: 1px 1px 30px 1px rgb(143, 135, 135);
    transition: color 1.5s;
  }
  a {
    display:block;
  }
`;

//StartBtn 클릭시 새로운 페이지로 전환
//퀴즈 시작 (스테이트로 관리)
//상태관리는 recoil로
function Home() {
  return (
    <>
      <Header/>
      <Wrapper>
        <Body>
          <BannerSection>
            <Banner>EatDa 이 달의 컨텐츠!</Banner>
          </BannerSection>
          <ContentSection>
            <Contents><span>😳</span>오늘 저녁엔 뭐 먹지?</Contents>
            <Contents>내 성향 테스트 해보고 추천 메뉴도 알아보자!</Contents>
          </ContentSection>
          <ButtonSection>
            <StartDiv>
              <Link to="/">테스트하기</Link>
            </StartDiv>
          </ButtonSection>
        </Body>
      </Wrapper>
    </>
  );
}

export default Home;