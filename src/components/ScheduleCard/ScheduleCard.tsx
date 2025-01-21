import { useState, useEffect } from 'react';
import ScheduleDetail from '../ScheduleDetail/ScheduleDetail'; // ScheduleDetail 컴포넌트 경로에 맞게 수정
import BottomSheet from '../BottomSheet/BottomSheet'; // BottomSheet 컴포넌트 불러오기
import * as S from './ScheduleCard.style';

interface Schedule {
  scheduleId: number;
  title: string;
  month: number;
  day: number;
  dayOfWeek: string;
}

const ScheduleCard = () => {
  const [isSheetOpen, setSheetOpen] = useState<boolean>(false);
  const [scheduleList, setScheduleList] = useState<Schedule[]>([]);

  const handleSheet = () => {
    setSheetOpen(!isSheetOpen);
  };

  const getSchedules = async () => {
    try {
      const response = await fetch(`${process.env.BASE_SERVER_URL}/schedules`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-ACCESS-TOKEN': `${process.env['X-ACCESS-TOKEN']}`,
          'X-REFRESH-TOKEN': `${process.env['X-REFRESH-TOKEN']}`,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      console.log(response);
      setScheduleList(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSchedules();
  }, []);

  return (
    <S.WrapperContainer>
      <S.Title>일정</S.Title> {/* Title 컴포넌트를 사용하여 스타일 적용 */}
      <S.GridContainer>
        {/* 여러 개의 ScheduleDetail 컴포넌트를 그리드로 나열 */}
        {scheduleList.map((schedule) => (
          <div key={schedule.scheduleId}>
            <ScheduleDetail
              title={schedule.title}
              day={schedule.day}
              dayOfWeek={schedule.dayOfWeek}
              month={schedule.month}
            />
          </div>
        ))}
      </S.GridContainer>
      {/* 바텀시트 컴포넌트 */}
      <BottomSheet isOpen={isSheetOpen} onClose={handleSheet} />
    </S.WrapperContainer>
  );
};

export default ScheduleCard;
