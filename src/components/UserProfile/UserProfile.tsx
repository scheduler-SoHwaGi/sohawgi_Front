import hamtori from '../../assets/images/hamtori.svg';
import React from 'react';
import UserInfo from './UserInfo/UserInfo';

const UserProfile = () => {
  return (
    <div>
      <img src={hamtori} alt={'hamtori'} />
      <UserInfo />
    </div>
  );
};
export default UserProfile;
