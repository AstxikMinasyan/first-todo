import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState(todos);

  return (
    <div className="main_parent">
      <h1>Todo form</h1>
      <TodoForm
        setTodos={setTodos}
        todos={todos}
        filteredTasks={filteredTasks}
        setFilteredTasks={setFilteredTasks}
      />
      {todos.map((item) => (
        <div key={item.id}>
          <Todo
            todoItem={item}
            setTodos={setTodos}
            todos={todos}
            setFilteredTasks={setFilteredTasks}
          />
        </div>
      ))}
    </div>
  );
};
export default TodoWrapper;
