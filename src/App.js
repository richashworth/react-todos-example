import React, { Component } from 'react';
import './App.css';
import CreateTask from './create-task';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      tasks: []
    }
  };

  addTask = (task) => this.setState({todos: this.state.tasks.concat([task])});

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TODO List</h1>
        </header>
        {/* <TaskList /> */}
        {this.state.tasks}
        <CreateTask onEnterBtn={this.addTask}/>
      </div>
    );
  }
}

export default App;
