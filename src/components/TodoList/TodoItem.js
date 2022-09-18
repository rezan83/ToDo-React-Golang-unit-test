import React from "react";
import { useRecoilState } from "recoil";
import { TodosAtom } from "../../store";

export const TodoItem = ({ todo }) => {
    const [allTodos, set_allTodos] = useRecoilState(TodosAtom);
    const removeHandel = (e) => {
        e.stopPropagation();
        set_allTodos(
            allTodos.filter((storedTodo) => storedTodo.id !== todo.id)
        );
    };
    const doneHandel = () => {
        let editTodo = { ...todo, done: !todo.done };
        let newTodos = [...allTodos];
        newTodos.splice(allTodos.indexOf(todo), 1, editTodo);
        set_allTodos(newTodos);
    };
    return (
        <div
            className={`todo-item ${todo.done && "done"}`}
            onClick={doneHandel}
        >
            <div>{todo.content}</div>
            <button className="remove" onClick={removeHandel}>
                X
            </button>
        </div>
    );
};
