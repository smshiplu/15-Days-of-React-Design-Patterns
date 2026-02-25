import UnControlledFeedbackFormNoRef from "./uncontrolled/unControlledFeedbackFormNoRef";

function App() {
  return (
    <div className="App flex flex-col items-center justify-center min-h-screen gap-4">
      {/* <Counter />
      <AutoFocusInput />
      <CounterWithRef />
      <FeedbackForm /> 
      <ControlledFeedbackForm />
      <UnControlledFeedbackForm />*/}

      <UnControlledFeedbackFormNoRef />
    </div>
  );
}

export default App;
