import React, { useState } from 'react';
import ScheduleDetail from '../ScheduleDetail/ScheduleDetail.tsx'; // ScheduleDetail 컴포넌트 경로에 맞게 수정
import BottomSheet from '../BottomSheet/BottomSheet.tsx'; // BottomSheet 컴포넌트 불러오기
import * as S from './ScheduleCard.style.ts';

const ScheduleCard = () => {
  const [isSheetOpen, setSheetOpen] = useState<boolean>(false);

  const handleSheet = () => {
    setSheetOpen(!isSheetOpen);
  };

  return (
    <S.WrapperContainer>
      <S.Title>일정</S.Title> {/* Title 컴포넌트를 사용하여 스타일 적용 */}
      <S.GridContainer>
        {/* 여러 개의 ScheduleDetail 컴포넌트를 그리드로 나열 */}
        <div onClick={handleSheet}>
          <ScheduleDetail />
        </div>
        <div onClick={handleSheet}>
          <ScheduleDetail />
        </div>
        <div onClick={handleSheet}>
          <ScheduleDetail />
        </div>
        <div onClick={handleSheet}>
          <ScheduleDetail />
        </div>
        <div onClick={handleSheet}>
          <ScheduleDetail />
        </div>
        <div onClick={handleSheet}>
          <ScheduleDetail />
        </div>
        <div onClick={handleSheet}>
          <ScheduleDetail />
        </div>
        <div onClick={handleSheet}>
          <ScheduleDetail />
        </div>
        <div onClick={handleSheet}>
          <ScheduleDetail />
        </div>
      </S.GridContainer>

      {/* 바텀시트 컴포넌트 */}
      <BottomSheet isOpen={isSheetOpen} onClose={handleSheet} />
    </S.WrapperContainer>
  );
};

export default ScheduleCard;

