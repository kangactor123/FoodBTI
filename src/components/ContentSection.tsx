import { useRecoilValue } from "recoil";
import styled, { keyframes } from "styled-components";
import { page } from "../atom";

const Section = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface IContents {
  marginBottom?: number;
}

const smoothAppear = keyframes`
  from {
    opacity:0;
    transform:translateY(50px);
  }
  to {
    opacity:1;
    transform:translateY(0);
  }
`;

export const Contents = styled.div<IContents>`
  @import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Song+Myung&display=swap");
  width: 70%;
  margin: 0 auto;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  line-height: 50px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: rgb(143, 135, 135);
  font-family: "Amatic SC", cursive;
  font-family: "Song Myung", serif;
  user-select: none;
  span {
    font-size: 36px;
    margin-right: 10px;
  }
  animation: ${smoothAppear} 1.5s;
`;

function ContentSection() {
  const question = [
    "식당에서 밑반찬을 다 먹었을 때 셀프바가 있는지 먼저 살펴보는 편이다.",
    "여행에 가면 아무곳이나 갈 수 없다. 무조건 찾아놓은 맛집만 가야한다.",
    "정말 가고싶은 맛집이다. 웨이팅이 앞에 15팀이 있다. 대기 시간 1시간. 기다릴까?",
    "식당에 들어가서 앉았는데 벨을 눌러도, 5분을 앉아있어도 직원이 안온다. 이때 큰 소리로 주문할 수 있다.",
    "웨이트를 하지 않아도 매일 단백질 권장 섭취량은 필수다.",
    "일주일에 한 번 삼겹살을 먹지 않으면 섭섭하다.",
    "저기압 일 땐 고기앞으로, 기분이 고기압일 땐 고기앞으로.",
    "하루 3끼 내 밥상에 육류가 없으면 하루종일 기분이 좋지 않다.",
    "스트레스를 받으면 뭐 먹을지 고민하는 편이다.",
    "운전을 할 때 항상 입에 사탕을 넣어놓는 편이다.",
    "점심을 배부르게 먹은 당신, 하지만 디저트 먹을 공간은 남아있다.",
    "옆자리 선배가 하루종일 갈군다면 당이 땡기는 편이다.",
    "나는 점심메뉴를 고르는데 1시간 이상이 소요가 된다. 혹은 점심 메뉴는 옆자리 동료가 고른 메뉴를 먹는 편이다.",
    "아침에 출근하면 뭐 먹을지 생각하는게 업무의 시작이다.",
    "사랑하는 사람과의 데이트, 언제나 항상 '너가 맛있는건 나도 맛있어' 이다.",
    "지금 당신은 뭘 먹을지 정했다.",
  ];
  const paging = useRecoilValue(page);

  return (
    <Section>
      {paging === 0 ? (
        <>
          <Contents marginBottom={24}>
            <span>😳</span>오늘 저녁엔 뭐 먹지?
          </Contents>
          <Contents>내 성향 테스트 해보고 추천 메뉴도 알아보자!</Contents>
        </>
      ) : (
        <Contents>{question[paging - 1]}</Contents>
      )}
    </Section>
  );
}

export default ContentSection;
