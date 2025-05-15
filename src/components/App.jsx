import { Component } from "react"
import { ToDoList } from "./ToDoList/ToDoList"
import initialToDos from '../todo.json'
import { Container } from "./App.styled"
import ToDoEditor from "./TodoEditor/TodoEditor"

import { nanoid } from 'nanoid'
import { Filter } from "./Filter/Filter"

export class App extends Component {

  state = {
    todos: [],
    filter: '',
  }

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos) {
      this.setState({ todos: todos })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }

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
      id: nanoid(),
      text,
      completed: false,
    }

    this.setState(({ todos }) => ({
      todos: [todo, ...todos]
    }))
  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  }

  getVisibleTodos = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.todos.filter(todo => todo.text.toLowerCase().includes(normalizedFilter))
  }





  render() {
    // const visibleTodos = this.getVisibleTodos()


    return (
      <Container>
        <div>
          <p>Total: 0</p>
          <p>Completed: 0</p>
        </div>
        <ToDoEditor onSubmit={this.addTodo} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ToDoList todos={this.getVisibleTodos()} ondeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted} />
      </Container>
    )
  };
};