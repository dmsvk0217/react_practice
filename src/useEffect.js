import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("[mount]클릭 횟수 : ", count);
    return () => {
      console.log("[unmount] 되었습니다.");
    };
  }, []);
  /*
  의존성 타켓배열 비워두면 mount / unmount only
  아예 받지 않으면 모든업데이트시에 발동.
  */

  return (
    <div>
      <p>총 {count}번의 클릭을 했습니다.</p>
      <button onClick={() => setcount(count + 1)}>click</button>
    </div>
  );
}

export default Counter;
