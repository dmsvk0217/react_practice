import React, { useState } from "react";

function Conditional() {
  const [isLogin, setisLogin] = useState(true);

  const IsLoginhandler = function (a) {
    setisLogin(!isLogin);
    console.log("a : ", a);
  };
  if (isLogin === true)
    return (
      <>
        <div>환영합니다 고객님.</div>
        <button onClick={IsLoginhandler}>버튼</button>
      </>
    );
  return (
    <>
      <div>로그인이 필요합니다.</div>
      <button onClick={() => setisLogin(!isLogin)}>버튼</button>
    </>
  );
}

export default Conditional;
