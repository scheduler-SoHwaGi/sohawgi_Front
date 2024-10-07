import React from "react";
import styled from 'styled-components';
import TextField from '../components/TextField/TextField.tsx';
import ScheduleDetail from '../components/ScheduleDetail/ScheduleDetail.tsx';

const SchedulePage = () => {
    return (
        <Container>
        
            <ScheduleDetail></ScheduleDetail>
        </Container>
    );
};

// 스타일 컴포넌트
const Container = styled.div`
  display: flex;
  justify-content: center; /* 가로축 가운데 정렬 */
  padding: 0; /* 화면 양쪽에 여백을 유지 */
  width: 100%; /* Container를 화면 전체 너비로 설정 */
`;

export default SchedulePage;
