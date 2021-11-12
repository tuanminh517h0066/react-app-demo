import React, {Fragment, useState, useEffect} from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import axios from 'axios';

import {v4 as uuidv4 } from 'uuid';

function Todos() {
    
    

    const [todosState, setTodosState] = useState([]);

    useEffect(() => {
        const getTodos = async () => {
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
                // console.log(res.data);
                setTodosState(res.data)
            } catch(error) {
                console.log(error.message)
            }
        }
        getTodos()
    }, [])

    const allTodos = [];
    // const edit = '';

    const [editState, setEditState] = useState([]);



    for (let  todo of todosState ) {
        allTodos.push(<TodoItem key={todo.id} todoProps={todo} markCompleteFunc = {markComplete} deleteTodoFunc = {deleteTodo} showEditFunc = { showEdit }/>)
    }

    function markComplete(id) {
        const newTodos = todosState.map( 
            todo => {
                if (todo.id === id) todo.completed = !todo.completed;
                return todo;
            }
        )
        setTodosState(newTodos);
    }

    async function deleteTodo(id) {
        
        try {
            await axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
            const newTodos = todosState.filter(todo =>{
                return todo.id !== id
            })
            setTodosState(newTodos);
        } catch (error) {
            console.log(error.message)
        }
    }

    async function  addTodo(  title) {
        try {
            const res  = await axios.post('https://jsonplaceholder.typicode.com/todos',{
                title,
                completed: false,
            });
            console.log(res.data);
            const newTodos = [...todosState, res.data];
            setTodosState(newTodos);
        } catch (error) {
            console.log(error.message);
        }
        // setTodosState()
        
    }

    function showEdit(id) {
        const EditTodo = todosState.filter(todo =>{
            return todo.id === id
        })
        setEditState(EditTodo);
    }

    async function editTodo(id, title) {
        
        try {
            const data = { title: title };
            const res = await axios.put('https://jsonplaceholder.typicode.com/todos/'+id, data);
            const newTodos = todosState.map( 
                todo => {
                    if (todo.id === id) todo.title = title;
                    return todo;
                }
            )
            setTodosState(newTodos);
            console.log(res.data);

        } catch (error) {
            
        }
    }
    
  
    
    

    return (
        <Fragment>
            <AddTodo addTodofunc={addTodo}/>
            <EditTodo edit={editState[0]} editTodofunc={editTodo}/>
            
            <table className="table">
                <thead className="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                    {allTodos}  
                </tbody>
            </table>
        </Fragment>
    );
}

export default Todos;