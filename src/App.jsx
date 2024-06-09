import "./App.css";
import React, { useState } from "react";
import TodoBoard from "./Components/TodoBoard";

//1. 인풋창이 있고 버튼이 있다.
//2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가된다.
//3. 아이템 삭제 버튼을 누르면 삭제가 가능하다.
function App() {
  const [inputVal, setInputVal] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    console.log("입력한 값", inputVal);
    setTodoList([...todoList, inputVal]); //...배열에 추가
  };
  return (
    <main>
      <input
        value={inputVal}
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setInputVal(e.target.value); //렌더링 후 값 업데이트
          console.log("useState", inputVal);
        }}
      />
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList} />
    </main>
  );
}
export default App;
