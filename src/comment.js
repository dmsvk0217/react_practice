import React from "react";

function Comment(props) {
  return (
    <>
      <span>{props.name}</span>
      <div>{props.comment}</div>
    </>
  );
}

export default Comment;
//module.exports = { Comment };
