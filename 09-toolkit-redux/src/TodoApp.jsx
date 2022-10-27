import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {
    //const { data: todos = [], isLoading } = useGetTodosQuery();
    const [todoId, setTodoId] = useState(1);
    const { data: todo, isLoading } = useGetTodoQuery(todoId);
    const nextTodo = () => {
        setTodoId(todoId + 1)
    }
    const prevTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1)
    }
    return (
        <>
            <h1>
                Todo - RTK Query
            </h1>
            <hr />
            <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
            <pre>{JSON.stringify(todo)}</pre>
            <button onClick={prevTodo}>Prev Todo</button>
            <button onClick={nextTodo}>Next Todo</button>
            {/* <ul>
                {todos.map(todo => (

                    <li key={todo.id}>
                        <strong>{todo.completed ? 'Done' : 'Pending'}</strong>{todo.title}
                    </li>
                ))}
            </ul> */}

        </>
    )
}
