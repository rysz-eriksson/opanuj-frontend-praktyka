import { FC, useReducer } from "react"
import { ToDoList } from "./ToDoList"
import AddToDoForm from "./AddTodoForm"
import { todosReducer } from "./todosReducer";



const ToDoContainer: FC = () => {
    const [todos, dispatch] = useReducer(todosReducer, [])
    return (
        <main className="max-w-px-1200 w-full flex flex-column gap-5">
            <ToDoList todos={todos} dispatch={dispatch}/>
            <AddToDoForm dispatch={dispatch} />
        </main>
    )
}

export default ToDoContainer