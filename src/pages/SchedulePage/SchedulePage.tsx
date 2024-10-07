import React from "react";
import styled from 'styled-components';
import TextField from '../../components/TextField/TextField.tsx';
import ScheduleCard from "../../components/ScheduleCard/ScheduleCard.tsx";
import * as S from './SchedulePage.style.ts';

const SchedulePage = () => {
    return (
        <S.Container>
            <TextField />
            <ScheduleCard />
        </S.Container>
    );
};

export default SchedulePage;

