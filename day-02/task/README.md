# Contact Form - Controlled vs Uncontrolled Patterns

This folder demonstrates different approaches to handling form inputs in React, comparing **Controlled Components** with **Uncontrolled Components**.

## Overview

Form handling is a fundamental aspect of React applications. There are three main patterns showcased here:

1. **Controlled Components** - Form state is managed by React
2. **Uncontrolled Components with useRef** - Form values accessed via DOM references
3. **Uncontrolled Components with FormData API** - Form data collected using native FormData API

---

## 📁 File Structure

```
src/
├── controlled/
│   └── ContactForm.jsx           # Controlled component implementation
└── uncontrolled/
    ├── ContactFormWithRef.jsx    # Uncontrolled with useRef hooks
    └── ContactFormWithFormData.jsx  # Uncontrolled with FormData API
```

---

## 1. Controlled Component: [ContactForm.jsx](./src/controlled/ContactForm.jsx)

### Description

A fully controlled form component where all input values are managed through React state using `useState` hook.

### Key Features

- ✅ **Single Source of Truth**: All form data stored in React state
- ✅ **Real-time Validation**: Can validate and respond to changes instantly
- ✅ **Predictable Behavior**: Component controls every input value
- ✅ **Form Reset**: Easy to reset form using state

### Implementation Details

```jsx
const [form, setForm] = useState(initialForm);

const handleOnChange = (e) => {
  const { name, value, checked } = e.target;
  setForm({ ...form, [name]: value });
};
```

### Pros

- Easy to implement conditional logic based on form values
- Can validate and display errors in real-time
- Simple to implement features like auto-save
- Full control over form state at any time

### Cons

- More re-renders as state updates on every input change
- More verbose code with multiple state handlers
- Slightly higher memory usage due to state management

### Form Fields Handled

- **Text Inputs**: First Name, Last Name, Email, Contact
- **Select Dropdown**: Gender selection
- **Checkboxes**: Multiple subject selection
- **File Input**: Image file with preview
- **Textarea**: About section

---

## 2. Uncontrolled Component (with useRef): [ContactFormWithRef.jsx](./src/uncontrolled/ContactFormWithRef.jsx)

### Description

An uncontrolled form component that uses React refs to access DOM values directly during form submission.

### Key Features

- 📍 **Direct DOM Access**: Uses `useRef` to get input values
- 📍 **Minimal Re-renders**: No state updates while typing
- 📍 **Zero State Management**: Form state lives in the DOM

### Implementation Details

```jsx
const firstNameRef = useRef(null);

const handleOnSubmit = (e) => {
  const firstName = firstNameRef.current.value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
};
```

### Pros

- Better performance for large forms (fewer re-renders)
- Simpler code without state management
- Ideal for integrating with non-React code
- Lower memory overhead

### Cons

- Cannot easily validate in real-time
- Less React-like approach
- Harder to set form values programmatically
- Mixes ref-based and DOM query approaches
- More complex for handling complex validation

### Form Fields Handled

- Refs for text inputs
- `document.querySelector` for radio buttons and checkboxes
- Mixed approach for maximum clarity

---

## 3. Uncontrolled Component (with FormData): [ContactFormWithFormData.jsx](./src/uncontrolled/ContactFormWithFormData.jsx)

### Description

An uncontrolled form component that uses the native FormData API to collect all form values on submission.

### Key Features

- 📝 **FormData API**: Uses native browser FormData constructor
- 📝 **Clean Submission**: Collects all data at submission time
- 📝 **No Refs Needed**: No useRef hooks required

### Implementation Details

```jsx
const handleOnSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const gender = formData.get("gender");
  const subjects = formData.getAll("subjects");
  const formValues = Object.fromEntries(formData.entries());
};
```

### Pros

- Cleanest and most concise code
- No refs or state needed
- Perfect for file uploads (FormData handles binary data)
- Modern browser API
- Easiest to integrate with backend APIs
- Excellent performance

### Cons

- Cannot validate in real-time
- Cannot easily pre-populate form values
- Requires form submission to get values
- Less flexibility for complex scenarios

### Form Fields Handled

- All input types supported natively by FormData
- Single and multiple value fields
- File uploads
- Automatic form reset after submission

---

## Comparison Table

| Aspect          | Controlled                                           | Uncontrolled                                                       |
| --------------- | ---------------------------------------------------- | ------------------------------------------------------------------ |
| **Code Style**  | Declarative, React-idiomatic                         | Imperative, DOM-focused                                            |
| **Validation**  | Real-time as user types                              | Only on form submission                                            |
| **Form Reset**  | Simple: `setState(initialState)`                     | Manual: `form.reset()` or ref clearing                             |
| **Readability** | High - state flow is explicit                        | Lower - mix of refs and DOM queries                                |
| **Complexity**  | Medium - more boilerplate                            | Lower - minimal setup required                                     |
| **Pros**        | ✅ Instant feedback ✅ Dependent fields ✅ Auto-save | ✅ Better performance ✅ Less code ✅ Simpler integration          |
| **Cons**        | ❌ More re-renders ❌ Verbose ❌ Higher memory       | ❌ No real-time validation ❌ DOM manipulation ❌ Less predictable |

---

## When to Use Each Pattern

### Use **Controlled Components** when:

- You need real-time validation
- You need instant feedback on user input
- You want dependent fields (field A affects field B)
- You need auto-save functionality
- Form is small to medium-sized

### Use **useRef Pattern** when:

- Form is very large with many fields
- You need maximum performance
- You're integrating with non-React libraries
- You rarely need to manipulate form values
- You want minimal re-renders

### Use **FormData Pattern** when:

- You're uploading files
- You need the simplest, cleanest code
- You only need values at submission time
- You don't need real-time validation
- You want to work with modern APIs

---

## Form Validation

All three implementations include basic validation that checks:

- ✓ Required fields are not empty
- ✓ At least one subject is selected
- ✓ All fields have appropriate values

Validation occurs before form submission and displays alert messages to the user.

---

## Running the Examples

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run development server**:

   ```bash
   npm run dev
   ```

3. **Test each implementation** by filling out the forms and observing the behavior

---

## Best Practices

### For All Patterns:

- ✔️ Always validate user inputs
- ✔️ Provide clear error messages
- ✔️ Handle form submission properly
- ✔️ Consider accessibility (labels, ARIA attributes)
- ✔️ Use meaningful field names

### Specific Recommendations:

- Use **controlled components** as your default in React
- Switch to **uncontrolled** only when performance is critical
- Use **FormData** for file uploads and simple forms

---

## Resources

- [React Forms - Official Docs](https://react.dev/reference/react-dom/components/input)
- [Controlled Components](https://react.dev/learn/forms#controlled-components)
- [useRef Hook Documentation](https://react.dev/reference/react/useRef)
- [FormData API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

---

## Summary

The choice between controlled, ref-based uncontrolled, and FormData-based uncontrolled components depends on your specific use case:

- **Controlled**: Best for most React applications
- **useRef**: Best for performance-critical large forms
- **FormData**: Best for file uploads and simplicity

Each pattern has its merits, and understanding all three makes you a better React developer!
