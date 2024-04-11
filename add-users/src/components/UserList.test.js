import { screen, render, within } from "@testing-library/react";
import UserList from "./UserList";

import "@testing-library/jest-dom";

/* --- This test fails because getAllByRole() is not always a solution for us
test("render one row per user", () => {
  const users = [
    { name: "jane", email: "jane@123.com" },
    { name: "sam", email: "sam@123.com" },
  ];
  // Step-1: Render the component to be tested
  render(<UserList users={users} />);

// --- Testing Playground! To get help about which Function Queries to use --- 
  // screen.logTestingPlaygroundURL();

  // Step-2: Find all the rows in the table
  const totalRows = screen.getAllByRole("row");

  // Step-3: Assertion - correct number of rows in the table
  expect(totalRows).toHaveLength(2);
});

--- */

// Here we use the other solution - using within() function
/* --
test("render one row per user", () => {
  // render the component
  const users = [
    { name: "jane", email: "jane@123.com" },
    { name: "sam", email: "sam@123.com" },
  ];
  render(<UserList users={users} />);

  // find rows
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // assertion
  expect(rows).toHaveLength(2);
});
-- */

// Method-3: Which is not recommended

/*--
test("render one row per user", () => {
  const users = [
    { name: "jane", email: "jane@123.com" },
    { name: "sam", email: "sam@123.com" },
  ];
  const { container } = render(<UserList users={users} />);

  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  expect(rows).toHaveLength(2);
});
--- */

// Method 4

/** --- Common Code to be put outside the test() definitions --- */

function renderComponent() {
  const users = [
    { name: "jane", email: "jane@123.com" },
    { name: "sam", email: "sam@123.com" },
  ];
  render(<UserList users={users} />);

  return { users };
}

test("render one row per user", () => {
  // render the component
  const { users } = renderComponent();

  // find elements | This un-fortunately didn't work
  // const [rowgroup1, rowgroup2] = screen.getAllByRole("rowgroup");

  // // eslint-disable-next-line
  // const totalRows = rowgroup2.getAllByRole("row");

  const totalRows = within(screen.getByTestId("users")).getAllByRole("row");
  expect(totalRows).toHaveLength(2);
});

// Test email and name

test("render the email and name of each user", () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }

  // screen.logTestingPlaygroundURL(); Very Helpful
});
