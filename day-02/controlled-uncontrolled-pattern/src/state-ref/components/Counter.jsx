import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-neutral-800">
        Counter: {count}
      </h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 transition-colors duration-300"
        onClick={increaseCount}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
