import React, { Component }  from 'react';
import './create-task.css';

class CreateTask extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentItem: ''
    };
  }

  onInputChange = (e) => {
    this.setState({currentItem: e.target.value});
  }

  handleSubmit= (e) => {
    e.preventDefault();
    this.props.onEnterBtn(this.state.currentItem);
    this.setState({currentItem: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.currentItem} onChange={this.onInputChange}/>
        <button>Submit</button>
      </form>
    );
  }
}

export default CreateTask;
