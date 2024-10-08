import React, { useState } from 'react';
import { Sheet } from 'react-modal-sheet';

const BottomSheet: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open sheet</button>

      <Sheet 
        isOpen={isOpen} 
        onClose={() => setOpen(false)}
      >
        <Sheet.Container
          style={{
            width: '90vw',           // 너비를 뷰포트의 90%로 설정
            maxWidth: '500px',       // 최대 너비를 500px로 제한
            height: 'auto',          // 높이를 콘텐츠에 맞게 자동으로 설정
            maxHeight: '50vh',       // 최대 높이를 화면의 50%로 제한
            marginLeft: '1.13rem',   // 좌우 여백 설정
            marginRight: '1.13rem',
            marginBottom: '1.13rem', // 아래 여백 설정
            padding: '10px 20px 20px 20px',        // 내부 여백 설정
            boxSizing: 'border-box', // Padding을 포함한 전체 크기 설정
            overflowY: 'auto',       // 내용이 많을 경우 스크롤 가능하도록 설정
            borderRadius: '20px',    // 모서리를 둥글게 설정 (20px 값은 조정 가능)
          }}
        >
          <Sheet.Header />
          <Sheet.Content>
            <Sheet.Scroller>
              <div style={{ padding: 10 }}>This is the content of tdddddddddddhe bottom sheet.</div>
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
};

export default BottomSheet;
