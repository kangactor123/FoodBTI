class MBTI {
  name: string;
  desc: string;
  food: string;
  url: string;

  constructor(name: string, desc: string, food: string, url: string) {
    this.name = name;
    this.desc = desc;
    this.food = food;
    this.url = url;
  }
}

export const getMbti = (mbti: string) => {
  let map = new Map<string, MBTI>();
  map.set(
    "EMWA",
    new MBTI(
      "EMWA",
      "먹는건 내 삶의 낙!! 음식이 삶의 전부며 외향적 타입의 당신은 육식 동물 스타일",
      "양갈비 스테이크",
      "/image/EMWA.png"
    )
  );
  map.set(
    "IVSP",
    new MBTI(
      "IVSP",
      ".......... 내 설명 문구야. 정말 만사가 귀찮은 당신. 하루종일 누워있는게 제일 편한 당신. 그나마 건강을 위해 채식 위주의 식단을 하는 당신!",
      "샐러디 탄단지 샐러드",
      "/image/IVSP.png"
    )
  );
  map.set(
    "IMSP",
    new MBTI(
      "IMSP",
      "...! 이게 나의 모든 것 나가기도 귀찮고 먹는것도 귀찮아. 누가 불러도 귀찮아. 하지만 나는 고기는 먹고싶어.",
      "배달의 민족 : 직화구이 삼겹살",
      "/image/IMSP.png"
    )
  );
  map.set(
    "EVSP",
    new MBTI(
      "EVSP",
      "먹는건 좋지만 건강을 위해. 먹는걸 좋아하지만 건강을 신경쓰는 당신은 몸도 생활습관도 최고!",
      "균형잡힌 전주비빔밥",
      "/image/EVSP.png"
    )
  );
  map.set(
    "EMSP",
    new MBTI(
      "EMSP",
      "먹는건 좋아. 근데 뭐 먹지? 먹는걸 좋아하지만 적극적으로 찾지 않는 스타일. 하지만 막상 가면 무한리필처럼 리필해먹는 당신!",
      "두끼 즉석 떡볶이",
      "/image/EMSP.png"
    )
  );
  map.set(
    "IVSA",
    new MBTI(
      "IVSA",
      "나가기도 귀찮고 먹는것도.. 만사 귀찮은 당신. 움직이는게 없어서 칼로리도 낮은걸 찾는 당신은 정말 나무늘보 스타일",
      "햇반 + 컵라면 작은컵",
      "/image/IVSA.png"
    )
  );
  map.set(
    "IMSA",
    new MBTI(
      "IMSA",
      "나가기는 귀찮아. 나가기는 귀찮지만 고기없이는 못사는 당신은 배송의 민족성 VIP!",
      "배달의민족 직화구이 삼겹살",
      "/image/IMSP.png"
    )
  );
  map.set(
    "EVSA",
    new MBTI(
      "EVSA",
      "적극적으로 건강한걸 찾는 당신. 점심엔 샌드위치, 저녁엔 샐러드",
      "스타벅스에서 치아바타 어때요?",
      "/image/EVSA.png"
    )
  );
  map.set(
    "EMSA",
    new MBTI(
      "EMSA",
      "평일은 집, 주말은 모두 외식파 퇴근 후는 힘들어서 집에서. 하지만 주말엔 맛있는게 없으면 슬픈 당신!",
      "프랑스식 가정식",
      "/image/EMSA.png"
    )
  );
  map.set(
    "IVWP",
    new MBTI(
      "IVWP",
      "오늘은 그냥 집에서 샐러드! 야채를 선호하는 당신은 나가기도 귀찮아 저녁은 집에서 샐러드를 먹는편",
      "퇴근길에 사들고온 편의점 샐러드",
      "/image/IVWP.png"
    )
  );
  map.set(
    "IMWP",
    new MBTI(
      "IMWP",
      "이번주는 어디에서 뭘 먹을까? 맛있는걸 항상 함께하는 당신. 하지만 혼자는 힘들어 항상 누군가와 함께.",
      "소중한 사람과 함께 아웃백 립아이 스테이크",
      "/image/IMWP.png"
    )
  );
  map.set(
    "EVWP",
    new MBTI(
      "EVWP",
      "이번주는 어디서 샐러드를? 맛있는걸 좋아하지만 야채와 함께하면 더욱 즐겁지.",
      "내가 정해놓은 샐러드 맛집(?)",
      "/image/EVWP.png"
    )
  );
  map.set(
    "IMWA",
    new MBTI(
      "IMWA",
      "먹는건 즐겁지만 시키는건 어려워.. 먹는걸 즐겨하지만 주문기엔 너무 어려운 당신. 리필하는것은 세상에서 제일 힘들어",
      "KFC 징거버거 세트",
      "/image/IMWA.png"
    )
  );
  map.set(
    "IVWA",
    new MBTI(
      "IVWA",
      "맛있는 샐러드를 찾으러~ 맛있는 샐러드를 찾으러 적극적으로 탐험한다! 하지만 야채를 추가하는건 조금은 어려운 일",
      "샐러디 칠리베이컨 웜볼",
      "/image/IVWA.png"
    )
  );
  map.set(
    "EVWA",
    new MBTI(
      "EVWA",
      "먹는건 삶의 낙 하지만 야채만.. 먹는걸 즐기는 당신은 천부적인 대식가 스타일! 하지만 나는 주로 채식파.",
      "서브웨이 에그마요 샌드위치(feat. 야채듬뿍)",
      "/image/EVWA.png"
    )
  );
  map.set(
    "EMWP",
    new MBTI(
      "EMWP",
      "주말만 맛집탐험? nono~ 매일이 맛집 먹는것이 내 직업이자 취미이자 모든 것! 대한민국 맛집은 나의 집!",
      "닭 한마리에 칼국수 2인분",
      "/image/EMWP.png"
    )
  );
  return map.get(mbti);
};
