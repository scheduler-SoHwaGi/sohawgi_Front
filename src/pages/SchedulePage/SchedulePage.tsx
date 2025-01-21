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
