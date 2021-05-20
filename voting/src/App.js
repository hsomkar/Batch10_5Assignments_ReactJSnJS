import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";

import "./App.css";

const App = () => {
  //  Counter initialized to 0
  const [counter, setCounter] = useState(0);

  // increment the counter
  const increase = () => {
    setCounter(counter + 1);
  };
  // reset the counter
  const reset = () => {
    setCounter(0);
  };
  // decrement the counter
  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
<ListGroup variant="flush">
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
  );
};

export default App;
