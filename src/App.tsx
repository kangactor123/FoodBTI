import { useRecoilState, useSetRecoilState } from "recoil";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { isDarkAtom } from "./atom";
import Router from "./Router";
import { darkMode, lightMode } from "./theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
`;
const ToggleBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 250px;
  width: 80px;
  height: 40px;
  border: 0;
  border-radius: 25px;
  color: ${(props) => props.theme.HeadBtnColor};
  background-color: ${(props) => props.theme.btnColor};
  text-align: center;
  font-weight: 600;
  padding-top: 12px;
  z-index: 1;
  &:hover {
    cursor: pointer;
    font-weight: 900;
    box-shadow: 1px 1px 30px 1px rgb(143, 135, 135);
  }
`;

function App() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const toggleMode = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <>
      <ToggleBtn onClick={toggleMode}>{isDark ? "Light" : "Dark"}</ToggleBtn>
      <ThemeProvider theme={isDark ? lightMode : darkMode}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
