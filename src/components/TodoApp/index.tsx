import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../Button";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp = () => {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTask(e.target.value);
  const handleNewTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newTask.trim()) return;

    setTodos(
      todos.concat({ id: todos.length + 1, text: newTask, completed: false })
    );
    setNewTask("");
  };
  const toggleTodo = (id: number) =>
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;

        return todo;
      })
    );

  const removeTodo = (id: number) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div>
      <form onSubmit={handleNewTodo}>
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="What needs to be done?"
        />
        <button>Add todo</button>
      </form>

      <div>
        {todos.map((todo) => (
          <div key={`todo_${todo.id}`}>
            <input
              checked={todo.completed}
              type="checkbox"
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            {todo.completed && <span>✅</span>}
            <Button onClick={() => removeTodo(todo.id)}>delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
