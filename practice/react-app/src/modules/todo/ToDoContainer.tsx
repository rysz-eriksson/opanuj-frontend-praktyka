import { FC, useReducer } from "react"
import { ToDoList } from "./ToDoList"
import AddToDoForm from "./AddTodoForm"
import { ToDo } from "./ToDo";

export type REDUCER_ACTIONS =
  | { type: 'ADD_TODO'; payload: ToDo }
  | { type: 'REMOVE_TODO'; payload: string; }
  | { type: 'MARK_TODO_AS_DONE'; payload: string; }
  | { type: 'FILTER_DONE_TODOS'; payload: string; }

const todosReducer = (todos: ToDo[], action: REDUCER_ACTIONS) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...todos, action.payload];
        case 'REMOVE_TODO':
            return todos.filter(todo => todo.id !== action.payload);
        case 'MARK_TODO_AS_DONE':
            return todos.map(todo => {
                if (todo.id === action.payload) {
                    return {...todo, done: true}
                }
                return todo
            })
        case 'FILTER_DONE_TODOS':
            return todos.filter(todo => !todo.done)
        default:
          throw new Error('Invalid action type');
      }
}

const ToDoContainer: FC = () => {
    const [todos, dispatch] = useReducer(todosReducer, [])
    return (
        <main className="flex gap-10">
            <ToDoList todos={todos} dispatch={dispatch}/>
            <AddToDoForm dispatch={dispatch} />
        </main>
    )
}

export default ToDoContainer