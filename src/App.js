import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import theme from './style/theme.ts';
import GlobalStyle from './style/globalStyles.ts';
import BottomNavi from './components/BottomNavi/BottomNavi.tsx';

// 페이지 컴포넌트 import
import SchedulePage from '/Users/gunayeon/Documents/sohwagi/sohwagi/src/pages/SchedulePage/SchedulePage.tsx';
import PlusPage from './pages/PlusPage.tsx';

// 상위 컨테이너 스타일
const Container = styled.div`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

// 콘텐츠를 감싸는 래퍼에 패딩 적용
const ContentWrapper = styled.div`
  padding: 0 1.13rem;
  flex: 1;
  overflow-x: hidden;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
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
          <BottomNavi /> {/* 하단바를 배치 */}
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
