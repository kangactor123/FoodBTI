import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { page } from "../atom";

const Wrapper = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.headerColor};
`;

const Logo = styled.span`
  font-size: 24px;
  font-weight: 600;
  margin-left: 10%;
  color: ${(props) => props.theme.HeadBtnColor};
  &:hover {
    cursor: pointer;
    color: red;
  }
`;

function Header() {
  const setPaging = useSetRecoilState(page);
  const replay = () => {
    setPaging(0);
  };
  return (
    <Wrapper>
      <Logo onClick={replay}>EatDa</Logo>
    </Wrapper>
  );
}

export default Header;
