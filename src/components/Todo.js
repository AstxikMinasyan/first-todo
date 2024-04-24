import React, { useState } from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Todo = ({ todoItem, setTodos, todos }) => {
  const [updateId, setUpdateId] = useState("");
  const [inputValue, setInputValue] = useState(todoItem.text);
  const [isClicked, setIsClicked] = useState(false);

  const deleteItem = (id) => {
    confirmAlert({
      title: 'Confirm Deletion',
      message: 'Do you want to delete this task?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            setTodos((old) => [...old.filter((i) => i.id !== id)]);
          },
        },
        {
          label: 'No',
          onClick: () => console.log('Delete canceled.'),
        },
      ],
    });
  };

  const saveChanges = (id) => {
    const updatedTodos = todos.map((i) => {
      if (i.id === updateId) {
        i.text = inputValue;
      }
      return i;
    });
    setTodos([...updatedTodos]);
    setUpdateId("");
  };

  const handleTextClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="add_input">
      <input type="checkbox" checked={isClicked} onClick={handleTextClick} />
      {updateId === todoItem.id ? (
        <>
          <input
            value={inputValue}
            onChange={(ev) => setInputValue(ev.target.value)}
          />
        </>
      ) : (
        <p
          className={`text_item ${isClicked ? "clicked" : ""}`}
          // onClick={handleTextClick}
          style={{ marginRight: "20px" }}
        >
          {todoItem.text}
        </p>
      )}
      {updateId === todoItem.id ? (
        <button className="btn update-btn" onClick={() => saveChanges(todoItem.id)}>
          Save changes
        </button>
      ) : (
        <button className="btn" onClick={() => setUpdateId(todoItem.id)}>
          Update
        </button>
      )}
      <button className="btn" onClick={() => deleteItem(todoItem.id)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
