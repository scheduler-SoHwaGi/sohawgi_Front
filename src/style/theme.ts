// theme.ts
import { DefaultTheme, css } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    Gray_01: "#F1F4F5",
    Gray_02: "#E4E5E8",
    Gray_03: "#DADDE0",
    Gray_04: "#9EA4B6",
    Gray_05: "#74767C",
    Gray_06: "#343845",
    White: "#FFFFFF",
    

    
  },
  fonts: {
    heading_01: css`
      font-family: 'Pretendard';
      font-size: 2.2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
    `,
  }
};

export default theme;
