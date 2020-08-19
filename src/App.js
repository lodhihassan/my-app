import React, { useState } from "react";
import { Message } from "./Message.js";
import "./App.css";

function App() {
  let [count, setcount] = useState(0);
  let [color, setcolor] = useState(false)
  let [fcolor, setfcolor] = useState(false)
  // let [rcolor, setrcolor] = useState('red')
  return (
    <div className="App">
      <div className={`${color ? 'bgcolor' : 'bgcolorch'}`}>
        <Message counter={count} />

        <h3>
          your color is {`${fcolor ? 'red' : 'blue'}`}
        </h3>
        {/* <h3>counter value is : {count} </h3> */}
        <br />
        <button
          onClick={() => {
            setcount(++count);
          }}
        >
          For counter
      </button>
        <button onClick={() => {
          setcolor(!color)
          setfcolor(!fcolor)

        }}>
          change color
        </button>

      </div>
    </div>
  );
}

export default App;
