import { useRef, useState } from "react";

const ControlledFeedbackForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      nameRef.current.focus();
      return;
    }

    if (!form.email.includes("@")) {
      emailRef.current.focus();
      return;
    }

    if (!form.message) {
      messageRef.current.focus();
      return;
    }
    console.log("Form Submitted", form);
  };

  return (
    <form className="max-w-md w-full flex flex-col" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="p-2 my-2 rounded border"
        value={form.name}
        ref={nameRef}
        onChange={handleOnChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="p-2 my-2 rounded border"
        value={form.email}
        ref={emailRef}
        onChange={handleOnChange}
      />
      <textarea
        name="message"
        placeholder="Your message"
        className="py-4 px-2 my-2 border"
        ref={messageRef}
        onChange={handleOnChange}
      ></textarea>

      <button type="submit" className="bg-blue-800 px-2 py-1.5 rounded">
        Send Feedback
      </button>
    </form>
  );
};

export default ControlledFeedbackForm;
