import hamtori from '../../assets/images/hamtori.svg';
import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import * as S from './UserProfile.style';

const UserProfile = () => {
  return (
    <S.Container>
      <img src={hamtori} alt={'hamtori'} />
      <UserInfo />
    </S.Container>
  );
};
export default UserProfile;
