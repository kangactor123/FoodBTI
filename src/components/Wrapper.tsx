import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { page } from "../atom";
import BannerSection from "./BannerSection";
import ButtonSection from "./ButtonSection";
import ContentSection from "./ContentSection";

export const Box = styled.div`
  width: 60%;
  height: 90vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.HomeBodyColor};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 30px rgb(0 0 0/ 30%);
  height: 100%;
`;

function Wrapper() {
  const paging = useRecoilValue(page);

  return (
    <Box>
      <Body>
        {paging < 9 ? (
          <>
            <BannerSection />
            <ContentSection />
            <ButtonSection />
          </>
        ) : null}
      </Body>
    </Box>
  );
}

export default Wrapper;
