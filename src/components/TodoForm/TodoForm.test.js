import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import TodoForm from "./TodoForm";
import { RecoilRoot } from "recoil";

describe("<TodoForm> contain add and input ", () => {
    beforeEach(() =>
        render(
            <RecoilRoot>
                <TodoForm />
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

describe("<TodoForm> contain add and input ", () => {
    test("add click handel", () => {
        render(
            <RecoilRoot>
                <TodoForm />
            </RecoilRoot>
        );
        let ADD = screen.getByRole("button", { name: "ADD" });
        let addHandel = jest.fn();
        ADD.addEventListener("click", addHandel);
        fireEvent.click(ADD);
        expect(addHandel).toBeCalledTimes(1);
        ADD.removeEventListener("click", addHandel);
    });
    test("input works", async () => {
        render(
            <RecoilRoot>
                <TodoForm />
            </RecoilRoot>
        );
        const input = screen.getByPlaceholderText("To Do");
        fireEvent.change(input, { target: { value: "hello" } });
        expect(input.value).toBe("hello");
    });
});
