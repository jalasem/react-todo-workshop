import StopButton from "./components/Button/StopButton";
import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <div
      style={{
        background: "yellow",
      }}
    >
      <TodoApp />
      <StopButton>Stop</StopButton>
    </div>
  );
};

export default App;
