import { useEffect, useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import TodoList from "./TodoList";
import todoInterface from "./types";

export default function Todo() {
    const [todos, setTodos] = useState<todoInterface[]>( () => {
        const local = localStorage.getItem('tasks')
        return local !== null ? JSON.parse(local) : [] 
    })
    useEffect( () => {
        localStorage.setItem('tasks', JSON.stringify(todos))
    })

    const completedTasks: number = todos.filter( (todo) => todo.done).length
    const totalTasks: number = todos.length
    return <div>
        <Form todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        <Footer completedTasks={completedTasks} totalTasks={totalTasks}/>
    </div>
}