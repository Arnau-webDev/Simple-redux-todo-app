import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, setIsSelected, setSelected, switchPending } from '../actions/todos';

const TodoItem = ({ todo }) => {

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    const handleSwicthPending = (id) => {
        dispatch(switchPending(id));
    }

    const handleSelectTodo = (id) => {
        dispatch(setIsSelected(id));
        dispatch(setSelected(id));
    }

    const { id, info, done, isSelected } = todo;
    // console.log(pending);

    return (
        <>
            <div id={id} className={`todoItem ${done && "done"}`} >
                <div className="todoItemSelect">
                    <p>Select</p>
                    <div className="leftIcon" onClick={() => handleSelectTodo(id)}>
                        <div className={isSelected ? "active" : ""}></div>
                    </div>
                </div>
                <p>{info}</p>
                <div>
                    {done ? <i onClick={() => handleSwicthPending(id)} className="fas fa-times"></i> : <i onClick={() => handleSwicthPending(id)} className="fas fa-check"></i>}

                    <i onClick={() => handleDelete(id)} className="fas fa-trash"></i>
                </div>
            </div>
        </>

    )
}

export default TodoItem
