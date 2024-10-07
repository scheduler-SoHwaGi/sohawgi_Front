// ScheduleCard.tsx
import React from 'react';
import ScheduleDetail from '../ScheduleDetail/ScheduleDetail.tsx'; // ScheduleDetail 컴포넌트 경로에 맞게 수정
import * as S from './ScheduleCard.style.ts';

const ScheduleCard = () => {
    return (
        <S.WrapperContainer>
            <S.Title>일정</S.Title> {/* Title 컴포넌트를 사용하여 스타일 적용 */}
            <S.GridContainer>
                {/* 여러 개의 ScheduleDetail 컴포넌트를 그리드로 나열 */}
                <ScheduleDetail />
                <ScheduleDetail />
                <ScheduleDetail />
                <ScheduleDetail />
            </S.GridContainer>
        </S.WrapperContainer>
    );
};

export default ScheduleCard;
