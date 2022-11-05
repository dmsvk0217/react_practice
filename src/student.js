import React from "react";

function student({ name }) {
  return (
    <div>
      <span>{name}</span>
      <button>삭제</button>
    </div>
  );
}

export default student;
