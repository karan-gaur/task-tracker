import { useState } from "react";
import styles from "./form.module.css";

interface FormProps {
    todos: string[];
    setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}


export default function Form({ todos, setTodos} : FormProps) {
    const [todo, setTodo] = useState<string>("");
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (todo.trim()) {
            setTodos([...todos, todo]);
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