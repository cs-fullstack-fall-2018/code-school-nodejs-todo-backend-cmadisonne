import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    username: "Maddi",
                    todo: "live",
                    isDone: true
                },
                {
                    username: "Maddi",
                    todo: "love",
                    isDone: true
                }
            ]

        }

    }

    deleteByID (id) {
        console.log("Delete this ID: " + id);
        fetch('/api/todo',
            {
                method: "DELETE",
                body: JSON.stringify({"id": id}),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());

            }

    render() {

      // console.log(todoArray);

      fetch('/api/todos/mcoope')
          .then(data => data.json())
          .then(response => this.setState({data: response}));
      // {
      //    console.log(data);
      //    console.log(data.json());
      //    data.json();
      // });


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          {/*<TodoList arr={todoArray}/>*/}
          <TodoList arr={this.state.data} deleteFunction={this.deleteByID}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
