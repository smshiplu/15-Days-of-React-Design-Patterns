import { useRef, useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Name is required!");
      return;
    }
    if (!email.includes("@")) {
      alert("Email is required!");
      return;
    }
    if (!messageRef.current.value) {
      messageRef.current.focus();
      return;
    }

    console.log("Form Submitted", {
      name,
      email,
      message: messageRef.current.value,
    });
  };

  return (
    <form className="max-w-md w-full flex flex-col" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="p-2 my-2 rounded border"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="p-2 my-2 rounded border"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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

export default FeedbackForm;
