import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default Counter;
