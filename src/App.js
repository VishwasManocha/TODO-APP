import React, { Component } from 'react';
import './App.css';
import TodoCard from './components/ToDoCard/TodoCard'
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoCard />
      </div>
    );
  }
  
}


export default App;
