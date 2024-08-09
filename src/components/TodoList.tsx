import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: string[]
}

export default function TodoList({ todos }: TodoListProps) {
    return (
        <div>
            {
                todos.map((item: string, index: number) => (
                    <TodoItem index={index} item={item} />
                )) 
            }
        </div>
    )
}