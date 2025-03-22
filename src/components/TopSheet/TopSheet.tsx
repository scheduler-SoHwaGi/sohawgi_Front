import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

interface TopSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const TopSheet: React.FC<TopSheetProps> = ({ isOpen, onClose}) => {
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
                       bg-white rounded-b-[1.5rem] p-6 shadow-none 
                       flex flex-col justify-between h-[23.5625rem]"
          >
            {/* 콘텐츠 영역 (년/월 선택) */}
            <div className="flex-1 overflow-y-auto mx-[0.8rem]">

                {/* 여백 */}
                <div className="h-[2.75rem]"></div>

                {/* 상단 제목 */}
                <div className="text-Grey_06 body_01 pt-[1.25rem] pb-[0.5rem]">
                    년/월 선택
                </div>

                {/* 콘텐츠 (date picker_스크롤 영역) */}
                <div className="h-[12rem]">
                    

                </div>

                {/* 하단 select 버튼 */}
                <div>
                    <button className="w-full h-[3.3125rem] rounded-[0.5rem] bg-Grey_06">
                        <div className="text-white body_03">
                            완료
                        </div>

                    </button>
                

                </div>
              
            </div>

            {/* 하단 드래그 핸들 */}
            <div className="w-[2.875rem] h-[0.3125rem] bg-Grey_02 rounded-full mx-auto mt-4 mb-2" />
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default TopSheet;
