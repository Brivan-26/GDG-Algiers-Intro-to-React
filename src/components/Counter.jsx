import { useState, useEffect } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const updateCounter = () => {
        setCounter(counter + 1);
    };
    
    useEffect(() => {
      console.log("hello world");
    }, [counter]);
  return (
    <>
      <h1>counter value: {counter}</h1>
      <button onClick={updateCounter}>Increment</button>
    </>
  );
};

export default Counter;
