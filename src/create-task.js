import React, { Component }  from 'react';
import './create-task.css';

class CreateTask extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentItem: ' '
    };
  }

  // onEnterData = (e) => {
  //   e.preventDefault();
  //   this.setState({currentItem: e.target.value});
  // }

  handleSubmit = this.props.onEnterBtn(this.state.currentItem);

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value = {this.state.currentItem}/>
        <input type='submit' value='Submit'/>
      </form>
    );
  }
}

export default CreateTask;
