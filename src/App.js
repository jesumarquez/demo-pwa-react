import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TodoForm from './components/TodoForm';
import Nav from './components/Nav';
import About from './components/About';

import logo from './logo.svg';
import { todos } from './todos.json'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div key={i} className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">{todo.priority}</span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.handleRemoveTodo.bind(this, i)}>Delete</button>
            </div>
          </div>
        </div>
      )
    });

    return (
      <Router>

        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={() =>
              <div className="container">
                <div className="row mt-4">
                  {todos}
                </div>
              </div> 
            } />
            <Route path="/create" exact render={(props) => 
              <TodoForm {...props} onAddTodo={this.handleAddTodo} /> } 
            />
            <Route path="/about" exact component={About} />
          </Switch>
          {/* <nav className="navbar navbar-dark bg-dark">
          <a href="#top" className="text-white">
          Tasks
          <span className="badge badge-pill badge-light ml-2">
          { this.state.todos.length }
          </span>
          </a>
          </nav>

          

          <div className="container">
            <div className="row mt-4">
              {todos}
            </div>
          </div>

          <img src={logo} className="App-logo" alt="logo" /> */}
        </div>

      </Router>
    );
  }
}
export default App;
