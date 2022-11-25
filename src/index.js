import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Comment from "./comment";
import Counter from "./useEffect";
import Conditional from "./conditional";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <Comment name="은총" comment="안녕하세요 은총입니다." />
    <Comment name="은총1" comment="안녕하세요 은총입니다.1" />
    <Comment name="은총2" comment="안녕하세요 은총입니다.2" /> */}
    <Conditional />
  </>
);
