import { Component } from "react"
import { ToDoList } from "./ToDoList/ToDoList"
import todos from './../todo'

export class App extends Component {

  // state = {
  //   todos: initialTodos,
  //   filter: '',
  // }
  render() {
    return (
      <div>
        <ToDoList todos={todos} />
      </div>
    )
  };
};
{ }