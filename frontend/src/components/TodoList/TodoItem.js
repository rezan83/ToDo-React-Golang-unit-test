import axios from "axios";
import React from "react";
import { useRecoilState } from "recoil";
import { TodosAtom } from "../../store";

export const TodoItem = ({ todo }) => {
    const [allTodos, set_allTodos] = useRecoilState(TodosAtom);
    const removeHandel = (e) => {
        e.stopPropagation();

        const URL = `/${todo.id}`;
        axios
            .delete(URL, { id: todo.id })
            .then((response) => {
                set_allTodos(
                    allTodos.filter((storedTodo) => storedTodo.id !== todo.id)
                );
                return response.data;
            })
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    const doneHandel = () => {
        const URL = `/${todo.id}`;
        axios
            .put(URL, { id: todo.id })
            .then((response) => {
                let editTodo = { ...todo, done: !todo.done };
                let newTodos = [...allTodos];
                newTodos.splice(allTodos.indexOf(todo), 1, editTodo);
                set_allTodos(newTodos);
                return response.data;
            })
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
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
