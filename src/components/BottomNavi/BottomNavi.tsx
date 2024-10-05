import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './BottomNavi.style.ts';

const BottomNavi: React.FC = () => {
  return (
    <S.BottomNavWrapper>
      <div>
        <Link to="/">
          일정
        </Link>
      </div>
      <div>
        <Link to="/PlusPage">
          더보기
        </Link>
      </div>
    </S.BottomNavWrapper>
  );
};

export default BottomNavi;
