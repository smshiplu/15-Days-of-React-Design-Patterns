import { useRef } from "react";

const UnControlledFeedbackForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name) {
      nameRef.current.focus();
      return;
    }
    if (!email.includes("@")) {
      emailRef.current.focus();
      return;
    }
    if (!message) {
      messageRef.current.focus();
      return;
    }

    console.log("Form Submitted: ", { name, email, message });
  };

  return (
    <form className="max-w-md w-full flex flex-col" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="p-2 my-2 rounded border"
        ref={nameRef}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="p-2 my-2 rounded border"
        ref={emailRef}
      />
      <textarea
        name="message"
        placeholder="Your message"
        className="py-4 px-2 my-2 border"
        ref={messageRef}
      ></textarea>

      <button type="submit" className="bg-blue-800 px-2 py-1.5 rounded">
        Send Feedback
      </button>
    </form>
  );
};

export default UnControlledFeedbackForm;
