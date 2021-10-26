- Intro
- Prop-based styling e.g <Button padding="12px 24px">
- Grouping prop-based styling
- Styles inheritance - <TomatoButton>click me</TomatoButton>
- sass-like styling
- globalStyle

```tsx
import styled from "styled-components";

const StyledButton = styled.button`
  background: #ccd;
  color: #333;
  border: 0;
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;

const Button = (props) => <StyledButton {...props} />;
export default Button;
```

passing style as props

```tsx
import styled from "styled-components";

const StyledButton = styled.button`
  background: #ccd;
  color: #333;
  border: 0;
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;

const Button = (props) => <StyledButton {...props} />;

<Button padding="1rem 2rem">Click me</Button>;

// code above won't work until we handle it

const StyledButton = styled.button`
  background: #ccd;
  color: #333;
  border: 0;
  border-radius: 5px;
  padding: ${(props) => props.padding || "0.5rem 1rem"};
`;
```

```tsx
import styled from "styled-components";

const StyledTomato = styled(StyledButton)`
  background: tomato;
  color: white;
`;
```

Grouping prop-based styling

```tsx
import styled from "styled-components";

const StyledButton = styled.button`
  background: #ccd;
  color: #333;
  border: 0;
  border-radius: 5px;
  padding: ${(props) => props.padding || "0.5rem 1rem"};
  ${(props) =>
    props.primary &&
    css`
      background: tomato;
      color: white;
    `}
`;
```

styles inheritance (variants)

```tsx
import styled from "styled-components";

const TomatoButton = styled(StyledButton)`
  background: tomato;
  color: white;
`;
```

sass-like styling

```tsx
import styled from "styled-components";

const TomatoButton = styled(StyledButton)`
  background: tomato;
  color: white;

  &:hover {
    text-decoration: underline;
  }

  span {
    font-size: 1rem;
    margin-left: 0.5rem;
  }
  svg {
    height: 1rem;
    width: 1rem;
  }
`;

const App = () => (
  <>
    <TomatoButton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>click me</span>
    </TomatoButton>
  </>
);
```

- globalStyle

```tsx
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <TomatoButton>click me</TomatoButton>
    </>
  );
};
```
