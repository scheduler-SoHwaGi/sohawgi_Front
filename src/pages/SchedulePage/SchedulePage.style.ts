// SchedulePage.style.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr; /* TextField와 ScheduleCard를 세로로 나열 */
  gap: 1rem; /* 각 요소 사이의 간격 */
  width: 100%;
  padding: 0rem; /* 전체 컨테이너의 내부 여백 */
  
`;
