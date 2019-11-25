import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import ToDoItem from './components/ToDoItem.js'
import todoData from './todoData.js'

class  App extends React.Component {

  constructor(){
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(id){
    
    this.setState(prevState =>{
        const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === id){
            return {
                        ...todo,
                        completed: !todo.completed
                    }
          }
          return todo
        })

        return {
          todos: updatedTodos
        }
    })

  }




  render(){

    const data = this.state.todos.map(todo => <ToDoItem handleChange= {this.handleChange} key={todo.id} item={todo} />)
    return (


      <div className="container">
        <Header />
      <div className="todo-list">
        {data}
      </div>
    
      </div>
    )
  }
  
}

export default App;
