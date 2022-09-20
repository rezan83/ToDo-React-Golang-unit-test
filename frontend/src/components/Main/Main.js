import React from "react";
import TodoList from "../TodoList/TodoList";
import "./Main.scss";

const Main = () => {
    return (
        <main data-testid="main">
            <TodoList />
        </main>
    );
};

export default Main;
