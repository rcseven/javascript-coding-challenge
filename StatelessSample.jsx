// In functional components, state is managed using the useState hook.
import React, { useState } from "react";

// props in the argument
const ToggleSwitch = ({ title }) => {
  // useState initializes the state
  const [isTrue, setIsTrue] = useState(false);

  const handleClick = () => {
    // setIsTrue updates the state
    setIsTrue(isTrue + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{isTrue}</p>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};

export default ToggleSwitch;
