import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
import todoInterface from "./types";
interface TodoListProps {
    todos: todoInterface[]
    setTodos: React.Dispatch<React.SetStateAction<todoInterface[]>>;
}

export default function TodoList({ todos, setTodos }: TodoListProps) {
    const sortedTodos = todos.slice().sort( (a, b) => Number(a.done)-Number(b.done) )
    return (
        <div className={styles.list}>
            {
                sortedTodos.map((item: todoInterface) => (
                    <TodoItem key={item.key} item={item} setTodos={setTodos} todos={todos} />
                )) 
            }
        </div>
    )
}