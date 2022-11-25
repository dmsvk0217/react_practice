import React, { useState } from "react";

function Conditional() {
  const [isLogin, setisLogin] = useState(true);
  const [count, setcount] = useState(1);

  const IsLoginhandler = function (a) {
    setisLogin(!isLogin);
    console.log("a : ", a);
  };
  const LoginComponent = (
    <div>
      {isLogin && <div>환영합니다 고객님.</div>}
      <div>환영합니다 고객님.</div>
      <button onClick={IsLoginhandler}>버튼</button>
    </div>
  );
  const LogoutComponent = (
    <div>
      {isLogin && <div>환영합니다 고객님.</div>}
      <div>로그인이 필요합니다. 고객님.</div>
      <button onClick={IsLoginhandler}>버튼</button>
    </div>
  );

  return <div>{isLogin ? LoginComponent : LogoutComponent}</div>;
}

export default Conditional;

/*
conditional rendering 을 위한 element variable
element variable을 간견하게 작성하기 위한 inline condition
*/
