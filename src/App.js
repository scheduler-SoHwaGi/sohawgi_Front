import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import theme from './style/theme.ts';
import GlobalStyle from './style/globalStyles.ts'; // GlobalStyle import

// WebViewContainer 스타일 컴포넌트 정의
const WebViewContainer = styled.div`
  max-width: 375px; /* 모바일 뷰의 최대 너비 */
  width: 100%; /* 부모 요소의 너비를 가득 채우도록 설정 */
  overflow-x: hidden; /* 수평 스크롤 방지 */
  word-wrap: break-word; /* 단어가 길어지면 자동으로 줄바꿈 */
  word-break: break-all; /* 단어나 숫자가 길어지면 줄바꿈 */
  white-space: normal; /* 기본적인 줄바꿈 규칙을 따름 */
 
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle /> {/* 글로벌 스타일 적용 */}
      <WebViewContainer>
        1234567890#1234567890#1234567890#1234567890#1234567890#1234567890#1234567890#1234567890#1234567890#1234567890#
      </WebViewContainer>
    </ThemeProvider>
  );
}

export default App;
