// src/style/styled.d.ts
import 'styled-components';
import { CSSProp } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      white: string;
    };
    fonts: {
      heading_01: CSSProp;
    };
  }
}
