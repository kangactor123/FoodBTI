import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { page } from "../atom";
import BannerSection from "./BannerSection";
import ButtonSection from "./ButtonSection";
import ContentSection from "./ContentSection";
import ResultSection from "./ResultSection";

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
        {paging < 17 ? (
          <>
            <BannerSection />
            <ContentSection />
            <ButtonSection />
          </>
        ) : (
          <ResultSection />
        )}
      </Body>
    </Box>
  );
}

export default Wrapper;
