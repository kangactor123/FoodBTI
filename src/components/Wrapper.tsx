import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { page, Showing } from "../atom";
import BannerSection from "./BannerSection";
import ButtonSection from "./ButtonSection";
import ContentSection from "./ContentSection";
import ResultSection from "./ResultSection";

export const Box = styled(motion.div)`
  max-width: 650px;
  height: 90vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.HomeBodyColor};
  box-shadow: 0 0 30px rgb(0 0 0/ 30%);
`;

export const Body = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function Wrapper() {
  const paging = useRecoilValue(page);
  const [showing, setShowing] = useRecoilState(Showing);
  useEffect(() => {
    if (showing === false) {
      setTimeout(() => {
        setShowing((prev) => !prev);
      }, 1000);
    }
  }, [showing]);

  return (
    <AnimatePresence>
      <Box>
        {paging < 17 ? (
          <Body>
            <BannerSection />
            <ContentSection />
            <ButtonSection />
          </Body>
        ) : (
          <Body>
            <ResultSection />
          </Body>
        )}
      </Box>
    </AnimatePresence>
  );
}

export default Wrapper;
