import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("[mount]클릭 횟수 : ", count);
    return () => {
      console.log("[unmount] 되었습니다.");
    };
  }, []);

  useEffect(() => {
    console.log("[count 변경]");
  }, [count]);

  useEffect(() => {
    console.log("[component update]");
  });
  /*
  useEffect : 사이드이펙트 관리하기 위한 훅.
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
