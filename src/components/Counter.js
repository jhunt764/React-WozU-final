import React from 'react';

const Counter = ({ count, count2, onDecrement, onIncrement, onInputNumberChange, numberInputted, onInputNumber }) => {

  return (
    <div id="div1">
      <div id="div2">
        <button className="buttons" onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button className="buttons" onClick={onIncrement}>+</button>
        <br />
        <h4 id="header2">Increment & Decrement buttons have been clicked: {count2} </h4>
        <input type="text" onChange={event => onInputNumberChange(event.target.value)} value={numberInputted} />
        <button className="buttons" onClick={onInputNumber}>Change Count Number</button>
      </div>
    </div>
  );
}


export default Counter;