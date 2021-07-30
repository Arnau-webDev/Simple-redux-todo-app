import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addNewTodo, editTodo } from './actions/todos';
import TodoItem from './components/TodoItem';

import "./todoApp.scss";

const TodoApp = () => {

    const initialState = { info: "" }
    const initialStateEdit = { infoEdit: "" }

    const { todos, selectedTodo } = useSelector(state => state.todosStore);

    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(initialState);
    const [formValuesEdit, setFormValuesEdit] = useState({});

    const { info } = formValues;
    const { infoEdit } = formValuesEdit;


    // Revisar perque no funciona

    // useEffect(() => {
    //     console.log("Entro");
    //     if (selectedTodo !== null) {
    //         setFormValuesEdit(selectedTodo.info);
    //     }
    // }, [selectedTodo])

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormValues({
            [name]: value
        })
    }

    const handleInputChangeEdit = (e) => {
        const { name, value } = e.target;

        setFormValuesEdit({
            [name]: value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log(formValues);
        dispatch(addNewTodo(formValues));

        setFormValues(initialState)
    }

    const handleFormSubmitEdit = (e) => {
        e.preventDefault();
        // console.log(formValues);
        dispatch(editTodo(selectedTodo.id, formValuesEdit.info));

        setFormValuesEdit(initialStateEdit);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <h2>Create a Todo</h2>
                <input type="text" value={info} onChange={handleInputChange} name="info" placeholder="Todo info..." autoComplete="off" />
                <input type="submit" value="Create" />
            </form>

            <div className="todosContainer">
                {
                    todos.length < 1 ? (<h3>No todos to show</h3>) : (
                        todos.map((todo) => {
                            return <TodoItem key={todo.id} todo={todo} />
                        })
                    )
                }
            </div>


            {selectedTodo !== null && (
                <form onSubmit={handleFormSubmitEdit}>
                    <h2>Edit a Todo</h2>
                    <input type="text" value={infoEdit} onChange={handleInputChangeEdit} name="info" placeholder="Todo info..." autoComplete="off" />
                    <input type="submit" value="Edit" />
                </form>
            )}


        </>
    )
}

export default TodoApp
