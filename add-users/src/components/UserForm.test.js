import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";

import UserForm from "./UserForm";

// Test 1: Check that two inputs & a button is present are in the Component
test("it shows two inputs and a button", () => {
  // Step 1: Render the Component
  render(<UserForm />);

  // Step 2: Manipulate the Component or Find an Element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Step 3: Assertion - To make sure the component is doing what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

// Test 2: To test the input values and to test a function addUser is called with  arguments - name and email
test("it calls addUser when the form is submitted", async () => {
  const mock = jest.fn();
  // Step-1: Render the Component to be tested
  render(<UserForm addUser={mock} />);

  /** Find two inputs --- Use Label QueryFunction */
  const nameInput = screen.getByRole("textbox", {
    name: /Name:/i,
  });

  const emailInput = screen.getByRole("textbox", {
    name: /Enter email/i,
  });

  /** Simulate typing in inputs */
  await user.click(nameInput);
  await user.keyboard("imran");

  await user.click(emailInput);
  await user.keyboard("imran@gmail.com");

  /* Find the button and simulate clicking on the button --- */
  const button = screen.getByRole("button");
  await user.click(button);

  // Step 3: Assertion: To make sure addUser gets called with email and name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "imran",
    email: "imran@gmail.com",
    id: expect.any(String),
  });
});
