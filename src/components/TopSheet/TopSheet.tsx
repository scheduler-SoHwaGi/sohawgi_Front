import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

interface TopSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const TopSheet: React.FC<TopSheetProps> = ({ isOpen, onClose, children }) => {
  // 배경 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // 서버 사이드 렌더링 방지
  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 딤처리 배경 */}
          <div
            className="fixed bg-black bg-opacity-40"
            style={{
              top: 0,
              left: 0,
              width: '100vw',
              height: '100dvh',
              zIndex: 1000,
            }}
            onClick={onClose}
          />

          {/* TopSheet 본문 */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bg-white rounded-b-[1.5rem] p-6 shadow-md"
            style={{
              zIndex: 1010,
            }}
          >
            {/* 드래그 핸들 */}
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body // Portal로 body 하단에 렌더링 (이거 빼면 바텀시트 안 가려짐)
  );
};

export default TopSheet;
