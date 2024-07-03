import { Dispatch, FC } from "react"
import { ToDo } from "./ToDo"
import { FaCheck, FaWindowClose  } from 'react-icons/fa';
import { REDUCER_ACTIONS } from "./ToDoContainer";

type TodoItem = ToDo & {order: number}

export const ToDoItem: FC<{todo: TodoItem, dispatch: Dispatch<REDUCER_ACTIONS>}> = ({todo, dispatch}) => {
    const {description, order, done, title, id} = todo

    const removeTodo = () => {
        dispatch({
            type: "REMOVE_TODO",
            payload: id
        })
    }

    const markAsDone = () => {
        dispatch({
            type: "MARK_TODO_AS_DONE",
            payload: id
        })
    }

    return (
        <li>
            <p className="flex items-center space-x-2">
                <span className="w-6 h-6">{order}</span>
                <span className="w-6 h-6">{title}</span>
                {done ? (
                    <FaCheck className="w-6 h-6 text-green-500" />
                ) : (
                <span className="w-6 h-6"></span> // Placeholder for alignment, if needed
                )}
                <button className="p-1 rounded-full bg-red-500 text-white" onClick={() => removeTodo}>
                    <FaWindowClose className="w-4 h-4" />
                </button>
                <button className="p-1 rounded-full bg-red-500 text-white" onClick={() => markAsDone}>
                    <FaCheck className="w-6 h-6 text-green-500" />
                </button>
          </p>
          <p>{description}</p>
        </li>
    )
}