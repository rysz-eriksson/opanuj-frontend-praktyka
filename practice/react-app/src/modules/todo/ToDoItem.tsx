import { Dispatch, FC } from "react"
import { ToDo } from "./ToDo"
import { FaCheck  } from 'react-icons/fa';
import { REDUCER_ACTIONS } from "./todosReducer";

type TodoItem = ToDo & {order: number}

export const ToDoItem: FC<{todo: TodoItem, dispatch: Dispatch<REDUCER_ACTIONS>}> = ({todo, dispatch}) => {
    const {description, order, done, title, id} = todo

    const removeTodo = () => {
        console.log("remove")

        dispatch({
            type: "REMOVE_TODO",
            payload: id
        })
    }

    const markAsDone = () => {
        console.log("mark as done")
        dispatch({
            type: "MARK_TODO_AS_DONE",
            payload: id
        })
    }

    return (
        <li className="min-w-96">
            <p className="flex items-center justify-between m-2">
                <span className="w-6 h-6">{order}</span>
                <span className="w-24 h-6">{title}</span>
                {done ? (
                    <FaCheck className="w-6 h-6 text-green-500" />
                ) : (
                <span className="w-6 h-6"></span> // Placeholder for alignment, if needed
                )}
                <button className="p-1 rounded-md bg-red-500 text-white" onClick={removeTodo}>
                    Delete
                </button>
                <button className="p-1 rounded-md bg-red-500 text-white" onClick={markAsDone}>
                    Done
                </button>
          </p>
          <p className="text-left ml-11">{description}</p>
        </li>
    )
}