import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled, { keyframes } from "styled-components";
import { MBTI } from "../atom";
import { getMbti } from "../getMBTI";
import { Contents } from "./ContentSection";

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  div {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 64px;
    height: 64px;
    margin-top: -32px;
    margin-left: -32px;
    border-radius: 50%;
    border: 8px solid transparent;
    border-top-color: #f19022;
    border-bottom-color: #f19022;
    animation: ${spinner} 0.8s ease infinite;
  }
`;

const LoadingMsg = styled.div`
  display: flex;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  margin-top: 50vh;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1px;
  user-select: none;
  span {
    margin-right: 10px;
    font-size: 2rem;
  }
`;

const MBTIContent = styled(Contents)`
  width: 100%;
  margin-top: 1%;
  height: 15%;
  font-size: 1.2rem;
  span {
    font-weight: 700;
    font-size: 1.6vw;
    margin: 0 10px 0 10px;
    color: ${(props) => props.theme.textColor};
  }
`;
const DescContent = styled(Contents)`
  justify-content: left;
  width: 90%;
  font-size: 1.2rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: black;
  span {
    margin-left: 10px;
    font-size: 1.8rem;
    color: navy;
  }
`;

const ImgWrapper = styled.div`
  box-shadow: 1px 1px 30px 1px rgb(143, 135, 135);
  width: 100%;
  height: 47vh;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ResultDesc = styled(Contents)`
  text-align: left;
  color: black;
  width: 90%;
  font-size: 1.2rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  letter-spacing: 2px;
`;

function ResultSection() {
  const [isLoading, setLoading] = useState(true);
  const mbti = useRecoilValue(MBTI);
  const data = getMbti(mbti); //mbti 객체 리턴
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  console.log(`${mbti}: ${getMbti(mbti)}`);

  return (
    <>
      {isLoading ? (
        <>
          <LoadingMsg>
            <span>🤔</span>당신의 성향을 파악중입니다!
          </LoadingMsg>
          <Loading>
            <div></div>
          </Loading>
        </>
      ) : (
        <>
          <ImgWrapper>
            <Img src={process.env.PUBLIC_URL + data?.url} />
          </ImgWrapper>
          <MBTIContent>
            당신의 FoodBTI는 ...
            <span>{data?.name}</span>
            입니다.
          </MBTIContent>
          <ResultDesc>- {data?.desc}</ResultDesc>
          <DescContent>
            - 오늘 저녁 메뉴는? <span> {data?.food}</span>
          </DescContent>
        </>
      )}
    </>
  );
}

export default ResultSection;
