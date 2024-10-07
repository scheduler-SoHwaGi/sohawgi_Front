// ScheduleCard.style.ts
import styled from 'styled-components';

export const WrapperContainer = styled.div`
  display: grid;
  gap: 1.5rem; /* '일정' 텍스트와 그리드 사이 간격 */
  width: 100%;
  background-color: #f8f9fa; /* 배경 색상 추가 */
  padding: 1.88rem 1.69rem; /* 내부 여백 추가 */
  border-radius: 1.7rem; /* 모서리를 둥글게 */
`;

export const Title = styled.div`
  font-size: 1.5rem; /* 폰트 크기 */
  font-family: ${({ theme }) => theme.fonts.Body_01}; /* 테마에 정의된 폰트 스타일 사용 */
  color: ${({ theme }) => theme.colors.Grey_06}; /* 테마에 정의된 색상 사용 */
  font-weight: bold; /* 폰트 두께 설정 */
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* 한 열로 설정 */
  gap: 1rem; /* 각 항목 사이의 간격 */
  width: 100%;
`;
