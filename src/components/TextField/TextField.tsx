import React, { useState } from 'react';

import * as S from './TextField.style';

const TextField: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [schedule, setSchedule] = useState<string>('');

  const postSchedule = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const response = await fetch(`${process.env.BASE_SERVER_URL}/schedules`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-ACCESS-TOKEN': `${process.env['X-ACCESS-TOKEN']}`,
          'X-REFRESH-TOKEN': `${process.env['X-REFRESH-TOKEN']}`,
        },
        credentials: 'include',
        body: JSON.stringify({ text: schedule }),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log('response', data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Form>
      <S.Input
        type="text"
        placeholder="일정을 입력하세요"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setSchedule(e.target.value)}
      />
      <S.Button type="submit" onClick={postSchedule}>
        등록
      </S.Button>
    </S.Form>
  );
};

export default TextField;
