import hamtori from '../../assets/images/hamtori.svg';
import * as S from '../../pages/PlusPage/PlusPage.style';
import appleIcon from '../../assets/images/appleIcon.png';
import React from 'react';

const UserProfile = () => {
  return (
    <div>
      <img src={hamtori} alt={'hamtori'} />
      <S.UserIcon>
        <img src={appleIcon} alt={'appleIcon'} />
        <p>user_name</p>
      </S.UserIcon>
    </div>
  );
};
export default UserProfile;
