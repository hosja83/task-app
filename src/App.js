import './App.css';
import React, {Component} from 'react';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    }

    this.addTask = this.addTask.bind(this);
    this.updateValue = this.updateValue.bind(this);

    this.inputValue = React.createRef();
  }
  
  addTask(e) {
    e.preventDefault();
    if (this.state.value === "" || this.state.value === undefined) return;
    const arr = [...this.state.tasks, this.state.value];
    this.setState({tasks: arr});
    this.inputValue.value = "";
  }

  updateValue(e) {
    e.preventDefault();
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div>
        <label htmlFor="task">Enter Task: </label>
        <input onChange={this.updateValue} ref={ref => this.inputValue= ref} type="text" id="task"></input>
        <button onClick={this.addTask} id="submit">Submit</button>
        <h1 id="task-list">Task List</h1>
        <Overview taskList={this.state.tasks}/>
      </div>
    );
  }
}

export default App;