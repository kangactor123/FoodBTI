import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Count, MBTI, page, Showing } from "../atom";
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
  font-size: 1.7rem;
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
  const [count, setCount] = useRecoilState(Count);
  const setMbti = useSetRecoilState(MBTI);
  const [showing, setShowing] = useRecoilState(Showing);

  const startQuiz = () => {
    if (paging === 0) {
      setPaging(1);
    }
  };
  const countValue = (paging: number, value: number) => {
    if ([1, 2, 3, 4].indexOf(paging) !== -1) {
      setCount((prev) => prev + value);
      if (paging === 4) {
        setMbti((prev) => {
          if (count < 2) {
            return prev + "I";
          } else {
            return prev + "E";
          }
        });
        setCount(0);
      }
    } else if ([5, 6, 7, 8].indexOf(paging) !== -1) {
      setCount((prev) => prev + value);
      if (paging === 8) {
        setMbti((prev) => {
          if (count < 2) {
            return prev + "V";
          } else {
            return prev + "M";
          }
        });
        setCount(0);
      }
    } else if ([9, 10, 11, 12].indexOf(paging) !== -1) {
      setCount((prev) => prev + value);
      if (paging === 12) {
        setMbti((prev) => {
          if (count < 2) {
            return prev + "W";
          } else {
            return prev + "S";
          }
        });
        setCount(0);
      }
    } else if ([13, 14, 15, 16].indexOf(paging) !== -1) {
      setCount((prev) => prev + value);
      if (paging === 16) {
        setMbti((prev) => {
          if (count < 2) {
            return prev + "P";
          } else {
            return prev + "A";
          }
        });
        setCount(0);
      }
    }
  };
  const upPage = (value: number) => {
    if (paging < 17) {
      countValue(paging, value);
      setPaging((prev) => prev + 1);
      setShowing((prev) => !prev);
      console.log(showing);
    }
  };
  return (
    <Section>
      {paging === 0 ? (
        <StartDiv>
          <div onClick={startQuiz}>테스트 시작하기</div>
        </StartDiv>
      ) : (
        <>
          <ReplyButton
            BtnColor="#74b9ff"
            onClick={() => {
              upPage(1);
            }}
            text="그렇다"
          />
          <br />
          <ReplyButton
            BtnColor="#ff7675"
            onClick={() => {
              upPage(0);
            }}
            text="아니다"
          />
        </>
      )}
    </Section>
  );
}

export default ButtonSection;
