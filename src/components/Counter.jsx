import React from "react";

//react is hungry for state. Needs to know when data changes
//props are data a component doesn't own 
//state is data that belongs to the component

const Counter = (props) => {
  //need to move counter into useState
  // let counter = 0;

  const [count, setCount] = React.useState(0);

  const clickHandler = () => {
    setCount(count + 1);
    //using count += 1 will error out because count is a constant 
    // console.log(count);
    props.setMessage(`the current count is  ${count + 1}`)
    //passing function as prop and updates the parent message -- this is one behind. must add a +1 (behind due to state)
  };

  console.log("function was called");

  return (
    <div>
      <h2>Hello from Counter</h2>
      <h4>Parent Message: {props.parentMessage }</h4>
      <h2>Counter: {count} </h2>
      <button onClick={clickHandler}>Increment</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {props.children} {/* this allows anything put into counter at a higher level to get rendered, regardless of what it is */}
    </div>
  );
};

export default Counter;

//explore application (use react extension in dev tools) to see how first component has props and second component does not have props.
//can also pass functions because gunctions are just values in js

//left button and right button have slightly different behaviors that can be observed because of how they are being differently implemented 