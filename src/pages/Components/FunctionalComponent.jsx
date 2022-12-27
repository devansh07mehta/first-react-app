import React, { useState } from "react";
import BaseHoc from "../../hoc/BaseHoc";

// function FunctionalComponent() {
const FunctionalComponent = (props) => {
  const [count, setCount] = useState(0); // by default the count starts with 0 bcauz of userState(0)

  const sub = () => {
    setCount(count - 1);
  };

  const [changeName, setChangeName] = useState("");
  
  const { name, height, company, setName } = props;
  // We r destructuring the keys from props since props is an object & using the values stored in those keys.
  // Now we don't need to write props.key again & again to access the arguments passed from the parent component to the child component


  return (
    <div>
      <h1>Functional Component</h1>
      <p>This is from our functional component</p>
      <br />
      <button onClick={() => setCount(count + 1)}>
        Click on me to increment the count
      </button>
      <br />
      <button onClick={sub}>Click on me to decrement the count</button>
      <h2>{count}</h2>
      <p>
        My name is {name}, my height is {height} and I work for {company}
      </p>
      {/* <input type="text" onChange={(e) => console.log(e.target.value)} />{" "} */}
      {/* Ignore {" "} */}
      {/* Creating and triggering events */}
      <input type="text" onChange={(e) => setChangeName(e.target.value)} />
      <button onClick={() => setName(changeName)}>Change name</button>
    </div>
  );
};

export default BaseHoc(FunctionalComponent);
