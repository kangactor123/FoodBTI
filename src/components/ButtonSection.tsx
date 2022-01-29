import { useRecoilState } from "recoil";
import styled from "styled-components";
import { page } from "../atom";

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
const ReplyButton = styled.button<{ BtnColor: string }>`
  width: 60%;
  height: 60px;
  background-color: ${(props) => props.BtnColor};
  border: 0;
  border-radius: 30px;
  font-size: 18px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  &:hover {
    cursor: pointer;
    //box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    font-size: 22px;
    color: white;
    transition: box-shadow 1s ease-in;
    transition: font-size 0.1s;
    transition: color 0.2s ease-in;
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
          <ReplyButton BtnColor="#74b9ff" onClick={upPage}>
            Yeap
          </ReplyButton>
          <br />
          <ReplyButton BtnColor="#ff7675" onClick={upPage}>
            Nope
          </ReplyButton>
        </>
      )}
    </Section>
  );
}

export default ButtonSection;
