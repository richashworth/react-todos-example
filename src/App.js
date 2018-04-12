import React, { Component } from 'react';
import './App.css';
import CreateTask from './create-task';
import TaskList from './task-list';
import {removeElemFromArr} from './utils';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      tasks: []
    }
  }

  addTask = (task) => {
    this.setState(
      {tasks: this.state.tasks.concat([task])}
    );
  }

  deleteTask = (task) => {
    this.setState({tasks: removeElemFromArr(task, this.state.tasks)});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TODO List</h1>
        </header>
        <TaskList tasks={this.state.tasks} onDeleteBtn={this.deleteTask}/>
        <CreateTask onEnterBtn={this.addTask}/>
      </div>
    );
  }
}

export default App;
