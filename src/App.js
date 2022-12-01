import React from "react";
import "./App.css";
import { useState } from "react";

function Card(props) {
  return (
    <div className="cardbox">
      <div>{props.todo.comment}</div>
    </div>
  );
}

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, comment: "react 모의고사" },
    { id: 2, comment: "react 모의고사" },
    { id: 3, comment: "react 모의고사" },
  ]);
  const [comment, setComment] = useState("");
  const addCommentHandler = () => {
    const list = {
      id: todos.length + 1,
      comment: comment,
    };
    setTodos([...todos, list]);
  };

  return (
    <div className="main">
      <div className="center">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="inputbox"
        />
        <button onClick={addCommentHandler} className="btn">
          추가하기
        </button>
      </div>
      {todos.map((todo) => {
        return <Card todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default App;
