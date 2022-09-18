import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import { RecoilRoot } from "recoil";
import "./App.css";

function App() {
    return (
        <RecoilRoot>
            <div className="App">
                <Header />
                <Main />
            </div>
        </RecoilRoot>
    );
}

export default App;
