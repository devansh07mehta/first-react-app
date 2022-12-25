import React, { useState } from "react";

// function FunctionalComponent() {
const FunctionalComponent = (props) => {
  const [count, setCount] = useState(0); // by default the count starts with 0 bcauz of userState(0)
  return (
    <div>
      <p>This is from our functional component</p>
      <br />
      <button onClick={() => setCount(count + 1)}>
        Click on me to increment the count
      </button>
      <br />
      <button onClick={() => setCount(count - 1)}>
        Click on me to decrement the count
      </button>
          <h2>{count}</h2>
          <p>My name is {props.name}, my height is {props.height} and I work for { props.company}</p>
    </div>
  );
};

export default FunctionalComponent;
