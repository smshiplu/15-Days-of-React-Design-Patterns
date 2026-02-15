const Error = ({ error, onRetry }) => {
  return (
    <div
      className="p-4 mb-4 text-sm text-rose-900 rounded-base bg-rose-400 flex items-center gap-2"
      role="alert"
    >
      <div>
        <span className="font-medium">Oops!</span> {error}
      </div>
      <button onClick={onRetry} className="underline">
        Retry
      </button>
    </div>
  );
};

export default Error;
