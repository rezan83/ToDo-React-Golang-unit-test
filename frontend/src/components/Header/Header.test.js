import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { RecoilRoot } from "recoil";

describe("<app> contain header and main", () => {
  beforeEach(() =>
    render(
      <RecoilRoot>
        <Header />
      </RecoilRoot>
    )
  );
  test("renders input", () => {
    const input = screen.getByPlaceholderText("To Do");

    expect(input).toBeInTheDocument();
  });
  test("renders ADD", () => {
    const ADD = screen.getByRole("button", { name: "ADD" });
    expect(ADD).toBeInTheDocument();
  });
});
