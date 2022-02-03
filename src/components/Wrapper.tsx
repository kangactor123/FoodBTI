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
  width: 65vw;
  height: 90vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.HomeBodyColor};
`;

export const Body = styled(motion.div)`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 30px rgb(0 0 0/ 30%);
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

  const boxVariants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
      },
    },
  };

  return (
    <AnimatePresence>
      <Box variants={boxVariants} initial="initial" animate="animate">
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
    </AnimatePresence>
  );
}

export default Wrapper;
