import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import theme from './style/theme.ts';
import GlobalStyle from './style/globalStyles.ts';
import BottomNavi from './components/BottomNavi/BottomNavi.tsx';

// 페이지 컴포넌트 import
import SchedulePage from './pages/SchedulePage.tsx';
import PlusPage from './pages/PlusPage.tsx';

// 상위 컨테이너 스타일
const Container = styled.div`
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

// 콘텐츠를 감싸는 래퍼에 패딩 적용
const ContentWrapper = styled.div`
  padding: 0 16px;
  flex: 1;
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
  right: 0;
  width: 100%;
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
      <Router> {/* BrowserRouter로 감싸기 */}
        <Container>
          <ContentWrapper>
            <Routes> {/* 기본 경로로 SchedulePage를 설정 */}
              <Route path="/" element={<SchedulePage />} />
              <Route path="/SchedulePage" element={<SchedulePage />} />
              <Route path="/PlusPage" element={<PlusPage />} />
            </Routes>
          </ContentWrapper>
          <BottomNavWrapper /> {/* 하단바를 배치 */}
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
