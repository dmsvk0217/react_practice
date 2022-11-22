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

/*
jsx의 역할
html code -> js code 변환
js에서는 React.createElement()로 element를 생성한다.

react특징

- view 자체에 초점이 맞춰져 있다. 앵귤러와 같이 디자인 패턴이 존재하는 것이 아니라 . 그저 뷰에만 초점이 맞춰져있다.그래서 dom 컨트롤과 응답,api 처리에만 신경을 쓴다.
- 선언적 특징을 갖는다. (for는 명령형, map은 선언형.) → 정확히는 뭐가다른지 모르겠음 그냥 감으로.
- 뷰의 갱신이 발생할 경우 페이지 전체를 리로드하는 것이 아니라 가장돔을 이용해서 특정 부분만 업데이트하는 것이 장점이다. 빠르다!
- js의존도가 커지고 어플리케이션 규모가 커질 수록 체계가 필요.
- 컴포넌트 기반 재사용성 강화
- 커뮤니티가 거대함. big tech 기업 facebook의 지원을 받음.

jsx도 js이기 때문에 onClick같은거 구현할때 인자로 함수실행하는 게 아니라 함수를 전달한다. func() X → func

왜냐면 js라서 페이지 랜더링시에 스캔을 하게 되는데 그때 함수가 들어가 있으면 실행이되기 때문에 페이지 로딩하기만 하면 무조건 실행이된다.

리엑트 lifecycle

1. mount
- constructor → render → compenentDidmount
- compenentDidmount은 (첫로딩시 한번만 실행된다.)

2. update
- render → compenentDidmount(전state와 비교작업 등)
- 업데이트 시에도 render가 불리기 때문에 render에 setstate나 props 조작을 할 경우 무한루프에 걸릴 수 있다.
- 업데이트 기준은 ONLY state,props 변경감지이다. + forceUpdate(강제로 랜더링하는 메소드라고 함.)

3. unmount 
- compenentWillunmount (변수 할당해제 작업 등)

render

- render는 jsx를 실제 html로 1)변환해서 브라우저에 2)랜더링하는 작업을 수행한다.
- 보통 데이터 가공작업을 render에서 한다. (setstate사용X)
- render안에서 직접 dom요소를 접근하는 것은 불가능하다.

*/
