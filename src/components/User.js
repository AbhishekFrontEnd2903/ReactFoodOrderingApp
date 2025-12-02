import React, { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(3);
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Designation: Developer</h2>
      <h3>Mail: abhishek@gmail.com</h3>
      <h1>count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        function increase
      </button>
      <h1>count2:{count2}</h1>
    </div>
  );
};

export default User;
