import { useRef, useState } from "react";

const CounterWithRef = () => {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const incrementRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Count Ref: ", countRef.current);
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <h2 className="text-2xl">Ref Count: {countRef.current}</h2>
        <button className="bg-blue-500 p-2" onClick={incrementRef}>
          Increment Ref Count
        </button>
      </div>
      <div>
        <h2 className="text-2xl">Render Count: {renderCount}</h2>
        <button
          className="bg-blue-500 p-2"
          onClick={() => setRenderCount(renderCount + 1)}
        >
          Increment Render Count
        </button>
      </div>
    </div>
  );
};

export default CounterWithRef;
