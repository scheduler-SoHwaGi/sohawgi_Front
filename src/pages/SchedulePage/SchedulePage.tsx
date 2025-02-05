import React, { useEffect, useState } from 'react';

import TextField from '../../components/TextField/TextField';
import ScheduleCard from '../../components/ScheduleCard/ScheduleCard';

import * as S from './SchedulePage.style';

const SchedulePage = () => {
  const [userInfo, setUserInfo] = useState();

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
      setUserInfo(info);
      localStorage.setItem('userID', JSON.stringify(info.userID));
      localStorage.setItem('accessToken', JSON.stringify(info.accessToken));
      localStorage.setItem('refreshToken', JSON.stringify(info.refreshToken));
      localStorage.setItem(
        'authorizationCode',
        JSON.stringify(info.authorizationCode),
      );
      return info;
    };
  }, []);

  return (
    <S.Container>
      <S.SchedulePageContent>
        <TextField />
        <ScheduleCard />
      </S.SchedulePageContent>
    </S.Container>
  );
};

export default SchedulePage;
