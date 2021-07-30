import { types } from "../types/types";

const initialState = {
    todos: [],
    selectedTodo: null
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.todoAddNew:
            return {
                ...state,
                todos: [action.payload, ...state.todos],
            }
        case types.todoDelete:
            return {
                ...state,
                todos: state.todos.filter((todo) => {
                    return todo.id !== action.payload
                }),
                selectedTodo: null
            }
        case types.todoSwitchPending:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    // console.log(todo.pending);
                    // console.log(todo);
                    return todo.id === action.payload ? { ...todo, done: !todo.done } : todo;
                })
            }
        case types.todoSetSelected:
            return {
                ...state,
                selectedTodo: state.todos.find((todo) => {
                    return todo.isSelected === true && todo;
                }) || null
            }
        case types.todoSetIsSelected:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    return todo.id === action.payload ? { ...todo, isSelected: !todo.isSelected } : { ...todo, isSelected: false };
                })
            }
        case types.todoEdit:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    return todo.id === action.payload.id ? { ...todo, info: action.payload.info } : todo;
                }),
                selectedTodo: null
            }
        default:
            return state;
    }
}