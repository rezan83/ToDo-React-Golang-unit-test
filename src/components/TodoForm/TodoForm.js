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
    const clickHandel = (e) => {
        e.preventDefault();
        let newTodo = { content: todo, done: false, id: Math.random() };
        set_allTodos([newTodo, ...allTodos]);
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
                <button onClick={clickHandel}>ADD</button>
            </form>
        </div>
    );
};

export default TodoForm;
