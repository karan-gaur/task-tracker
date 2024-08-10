import styles from "./todoitem.module.css";
import todoInterface from "./types";

interface TodoItemProps {
    item: todoInterface;
    todos: todoInterface[];
    setTodos: React.Dispatch<React.SetStateAction<todoInterface[]>>;
}

export default function TodoItem({ item, todos, setTodos }: TodoItemProps) {
    function handleDelete(key: string) {
        setTodos(todos.filter((todo) => todo.key !== key));
    }

    function handleClick(key: string) {
        const newArray = todos.map( (todo) => todo.key === key ? {...todo, done: !todo.done} : todo)
        setTodos(newArray)
    }

    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span className={item.done ? styles.completed : ""} onClick={() => handleClick(item.key)}>{item.name}</span>
                <span>
                    <button onClick={() => handleDelete(item.key)} className={styles.deleteButton}>X</button>
                </span>
            </div>
            <hr className={styles.line}/>
        </div>
    )
}