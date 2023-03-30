import React from "react";
import { Button } from "react-bootstrap";
const Message = (props) => {
  return (
    <div>
      <Button>{props.name}</Button>
    </div>
  );
};

export default Message;
