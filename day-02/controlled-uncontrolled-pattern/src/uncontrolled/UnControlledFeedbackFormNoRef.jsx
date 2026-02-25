const UnControlledFeedbackFormNoRef = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(
      `Hey ${data.name}, your feedback is submitted to ${data.email}`,
    );
  };

  return (
    <form className="max-w-md w-full flex flex-col" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="p-2 my-2 rounded border"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="p-2 my-2 rounded border"
      />
      <textarea
        name="message"
        placeholder="Your message"
        className="py-4 px-2 my-2 border"
      ></textarea>

      <button type="submit" className="bg-blue-800 px-2 py-1.5 rounded">
        Send Feedback
      </button>
    </form>
  );
};

export default UnControlledFeedbackFormNoRef;
