import { Component } from "react"
import { ToDoList } from "./ToDoList/ToDoList"
import initialToDos from '../todo.json'
import { Container } from "./App.styled"
import ToDoEditor from "./TodoEditor/TodoEditor"

export class App extends Component {

  state = {
    todos: initialToDos,
    filter: '',
  }

  toggleCompleted = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
       if (todo.id === todoId) {
        return {
          ...todo, 
          completed: !todo.completed
        }
      } 
      return todo;
      
      })
    }))
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  }

  addTodo = (text) => {
    const todo = {
      id: '',
      text,
      completed: false,
    }

    this.setState(({todos}) => ({
      todos: [todo,...todos]
    }))
  }



  render() {
    const {todos} = this.state
    // const visibleTodos = this.getVisibleTodos()


    return (
      <Container>
        <div>
          <p>Total: 0</p>
          <p>Completed: 0</p>
        </div>
        <ToDoEditor onSubmit={this.addTodo} />
        <ToDoList todos={todos} ondeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted} />
      </Container>
    )
  };
};