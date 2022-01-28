import styled from "styled-components";
import { Link } from "react-router-dom";

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
    color: red;
  }
`;

const TryBtn = styled(Logo)`
  color: ${(props) => props.theme.HeadBtnColor};
  margin-left: 0;
  margin-right: 10%;
`;

function Header() {
  return (
    <Wrapper>
      <Logo>
        <Link to="/">EatDa</Link>
      </Logo>
      <TryBtn>Replay</TryBtn>
    </Wrapper>
  );
}

export default Header;
