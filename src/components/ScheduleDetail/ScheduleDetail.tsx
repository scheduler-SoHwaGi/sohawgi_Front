import React from 'react';
import hamtori from '../../assets/images/hamtori.svg';
import * as S from './ScheduleDetail.style.ts';

const ScheduleDetail = () => {
    return (
        <S.Container>
            <S.Image src={hamtori} alt="Hamtori" />
            <S.InfoContainer>
                <S.DateText>9월 7일 (금)</S.DateText>
                <S.ContentText>일정입니다일정입니다</S.ContentText>
            </S.InfoContainer>
        </S.Container>
    );
};

export default ScheduleDetail;
