import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

interface TopSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const TopSheet: React.FC<TopSheetProps> = ({ isOpen, onClose, children }) => {
  // 스크롤 방지 처리
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 딤처리 배경 */}
          <div
            className="fixed top-0 left-0 w-screen h-[100dvh] bg-black bg-opacity-40 z-[1000]"
            onClick={onClose}
          />

          {/* TopSheet 본문 */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-[1010] 
                       bg-white rounded-b-[1.5rem] p-6 shadow-md 
                       flex flex-col justify-between h-[23.4375rem]"
          >
            {/* 콘텐츠 영역 */}
            <div className="flex-1 overflow-y-auto">
              {children}
            </div>

            {/* 하단 드래그 핸들 */}
            <div className="w-[90px] h-[6px] bg-gray-300 rounded-full mx-auto mt-4 mb-2" />
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default TopSheet;
