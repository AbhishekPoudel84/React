// src/Todo.js
import { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setTask(todos[index]);
  };

  const cancelEditing = () => {
    setEditIndex(null);
    setTask("");
  };

  const saveEdit = (index) => {
    const newTodos = [...todos];
    newTodos[index] = task;
    setTodos(newTodos);
    setEditIndex(null);
    setTask("");
  };

  return (
    <div className="Todo">
      <h1>Todo App</h1>
      <div className="Top">
        <input
          type="text"
          className="input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {editIndex === null ? (
          <button className="button" onClick={addTodo}>
            Add
          </button>
        ) : (
          <>
            <button className="button" onClick={() => saveEdit(editIndex)}>
              Save
            </button>
            <button className="button" onClick={cancelEditing}>
              Cancel
            </button>
          </>
        )}
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="list-item">
            {editIndex === index ? (
              <input
                type="text"
                className="input"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            ) : (
              <span>{todo}</span>
            )}
            {editIndex === index ? (
              <>
                <button className="button" onClick={() => saveEdit(index)}>
                  Save
                </button>
                <button className="button" onClick={cancelEditing}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button className="button" onClick={() => startEditing(index)}>
                  Edit
                </button>
                <button className="button" onClick={() => removeTodo(index)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
