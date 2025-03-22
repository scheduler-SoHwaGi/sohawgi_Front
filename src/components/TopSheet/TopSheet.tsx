import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TopSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const TopSheet: React.FC<TopSheetProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 뒷배경 딤처리 */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={onClose}
          />
          {/* Top Sheet */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bg-white rounded-b-[1.5rem] p-6 z-50 shadow-md"
          >
            {/* 드래그 핸들 */}
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TopSheet;
