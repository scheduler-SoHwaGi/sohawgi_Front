import appleIcon from '../../../assets/images/appleIcon.png';
import * as S from './UserInfo.style';
import React from 'react';

const UserInfo = () => {
  return (
    <div>
      <div>구나연</div>
      <S.InfoContainer>
        <S.appleImg src={appleIcon} alt={'appleIcon'} />
        <div>abc@naver.com</div>
      </S.InfoContainer>
    </div>
  );
};
export default UserInfo;
