import { types } from "../types/types";
import { v4 as uuidv4 } from 'uuid';

export const addNewTodo = (todo) => {

    todo = {
        id: uuidv4(),
        ...todo,
        done: false,
        isSelected: false
    }

    return {
        type: types.todoAddNew,
        payload: todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: types.todoDelete,
        payload: id
    }
}

export const switchPending = (id) => {
    return {
        type: types.todoSwitchPending,
        payload: id
    }
}

export const setSelected = (id) => {
    return {
        type: types.todoSetSelected,
        payload: id
    }
}

export const setIsSelected = (id) => {
    return {
        type: types.todoSetIsSelected,
        payload: id
    }
}

export const editTodo = (id, info) => {
    return {
        type: types.todoEdit,
        payload: {
            id,
            info
        }
    }
}