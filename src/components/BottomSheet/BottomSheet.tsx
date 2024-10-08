import React from 'react';
import { Sheet } from 'react-modal-sheet'; // 바텀시트 라이브러리
import * as S from './BottomSheet.style.ts'; // 스타일 파일 import

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose }) => {
  return (
    <Sheet 
      isOpen={isOpen} 
      onClose={onClose}
    >
      <S.Container> {/* 스타일 적용 */}
        <Sheet.Header />
        <Sheet.Content>
          <Sheet.Scroller>
            <S.Content>This is the content of the bottom sheet.</S.Content> {/* 스타일 적용 */}
          </Sheet.Scroller>
        </Sheet.Content>
      </S.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};

export default BottomSheet;
