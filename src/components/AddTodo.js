import React, { useState } from "react";
import PropTypes from "prop-types";


function AddTodo(props) {

    const addTodo = props.addTodofunc;

    const[title, setTitle] = useState('')
    

    function changeTitle (event) {
        console.log(event.target.value);
        setTitle(event.target.value);
    }

    function addSingleTodo (event) {
        event.preventDefault();
        if(title !== '') {
            addTodo(title);
            setTitle('')
        }
    }

    return (
        // <form style={AddTodoStyle} onSubmit={addSingleTodo}>
        //     <input type="text" name="title" value={ title } placeholder="Them viec" style={AddTodoInputStyle} onChange={ changeTitle }/>
        //     <input type="submit" value="them" className='btn' />
        // </form>
        <form onSubmit={addSingleTodo}>
            <div className="form-row">
                <h3>Them</h3>
                <div className="col">
                
                <input type="text" name="title" value={ title } className="form-control" placeholder="Them viec" onChange={ changeTitle }/>
                </div>
                <div className="col">
                <input type="submit" value="them" className="btn btn-primary"  />
                </div>
            </div>
        </form>
    )
}

//
AddTodo.propTypes = {
    addTodofunc: PropTypes.func.isRequired,
}

export default AddTodo;