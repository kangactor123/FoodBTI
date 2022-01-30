import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { page } from "../atom";

export const Section = styled.div`
  height: 10%;
  position: relative;
`;

export const Banner = styled.span`
  position: absolute;
  color: black;
  font-size: 24px;
  font-weight: 600;
  top: 40px;
  right: 70px;
  letter-spacing: 3px;
  user-select: none;
`;

function BannerSection() {
  const paging = useRecoilValue(page);
  return (
    <Section>
      <Banner>{paging === 0 ? "EatDa 이 달의 컨텐츠!" : `${paging}/16`}</Banner>
    </Section>
  );
}
export default BannerSection;
