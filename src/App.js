import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import theme from './style/theme.ts';
import GlobalStyle from './style/globalStyles.ts';
import BottomNavi from './components/BottomNavi/BottomNavi.tsx';

// 페이지 컴포넌트 import
import SchedulePage from './pages/SchedulePage/SchedulePage.tsx';
import PlusPage from './pages/PlusPage/PlusPage.tsx';

// 상위 컨테이너 스타일
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

// 콘텐츠를 감싸는 래퍼에 패딩 적용
const ContentWrapper = styled.div`
  //padding: 0 1.13rem;
  //width: 100%;
  //max-width: 450px;
  //flex: 1;
  //overflow-x: hidden;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  min-width: 340px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Container>
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<SchedulePage />} />
              <Route path="/SchedulePage" element={<SchedulePage />} />
              <Route path="/PlusPage" element={<PlusPage />} />
            </Routes>
          </ContentWrapper>
          <BottomNavi />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
