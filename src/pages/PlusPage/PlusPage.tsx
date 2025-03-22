import React, { useEffect, useState } from 'react';
import { api } from '../../utils/axios';

// Import Components
import UserProfile from '../../components/UserProfile/UserProfile';
import AddPageContainer from '../../components/AddPageContainer/AddPageContainer';
import VersionInfo from '../../components/VersionInfo/VersionInfo';
import ToastBar from '../../components/ToastBar/error'
import TopSheet from '../../components/TopSheet/TopSheet'


interface UserInfo {
  name: string;
  email: string;
}

const PlusPage = () => {
  const addPageInfoTitles = ['서비스 이용약관', '개인정보 처리방침'];
  const addPageSettingTitles = ['로그아웃', '회원탈퇴'];
  const [user, setUser] = useState<UserInfo | null>(null);
  const [showSheet, setShowSheet] = useState(false);

  const getUserInfo = async () => {
    try {
      const response = await api.get('/users/me');
      setUser(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="bg-white w-full h-full min-h-[calc(100vh-86px)]">
      <div className="flex flex-col pl-17 pt-80 pr-17">
        <UserProfile name={user?.name} email={user?.email} />
        <div className="flex flex-col gap-[2.3125rem]">
          <AddPageContainer title="정보" contentTitles={addPageInfoTitles} />
          <AddPageContainer title="설정" contentTitles={addPageSettingTitles} />
        </div>
        <VersionInfo />
      </div>
      {/* 탑시트 열기 버튼 */}
    <div className="flex justify-center mt-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setShowSheet(true)}
      >
        탑시트 열기
      </button>
    </div>

    {/* TopSheet 컴포넌트 직접 렌더링 */}
    <TopSheet isOpen={showSheet} onClose={() => setShowSheet(false)} />
      
      
    </div>

    
  );
};

export default PlusPage;
