import styled from 'styled-components';

export const Container = styled.div`
  width: 91vw;           /* 너비를 뷰포트의 90%로 설정 */
  max-width: 500px;      /* 최대 너비를 500px로 제한 */
  height: auto;          /* 높이를 콘텐츠에 맞게 자동으로 설정 */
  max-height: 40vh;      /* 최대 높이를 화면의 40%로 제한 */
  margin-left: 1.13rem;  /* 좌우 여백 설정 */
  margin-right: 1.13rem;
  margin-bottom: 1.13rem; /* 아래 여백 설정 */
  padding: 10px 20px 20px 20px; /* 내부 여백 설정 */
  box-sizing: border-box; /* Padding을 포함한 전체 크기 설정 */
  overflow-y: auto;       /* 내용이 많을 경우 스크롤 가능하도록 설정 */
  border-radius: 20px;    /* 모서리를 둥글게 설정 */
`;

export const Content = styled.div`
  padding: 1.62rem 1.4rem ; /* 콘텐츠 내부 여백 설정 */
`;