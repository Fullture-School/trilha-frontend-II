import React from 'react';

const Counter = props => {

  const { increment, decrement, total } = props;

  const onIncrement = () => {
    increment(total.amount+1);
  };

  const onDecrement = () => {
    decrement(total.amount-1);
  };

  return (
    <section>
      <button onClick={onIncrement}> + </button>
      <div>
        <p>{total.amount}</p>
        <p>{`${total.date.getFullYear()}/${total.date.getMonth()+1}/${total.date.getDate()}`}</p>
        <p>{`${total.date.getHours()}:${total.date.getMinutes()}:${total.date.getSeconds()}`}</p>
      </div>
      <button onClick={onDecrement}> - </button>
    </section>
  );
}

export default Counter;
