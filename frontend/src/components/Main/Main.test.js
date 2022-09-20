import { render, screen } from "@testing-library/react";
import Main from "./Main";
import { RecoilRoot } from "recoil";

describe("<Main> contain TodoList", () => {
    test("renders TodoList", () => {
        render(
            <RecoilRoot>
                <Main />
            </RecoilRoot>
        );
        const TodoList = screen.getByTestId("TodoList");

        expect(TodoList).toBeInTheDocument();
    });
});
