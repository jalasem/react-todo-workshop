import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
  border-color: 2px solid
    ${(props: any) => (props.primary ? "palevioletred" : "white")};
  color: ${(props: any) => (props.primary ? "white" : "palevioletred")};

  &:hover {
    border: 1px solid;
  }
`;

export const TomatoButton = styled(StyledButton)`
  color: tomato;
  border-color: tomato;
`;

const Button = (props: any) => <StyledButton {...props} />;

export default Button;
