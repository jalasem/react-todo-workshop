import styled from "styled-components";
import Button from ".";

const StyledStopButton = styled(Button)`
  border: 2px solid tomato;
  display: flex;
  align-items: center;

  svg {
    height: 1rem;
    margin-right: 0.5rem;
  }
  span {
    font-size: 1rem;
  }
`;

const StopButton = (props: any) => (
  <StyledStopButton {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
        clipRule="evenodd"
      />
    </svg>
    <span>Stop</span>
  </StyledStopButton>
);

export default StopButton;
