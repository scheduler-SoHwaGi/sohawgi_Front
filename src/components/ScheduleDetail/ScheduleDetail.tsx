import React from 'react';
import hamtori from '../../assets/images/hamtori.svg';
import * as S from './ScheduleDetail.style';

type Props = {
  month: number;
  day: number;
  dayOfWeek: string;
  title: string;
  onClick: () => void;
};

const ScheduleDetail = ({ month, day, dayOfWeek, title, onClick }: Props) => {
  return (
    <S.Container onClick={onClick}>
      <S.Image src={hamtori} alt="Hamtori" />
      <S.InfoContainer>
        <S.DateText>
          {month}월 {day}일 ({dayOfWeek})
        </S.DateText>
        <S.ContentText>{title}</S.ContentText>
      </S.InfoContainer>
    </S.Container>
  );
};

export default ScheduleDetail;
