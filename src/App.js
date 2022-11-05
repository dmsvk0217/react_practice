import "./App.css";
import React, { useState } from "react";

function initWork() {
  const initlist = [
    {
      name: "eun",
    },
  ];
  console.log("it is heavy work!");
  return initlist;
}

function App() {
  const [name, setname] = useState("");
  //initWork를 콜백으로 호출하여서 첫 랜더링 시에만 작동하도록 하기
  //그냥 함수를 넣게되면 state변경될때 마다 저 함수가 불리게 된다.
  const [list, setlist] = useState(() => initWork());

  const nameHandler = function (event) {
    setname(event.target.value);
  };

  const addHandler = function () {
    const newOne = {
      name: name,
    };
    setlist((preState) => {
      return [...preState, newOne];
    });
  };

  return (
    <div>
      <input type="text" onChange={nameHandler} />
      <button onClick={addHandler}>추가하기</button>
      {list.map((listOne, index) => {
        return <p key={index}>{listOne.name}</p>;
      })}
    </div>
  );
}

export default App;
