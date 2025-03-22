import React from 'react';
import close from '../../assets/images/close.svg';
import warning from '../../assets/images/warning.svg';

const ToastBar = () => {
    return (
      <div className="w-[340px] px-[62x] bg-Grey_06 rounded-[10px] inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden">
      <div className="w-[310px] h-[30px] my-[16px] inline-flex justify-between items-center">
        {/* 왼쪽 경고 아이콘 + 텍스트 */}
        <div className="flex justify-start items-center gap-1.5">
          <div className="w-[30px] h-[30px] relative overflow-hidden">
            <img src={warning} alt="경고 아이콘" className="w-full h-full" />
          </div>
          <div className="w-[252px] text-White Content_01">
            에러 메세지 내용입니다
          </div>
        </div>

        {/* 닫기 버튼 */}
        <div className="w-[30px] h-[30px] relative overflow-hidden">
            <img src={close} alt="경고 아이콘" className="w-full h-full" />
          </div>
      </div>
    </div>
    )
  };
  export default ToastBar;