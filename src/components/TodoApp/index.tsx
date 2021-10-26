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
    <div className="w-96 border-2 border-gray-500 mx-auto p-4 mt-4 rounded">
      <form onSubmit={handleNewTodo} className="flex mb-2">
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          className="border rounded flex-grow"
          placeholder="What needs to be done?"
        />
        <Button>Add todo</Button>
      </form>

      <div className="space-y-2">
        {todos.map((todo) => (
          <div key={`todo_${todo.id}`} className="flex space-x-2 items-center">
            <input
              checked={todo.completed}
              type="checkbox"
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              className={`flex-grow ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>
            <Button
              className="bg-[tomato] px-2 text-white capitalize rounded"
              onClick={() => removeTodo(todo.id)}
            >
              delete
            </Button>
          </div>
        ))}
        {todos.length === 0 && (
          <span className="block text-center text-gray-400 text-sm">
            No todos
          </span>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
