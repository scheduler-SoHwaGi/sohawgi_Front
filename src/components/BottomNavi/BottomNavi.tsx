import React from "react";
import styled from "styled-components";

// 하단바 스타일 정의
const BottomNavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 420px; /* 모바일 뷰의 최대 너비 */
  height: 60px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ccc;
`;

const BottomNavi: React.FC = () => {
  return (
    <BottomNavWrapper>
      <div>button1</div>
      <div>button2</div>
      <div>button3</div>
    </BottomNavWrapper>
  );
};

export default BottomNavi;
