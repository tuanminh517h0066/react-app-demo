import React, { useState } from "react";
import PropTypes from "prop-types";


function EditTodo(props) {

    // const addTodo = props.addTodofunc;
    const data = props.edit;
    const editTodo = props.editTodofunc;

    
    const[editTitle, setEditTitle] = useState('')
    const[editCheck, setEditCheck] = useState('');
    
    if (typeof data !== 'undefined') {
        //setEditTitle('1');
        // setEditCheck(data.title);
    } 
    

    function changeTitle (event) {
        // console.log(event.target.value);
        
        setEditTitle(event.target.value);
    }

    function getTitle() {
        setEditTitle('check')
    }

    function editSingleTodo (event) {
        event.preventDefault();
        if (typeof data !== 'undefined') {
            if(editTitle !== '' ) {
                
                let id = data.id
                editTodo(id,editTitle);
                setEditTitle('')
            }
        } else {
            setEditTitle('Please choose your edit')
        }
    }

    return (
        
        <form onSubmit={editSingleTodo}>
            <div class="form-row">
                <h3>Sua</h3>
                <div className="col">
                
                <input type="text" name="title" value={ editTitle } className="form-control" placeholder="Sua viec" onChange={ changeTitle } />
                </div>
                <div className="col">
                <input type="submit" value="Sua" className="btn btn-primary"  />
                </div>
            </div>
        </form>
    )
}

//
// AddTodo.propTypes = {
//     // addTodofunc: PropTypes.func.isRequired,
// }

export default EditTodo;