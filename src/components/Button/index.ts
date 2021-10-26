import styled, { css } from "styled-components";

const Button = styled.button`
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: ${({ padding }: any) => padding || "0.25rem 1rem"};

  &:hover {
    background-color: #333;
    color: #ccc;
  }

  ${(props: any) =>
    props.primary &&
    css`
      background: tomato;
      color: white;

      &:hover {
        border: 2px solid tomato;
        color: tomato;
        background: white;
      }
    `}
`;

export default Button;
