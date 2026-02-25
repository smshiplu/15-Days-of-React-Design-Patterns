import { useEffect, useRef } from "react";

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="text"
      ref={inputRef}
      placeholder="Type here..."
    />
  );
};

export default AutoFocusInput;
