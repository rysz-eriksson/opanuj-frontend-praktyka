import { Dispatch, FC, useMemo, useState } from "react"
import { ToDo } from "./ToDo"
import { ToDoItem } from "./ToDoItem"
import { ToDoFilter } from "./ToDoFilter"
import { REDUCER_ACTIONS } from "./todosReducer"

export const ToDoList: FC<{todos: ToDo[], dispatch: Dispatch<REDUCER_ACTIONS>}> = ({todos, dispatch}) => {
    const [filter, setFilter] = useState(false)

    const filteredTodos = useMemo(() => {
        if (filter) {
            return todos.filter(todo => !todo.done)
        }
        return todos
    }, [todos, filter])
    
    return (
        <section className="flex-1">
            <ToDoFilter setFilter={setFilter} />
            <h2 className="mb-4">Todos list</h2>
            <ol>
                {filteredTodos.map((todo, idx) => <ToDoItem key={todo.id} todo={{...todo, order: idx + 1}} dispatch={dispatch} />)}
            </ol>
        </section>
    )
}