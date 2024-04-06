import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";

import UserForm from "./UserForm";

// To define a test we use test() function defined globally
// test() function is provided by our test runner which is jest!
test("it shows 2 inputs and a button", () => {
  // Step 1: Render the component
  render(<UserForm />);
  // Step 2 :Manipulate the Component or Find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Step 3: Make an Assertion - Component is doing what it is meant to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

// Test 2:

test("it calls addUser when the form is submitted", async () => {
  const mock = jest.fn();
  // 1. Try to render my component
  render(<UserForm addUser={mock} />);

  // 2. Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  // 3. Simulate typing in name
  await user.click(nameInput);
  await user.keyboard("imran");
  // 4. Simulate typing in email
  await user.click(emailInput);
  await user.keyboard("imran@imran.com");

  // 5. Find the button
  const button = screen.getByRole("button");
  // 6. Simulate clicking the button (To submit the form)
  await user.click(button);
  // 7. Assertion to make sure 'addUser' gets called with email/name

  expect(mock).toHaveBeenCalled();

  expect(mock).toHaveBeenCalledWith({
    name: "imran",
    email: "imran@imran.com",
    id: expect.any(String),
  });
});
