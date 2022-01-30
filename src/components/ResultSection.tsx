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
  justify-content: center;
  align-items: center;
  margin-top: 50%;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 1px;
  user-select: none;
  span {
    margin-right: 10px;
    font-size: 36px;
  }
`;

const MBTIContent = styled(Contents)`
  margin-top: 1%;
  height: 15%;
  font-size: 1.2em;
  span {
    font-weight: 700;
    font-size: 1.6rem;
    margin: 0 10px 0 10px;
    color: #2d3436;
  }
`;
const DescContent = styled(Contents)`
  font-size: 1em;
`;

const ImgWrapper = styled.div`
  box-shadow: 1px 1px 30px 1px rgb(143, 135, 135);
  width: 60%;
  height: 48%;
  border-radius: 25px;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 25px 25px 0 0;
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
            <span>🤔</span>당신의 성향을 파악중입니다! 잠시만 기다려주세요!
          </LoadingMsg>
          <Loading>
            <div></div>
          </Loading>
        </>
      ) : (
        <>
          <MBTIContent>
            당신의 FoodBTI는 ...
            <span>{data?.name}</span>
            입니다.
          </MBTIContent>
          <Contents>{data?.desc}</Contents>
          <MBTIContent>당신에게 추천해줄 음식은..</MBTIContent>
          <ImgWrapper>
            <Img src={process.env.PUBLIC_URL + data?.url} />
            <DescContent>{data?.food}</DescContent>
          </ImgWrapper>
        </>
      )}
    </>
  );
}

export default ResultSection;
