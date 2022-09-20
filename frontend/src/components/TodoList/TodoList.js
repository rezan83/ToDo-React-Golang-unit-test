import React from "react";
import { useRecoilState } from "recoil";
import { TodosAtom } from "../../store";
import { TodoItem } from "./TodoItem";
import "./TodoList.scss";

const TodoList = () => {
    const [allTodos, set_allTodos] = useRecoilState(TodosAtom);
    return (
        <div className="todo-list" data-testid="TodoList">
            {allTodos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </div>
    );
};

export default TodoList;
