import React, { useEffect } from 'react';

import TextField from '../../components/TextField/TextField';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';

import useSchedules from '../../hooks/useSchedule';

const SchedulePage = () => {
  const { postSchedule } = useSchedules();

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
    <div className="flex w-full flex-col px-18 bg-Grey_01 h-full min-h-[calc(100vh-86px)] no-scrollbar">
      <TextField postSchedule={postSchedule} />
      <ScheduleCard />
    </div>
  );
};

export default SchedulePage;
