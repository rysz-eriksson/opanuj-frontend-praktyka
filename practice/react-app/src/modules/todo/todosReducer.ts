import { ToDo } from "./ToDo";

export type REDUCER_ACTIONS =
  | { type: 'ADD_TODO'; payload: ToDo }
  | { type: 'REMOVE_TODO'; payload: string; }
  | { type: 'MARK_TODO_AS_DONE'; payload: string; }

export const todosReducer = (todos: ToDo[], action: REDUCER_ACTIONS) => {
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
        default:
          throw new Error('Invalid action type');
      }
}