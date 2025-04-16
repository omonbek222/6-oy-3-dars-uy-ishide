import React, { useState } from "react";

function TodoItem({ todo, toggleTodo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (!editText.trim()) return;
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between border p-2 rounded">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {isEditing ? (
          <input
            className="border px-2 py-1 rounded"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <span
            className={`${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="text-green-600 hover:underline"
          >
            Saqlash
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 hover:underline"
          >
            Tahrirlash
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:underline"
        >
          ❌
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
