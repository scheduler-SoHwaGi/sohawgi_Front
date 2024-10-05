// theme.ts
import { DefaultTheme, css } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    bg: '#F1F4F5',
    white: '#FFFFFF'
    
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
