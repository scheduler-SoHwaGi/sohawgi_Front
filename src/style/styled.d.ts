// src/style/styled.d.ts
import 'styled-components';
import { CSSProp } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      Gray_01: string;
      Gray_02: string;
      Gray_03: string;
      Gray_04: string;
      Gray_05: string;
      Gray_06: string;
      White: string;
    };
    fonts: {
      heading_01: CSSProp;
    };
  }
}
