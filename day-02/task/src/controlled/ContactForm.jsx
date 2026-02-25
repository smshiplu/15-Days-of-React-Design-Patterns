import { useState } from "react";

const genderArr = ["Male", "Female", "Other"];
const subjectArr = ["English", "Math", "Physics"];
const initialForm = {
  firstname: "",
  lastname: "",
  email: "",
  contact: "",
  gender: "",
  subjects: [],
  file: "",
  about: "",
};
const ContactForm = () => {
  const [form, setForm] = useState(initialForm);

  const handleOnChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "file") {
      // handle image preview
      const file = e.target.files[0];
      if (file && file.type.startsWith("image/")) {
        setForm({ ...form, file: URL.createObjectURL(file) });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleCheckboxOnChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setForm({
        ...form,
        subjects: [...form.subjects, value],
      });
    } else {
      setForm({
        ...form,
        subjects: form.subjects.filter((item) => item !== value),
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    for (const key in form) {
      if (!Object.hasOwn(form, key)) continue;

      const element = form[key];

      if (element.length < 1) {
        const firstLetter = key.split("")[0].toUpperCase();
        const restLetters = key.split("").slice(1, key.length).join("");
        alert(`${firstLetter + restLetters}  cannot be empty!`);
        return;
      }
    }

    console.log("Form is submitted!", form);
    setForm(initialForm);
  };

  const handleResetForm = () => {
    setForm(initialForm);
  };

  return (
    <div className="max-w-sm w-full py-6">
      <h2 className="text-2xl font-bold">Contact Form (Controlled)</h2>
      <hr className="mb-6 border-1" />

      <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
        <div className="flex flex-col">
          <label
            htmlFor="firstname"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            First Name*
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={form.firstname}
            onChange={handleOnChange}
            placeholder="Enter First Name"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="lastname"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Last Name*
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={form.lastname}
            onChange={handleOnChange}
            placeholder="Enter Last Name"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Enter Email*{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleOnChange}
            placeholder="Enter email"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="tel"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Contact*
          </label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={form.contact}
            onChange={handleOnChange}
            placeholder="Enter Mobile number"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="gender"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Gender*
          </label>
          <div className="flex gap-2">
            {genderArr.map((gender, idx) => (
              <div key={idx} className="flex items-center mb-4">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  className="w-4 h-4 text-neutral-900 checked:bg-blue-500 bg-neutral-800 rounded-full checked:border-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-800 border border-gray-600 appearance-none"
                  checked={form.gender === gender}
                  onChange={handleOnChange}
                />
                <label
                  htmlFor={gender}
                  className="select-none ms-2 text-sm font-medium text-heading"
                >
                  {gender}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="lang"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your best Subject
          </label>
          <div className="flex gap-2">
            {subjectArr.map((subject, idx) => (
              <div key={idx} className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name="subjects"
                  id={subject}
                  value={subject}
                  checked={form.subjects.includes(subject)}
                  onChange={handleCheckboxOnChange}
                />
                <label
                  htmlFor="other"
                  className="select-none ms-2 text-sm font-medium text-heading"
                >
                  {subject}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="about"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Upload Resume*
          </label>
          <input
            className="text-sm text-stone-500 file:mr-5 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            type="file"
            name="file"
            id="file"
            onChange={handleOnChange}
            placeholder="Enter Upload File"
          ></input>
          {form.file && (
            <div className="w-40 h-40 my-6 rounded-full overflow-hidden">
              <img
                src={form.file}
                alt=""
                className="w-full h-full rounded-full"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="about"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            About
          </label>

          <textarea
            name="about"
            id="message"
            rows="4"
            value={form.about}
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body rounded-lg"
            placeholder="Write about your self..."
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-between gap-2">
          <button
            type="reset"
            className="text-white bg-purple-800 box-border border border-transparent hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 shadow-xs font-medium leading-5 rounded-lg text-sm px-3 py-2 focus:outline-none cursor-pointer"
            onClick={handleResetForm}
          >
            Reset
          </button>
          <button
            type="submit"
            className="text-white bg-blue-800 box-border border border-transparent hover:bg-blue-900 focus:ring-4 focus:ring-blue-600 shadow-xs font-medium leading-5 rounded-lg text-sm px-3 py-2 focus:outline-none cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
