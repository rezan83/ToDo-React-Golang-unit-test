import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "./App";
import { RecoilRoot } from "recoil";

describe("<app> contain header and main", () => {
    beforeEach(() => render(<App />));
    test("renders header", () => {
        const header = screen.getByTestId("header");

        expect(header).toBeInTheDocument();
    });
    test("renders main", () => {
        const main = screen.getByTestId("main");
        expect(main).toBeInTheDocument();
    });
});

describe("input and add btn and todolist work properly ", () => {
    test("print inout and add click add button will show the todo", async () => {
        render(
            <RecoilRoot>
                <App />
            </RecoilRoot>
        );
        const ADD = screen.getByRole("button", { name: "ADD" });
        const input = screen.getByPlaceholderText("To Do");
        fireEvent.change(input, { target: { value: "hello" } });
        expect(input.value).toBe("hello");
        fireEvent.click(ADD);
        expect(await screen.findByText(/hello/i)).toBeInTheDocument();
    });
});
