const genderArr = ["Male", "Female", "Other"];
const subjectArr = ["Maths", "Science", "Commerce", "Arts"];
const ContactFormWithFormData = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const gender = formData.get("gender");
    const subjects = formData.getAll("subjects");
    const formValues = Object.fromEntries(formData.entries());
    formValues.gender = gender;
    formValues.subjects = subjects;

    for (const key in formValues) {
      if (!Object.hasOwn(formValues, key)) continue;

      const element = formValues[key];

      const formattedKey =
        key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();

      if (typeof element === "string" && element.trim() === "") {
        alert(`Please fill the ${formattedKey} field`);
        return;
      }
      if (Array.isArray(element) && element.length === 0) {
        alert(`Please select at least one ${formattedKey}`);
        return;
      }
      if (typeof element === "undefined" || element === null) {
        alert(`Please fill the ${formattedKey} field`);
        return;
      }
    }

    alert(
      `Form submitted successfully! ${JSON.stringify(formValues, null, 2)}`,
    );
    e.target.reset();
  };
  return (
    <div className="max-w-sm w-full py-6">
      <h2 className="text-2xl font-bold">
        Contact Form (Uncontrolled with FormData)
      </h2>
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
                />
                <label
                  htmlFor={subject}
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
            About*
          </label>

          <textarea
            name="about"
            id="message"
            rows="4"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body rounded-lg"
            placeholder="Write about your self..."
          ></textarea>
        </div>
        <div className="flex items-center justify-between gap-2">
          <button
            type="reset"
            className="text-white bg-purple-800 box-border border border-transparent hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 shadow-xs font-medium leading-5 rounded-lg text-sm px-3 py-2 focus:outline-none cursor-pointer"
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

export default ContactFormWithFormData;
