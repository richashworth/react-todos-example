import React, { Component } from 'react';
import './App.css';
import CreateTask from './create-task';
import TaskList from './task-list';

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
    var ts = this.state.tasks;
    let index = ts.indexOf(task);
    console.log('index= '+index);
    if(index > -1){
      ts.splice(index, 1);
      this.setState({tasks: ts});
    }
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
