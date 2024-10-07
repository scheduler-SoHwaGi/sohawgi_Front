import styled from 'styled-components';

interface InputProps {
  isFocused: boolean;
}

export const Form = styled.form`
  position: relative;
  display: inline-block;
`;

export const Input = styled.input`
  width: 250px;
  padding: 15px;
  padding-right: 75px;
  font-size: 16px;
  border-radius: 10px;
  outline: none;
  justify-content: center;
  align-items: center;

  /* 기본 상태 스타일 */
  border: 1px solid ${({ theme }) => theme.colors.Grey_02};
  background-color: ${({ theme }) => theme.colors.Grey_02};

  /* 포커싱 상태일 때 스타일 */
  &:focus {
    background-color: ${({ theme }) => theme.colors.Grey_03};
    border-color: ${({ theme }) => theme.colors.Grey_06};
  }
`;


export const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.31rem 0.62rem;
  background-color: ${({ theme }) => theme.colors.Grey_06};
  color: ${({ theme }) => theme.colors.White};
  border: none;
  border-radius: 1.875rem;
  font-size: ${({ theme }) => theme.fonts.Body_04};
`;
