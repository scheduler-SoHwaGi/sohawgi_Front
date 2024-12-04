import React, { useState } from 'react';
import * as S from './TextField.style';

const TextField: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.Form>
      <S.Input
        type="text"
        placeholder="일정을 입력하세요"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        //isFocused={isFocused}
      />
      <S.Button type="submit">등록</S.Button>
    </S.Form>
  );
};

export default TextField;
