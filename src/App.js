import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import theme from './style/theme.ts';
import GlobalStyle from './style/globalStyles.ts';
import BottomNavi from './components/BottomNavi/BottomNavi.tsx';

// 상위 컨테이너 스타일
const Container = styled.div`
  max-width: 375px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh; /* 전체 화면을 채우도록 설정 */
`;

// 콘텐츠를 감싸는 래퍼에 패딩 적용
const ContentWrapper = styled.div`
  padding: 0 16px; /* 좌우 여백 적용 */
  flex: 1; /* 남은 공간을 차지하여 하단바 위에 위치 */
  overflow-x: hidden;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
`;

// 하단바 스타일
const BottomNavWrapper = styled(BottomNavi)`
  position: fixed;
  bottom: 0;
  left: 0;
  rigth: 0;
  width: 100%; /* 좌우 여백을 무시하고 전체 화면을 차지 */
  max-width: 420px;
  height: 60px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ccc;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <ContentWrapper>
          1234567890#1234567890#1234567890#1234567890#1234567890#1234567890#1234567890#1234567890#1234567890#1234567890#
        </ContentWrapper>
        <BottomNavWrapper /> {/* 하단바를 배치 */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
