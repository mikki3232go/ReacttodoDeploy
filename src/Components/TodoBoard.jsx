import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
  console.log(props.todoList);
  return (
    <div>
      <h1>Todo List </h1>
      {
        //자바스크립트 사용 Array 사용
        props.todoList.map((item) => 
          <TodoItem item={item} />
        )
      }
    </div>
  );
}
export default TodoBoard;
