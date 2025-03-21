import React, { useEffect } from 'react';

import TextField from '../../components/TextField/TextField';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';

import useSchedules from '../../hooks/useSchedule';

const SchedulePage = () => {
  const { postSchedule, setSchedule, deleteSchedule, scheduleList, schedule } =
    useSchedules();
  useEffect(() => {
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.webViewReady
    ) {
      window.webkit.messageHandlers.webViewReady.postMessage('WebViewReady');
    }

    window.receiveUserInfo = function (info) {
      console.log('Received info:', info);

      localStorage.setItem('userID', JSON.stringify(info.userID));
      localStorage.setItem(
        'accessToken',
        JSON.stringify(info.accessToken).replace(/"/g, ''),
      );
      localStorage.setItem(
        'refreshToken',
        JSON.stringify(info.refreshToken).replace(/"/g, ''),
      );
      localStorage.setItem(
        'authorizationCode',
        JSON.stringify(info.authorizationCode),
      );
      return info;
    };
  }, []);

  return (
    <div className="flex w-full flex-col px-18 bg-Grey_01 h-full min-h-[calc(100vh-86px)]">
      <TextField
        postSchedule={postSchedule}
        schedule={schedule}
        setSchedule={setSchedule}
      />
      <ScheduleCard
        deleteSchedule={deleteSchedule}
        scheduleList={scheduleList}
      />
    </div>
  );
};

export default SchedulePage;
