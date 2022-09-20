import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { TodosAtom } from "../../store";
import "./TodoForm.scss";
const TodoForm = () => {
    const [todo, set_todo] = useState("");
    const [allTodos, set_allTodos] = useRecoilState(TodosAtom);
    const changeHandel = (e) => {
        set_todo(e.target.value);
    };
    const addHandel = (e) => {
        e.preventDefault();
        const URL = "";
        let newTodo = {
            content: todo,
            done: false,
            id: (Math.random()+"")
        };

        axios
            .post(URL, {
                ...newTodo
            })
            .then((response) => response.data)
            .then((data) => {
                set_allTodos([newTodo, ...allTodos]);
                console.log(data);
            })

            .catch((error) => console.log(error));

        set_todo("");
    };

    return (
        <div className="todo-form" data-testid="TodoForm">
            <form>
                <input
                    type="text"
                    id="todo-input"
                    placeholder="To Do"
                    onChange={changeHandel}
                    value={todo}
                />
                <button onClick={addHandel}>ADD</button>
            </form>
        </div>
    );
};

export default TodoForm;
