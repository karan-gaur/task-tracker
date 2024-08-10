import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "./form.module.css";
import todoInterface from "./types";

interface FormProps {
    todos: todoInterface[];
    setTodos: React.Dispatch<React.SetStateAction<todoInterface[]>>;
}


export default function Form({ todos, setTodos} : FormProps) {
    const [todo, setTodo] = useState<string>("");
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (todo.trim()) {
            setTodos([...todos, {key: uuidv4(), name: todo, done: false}]);
            setTodo("");
        }
    }

    return (
        <form className={styles.todoForm} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
                <input className={styles.modernInput} type="text" onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="Enter Todo Item"></input>
                <button className={styles.modernButton} type="submit">Add</button>
            </div>
        </form>
    )
}