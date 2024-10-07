import styled from 'styled-components';

interface InputProps {
  isFocused: boolean;
}

export const Form = styled.form`
  position: relative;
  display: inline-block;
`;

export const Input = styled.input<InputProps>`
  width: 290px;
  padding: 15px;
  padding-right: 75px;
  font-size: 16px;
  border-radius: 10px;
  border: ${({ isFocused }) => (isFocused ? '1px solid #343845' : '1px solid #ccc')};
  background-color: ${({ isFocused }) => (isFocused ? '#DADDE0' : 'white')};
  outline: none;

  &:focus {
    background-color: #dadde0;
    border-color: #ba3a3b;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px 15px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 50px;
`;
