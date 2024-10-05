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
    Body_01: css`
      font-family: 'Pretendard';
      font-size: 19px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
    `,
    Body_02: css`
      font-family: 'Pretendard';
      font-size: 17px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
    `,
    Body_03: css`
      font-family: 'Pretendard';
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
    `,
    Body_04: css`
      font-family: 'Pretendard';
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
    `,
    Body_05: css`
      font-family: 'Pretendard';
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
    `,

  }
};

export default theme;
