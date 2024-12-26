import React from 'react';
import TextField from '../../components/TextField/TextField';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';
import * as S from './SchedulePage.style';

const SchedulePage = () => {
  return (
    <S.Container>
      <TextField />
      <ScheduleCard />
    </S.Container>
  );
};

export default SchedulePage;
