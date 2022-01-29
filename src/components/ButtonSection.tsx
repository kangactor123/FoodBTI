import { useRecoilState } from "recoil";
import styled from "styled-components";
import { page } from "../atom";
import ReplyButton from "./ReplyButton";

const Section = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StartDiv = styled.div`
  width: 60%;
  border: 0;
  background-color: tomato;
  height: 60px;
  border-radius: 30px;
  color: white;
  font-size: 24px;
  text-align: center;
  padding-top: 17px;
  user-select: none;
  &:hover {
    cursor: pointer;
    color: black;
    box-shadow: 1px 1px 30px 1px rgb(143, 135, 135);
    transition: color 1.5s;
  }
`;

function ButtonSection() {
  const [paging, setPaging] = useRecoilState(page);
  const startQuiz = () => {
    if (paging == 0) {
      setPaging(1);
    }
  };
  const upPage = () => {
    if (paging < 9) {
      setPaging((prev) => prev + 1);
    }
  };
  return (
    <Section>
      {paging == 0 ? (
        <StartDiv>
          <div onClick={startQuiz}>테스트 시작하기</div>
        </StartDiv>
      ) : (
        <>
          <ReplyButton BtnColor="#74b9ff" onClick={upPage} text="그렇다" />
          <br />
          <ReplyButton BtnColor="#ff7675" onClick={upPage} text="아니다" />
        </>
      )}
    </Section>
  );
}

export default ButtonSection;
