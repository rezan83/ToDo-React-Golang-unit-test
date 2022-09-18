import { atom } from "recoil";

export const TodosAtom = atom({
    key: "TodosAtom",
    default: [
        { content: "Banana", done: true, id: 1 },
        { content: "Potato", done: false, id: 2 }
    ]
});
