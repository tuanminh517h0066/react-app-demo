import React from "react";
import PropTypes from "prop-types";

function TodoItem(props) {


    const markComplete = props.markCompleteFunc;
    const deleteTodo = props.deleteTodoFunc;
    const showEdit = props.showEditFunc;

    

    return (
        <tr>
            <th scope="row">{props.todoProps.id}</th>
            <td>{props.todoProps.title}</td>
            <td><button className="btn btn-success" onClick={showEdit.bind(this, props.todoProps.id)} > Edit </button> | <button className="btn btn-danger" onClick={deleteTodo.bind(this, props.todoProps.id)} >Delete</button></td>
            
        </tr>
    )
}

//
TodoItem.propTypes = {
    todoProps: PropTypes.object.isRequired,
    markCompleteFunc: PropTypes.func.isRequired,
    deleteTodoFunc: PropTypes.func.isRequired,
    showEditFunc: PropTypes.func.isRequired,
}

export default TodoItem;