import React, { useState, useEffect } from 'react';
import './TodoCard.css';
import Todolist from '../ToDoList/TodoList';
import Todoform from '../ToDoForm/TodoForm';

const TodoCard = () => {
    const [userTodo , setUserTodo] = useState([])

    useEffect(() => {
        fetch('https://react-hooks-f3e6f-default-rtdb.firebaseio.com/Todos.json').then(
        response => response.json()
        ).then(
        responseData => {
            const loadedTodo = [];
            for(const key in responseData){
                loadedTodo.push({
                    id: key,
                    title: responseData[key].title,
                    description: responseData[key].description
                });
            }
            setUserTodo(loadedTodo);
        });
    },[]);
   
    const addTodoHandler = Todo => {
        fetch('https://react-hooks-f3e6f-default-rtdb.firebaseio.com/Todos.json',{
            method: 'POST',
            body: JSON.stringify(Todo),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            return response.json();
        }).then(responseData => {
            setUserTodo(prevTodo => [
                ...prevTodo,
                {id: responseData.name, ...Todo}
            ]);
        });
    };

    const removeTodoHandler = TodoId => {
        fetch(`https://react-hooks-f3e6f-default-rtdb.firebaseio.com/Todos/${TodoId}.json`,{
            method: 'DELETE'
        }).then(response => {
            setUserTodo(prevTodo => 
                prevTodo.filter(Todo => Todo.id !== TodoId)
            );
        });
    };
    
    return(
        <div className="TodoCard">
            <Todoform onAddTodo={addTodoHandler}/>
            <Todolist todolist={userTodo} onRemoveTodo={removeTodoHandler}/>
        </div>
    )
}

export default TodoCard;