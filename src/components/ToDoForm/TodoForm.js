import React , { useState } from 'react';
import './TodoForm.css';

const Todoform = React.memo(props => {
    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredDescription , setEnteredDescription] = useState('');

    const SubmitHandler = event =>{
        event.preventDefault();
        if(enteredTitle==='' && enteredDescription==='')
        {
            alert("Please Enter Both Title And Description")
        }
        else if(enteredTitle!=='' && enteredDescription==='')
        {
            alert("Please Enter Both Title And Description")
        }
        else if(enteredTitle==='' && enteredDescription!=='')
        {
            alert("Please Enter Both Title And Description")
        }
        else{
            props.onAddTodo({title: enteredTitle , description: enteredDescription})
        } 
    }

    const EnterPress = (event) => {
        if(event.keyCode === 13 && enteredDescription!=='' && enteredTitle!=='') 
        {
            props.onAddTodo({title: enteredTitle , description: enteredDescription})
        }
        else if(enteredTitle==='' && enteredDescription==='' && event.keyCode===13)
        {
            alert("Please Enter Both Title And Description")
        }
        else if(enteredTitle!=='' && enteredDescription==='' && event.keyCode===13)
        {
            alert("Please Enter Both Title And Description")
        }
        else if(enteredTitle==='' && enteredDescription!=='' && event.keyCode===13)
        {
            alert("Please Enter Both Title And Description")
        }
    }
    return(
        <div className="Wrapper">
            <form onSubmit={SubmitHandler}>
                <div className="form-control">
                    <label>Title</label>&nbsp;
                    <input
                        type='text'
                        id='title'
                        value={enteredTitle}
                        onChange = {event => {
                        setEnteredTitle(event.target.value)
                        }}
                    />&nbsp;
                </div>
                <div className="form-control">
                    <label>Description</label>
                    <textarea 
                        type='text'
                        id='description'
                        value={enteredDescription}
                        onKeyDown={EnterPress}
                        onChange={event => {
                        setEnteredDescription(event.target.value)
                    }}
                    />
                </div>
                <button type='submit' >ADD TODO</button>
            </form>
        </div>
    )
});

export default Todoform;