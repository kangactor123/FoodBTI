import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { MBTI, page } from "../atom";

const Wrapper = styled.div`
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.headerColor};
`;

const Box = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const Logo = styled.span`
  margin-left: 3%;
  font-size: 24px;
  font-weight: 600;
  user-select: none;
  color: ${(props) => props.theme.HeadBtnColor};
  &:hover {
    cursor: pointer;
    color: red;
  }
`;

function Header() {
  const setPaging = useSetRecoilState(page);
  const setMbti = useSetRecoilState(MBTI);
  const replay = () => {
    setPaging(0);
    setMbti("");
  };
  return (
    <Wrapper>
      <Box>
        <Logo onClick={replay}>EatDa</Logo>
      </Box>
    </Wrapper>
  );
}

export default Header;
