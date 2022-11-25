import React from "react";
import ReactDOM from "react-dom/client";

/*
map함수 사용시 키값 지정하지 않으면 map의 두번째 인자의 인덱스 값을 자동으로 지정한다.
인덱스값을 키값으로 할 경우에 아이템의 순서가 변경되면 성능, state에 부정적인 영향을 미칠 수 있다.
*/
function List() {
  const list = [1, 2, 3, 4, 5];
  return (
    <div>
      {list.map((n) => {
        return <h1 key={n}>{n}</h1>;
      })}
    </div>
  );
}

export default List;
