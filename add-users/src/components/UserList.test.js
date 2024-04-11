import { screen, render, within } from "@testing-library/react";
import UserList from "./UserList";

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
