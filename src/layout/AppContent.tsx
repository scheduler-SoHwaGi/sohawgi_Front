import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import SchedulePage from '../pages/SchedulePage';
import PlusPage from '../pages/PlusPage/PlusPage';
import UsePolicyPage from '../pages/TermPage/UsePolicyPage';
import UserPrivacyPage from '../pages/TermPage/UserPrivacyPage';
import BottomNavi from '../components/BottomNavi/BottomNavi';

/**
 * Renders the main application layout with dynamic routing and conditional container height.
 *
 * Displays routed page content based on the current URL and always includes the bottom navigation bar. The container's minimum height adjusts depending on the current path and environment.
 */
export function AppContent() {
  const location = useLocation();
  const isDev = import.meta.env.DEV;

  const showBottomNavi =
    (!isDev && location.pathname === '/') || location.pathname === '/PlusPage';

  return (
    <div
      className={`w-full flex flex-col ${showBottomNavi ? 'min-h-[calc(100vh - 86px)]' : 'min-h-screen'}`}
    >
      <Routes>
        <Route path="/" element={<SchedulePage/>} />
        <Route path="/PlusPage" element={<PlusPage />} />
        <Route path="/info/usePolicy" element={<UsePolicyPage />} />
        <Route path="/info/privacy" element={<UserPrivacyPage />} />
      </Routes>
      <BottomNavi />
    </div>
  );
}

