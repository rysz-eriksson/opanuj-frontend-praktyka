import { Dispatch, FC } from "react"
import { ToDo } from "./ToDo"
import { ToDoItem } from "./ToDoItem"
import { REDUCER_ACTIONS } from "./ToDoContainer"

export const ToDoList: FC<{todos: ToDo[], dispatch: Dispatch<REDUCER_ACTIONS>}> = ({todos, dispatch}) => {
    return (
        <ol>
            {todos.map((todo, idx) => <ToDoItem key={todo.id} todo={{...todo, order: idx}} dispatch={dispatch} />)}
        </ol>
    )
}