import React from "react";
import "./App.css";
import Counter from "./components/Counter";

const App = () => {
  const [message, setMessage] = React.useState(`hello from parent.` );
  //can add message as an attribute in jsx. don't need to setMessage because we won't change it
  //create setMessage function and pass it down to child. within Counter it gets called and forces a rerender with a new message 
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Counter parentMessage={message} another="whatever" setMessage= {setMessage}>
        <div>
          <h2>I am props.children</h2>
        </div>
      </Counter>
      <Counter />
    </div>
  );
};

export default App;


//jsx can only have one parent element to return something
//fragment can take the place outside of outer wrapping div -- import {fragment} from react - it serves as a parent but won't output to dom