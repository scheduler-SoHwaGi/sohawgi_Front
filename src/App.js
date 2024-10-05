// App.js
import React from 'react';
import { ThemeProvider } from 'styled-components'; // theme 사용을 위해
import styled from 'styled-components'; // styled-components 사용
import theme from './style/theme.ts';  // theme 사용을 위해

// StyledSpan 컴포넌트 정의
const StyledSpan = styled.span`
  ${({ theme }) => theme.fonts.heading_01};
  color: ${({ theme }) => theme.colors.bg};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <StyledSpan>안녕</StyledSpan> {/* StyledSpan 사용 */}
      </div>
    </ThemeProvider>
  );
}

export default App;
