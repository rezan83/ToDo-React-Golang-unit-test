import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import {  useSetRecoilState } from "recoil";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { TodosAtom } from "./store";

function App() {
    const URL = "";
    
    const set_allTodos = useSetRecoilState (TodosAtom);
    useEffect(() => {
        axios
            .get(URL)
            .then((response) => response.data)
            .then((data) => {
                console.log(data)
                set_allTodos(data);
            })
            .catch((error) => console.log(error));

        return () => {};
    }, []);

    return (
        <div className="App">
            <Header />
            <Main />
        </div>
    );
}

export default App;
