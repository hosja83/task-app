//App.js

import "./styles/App.sass";
import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      task: {
        title: "",
        id: uniqid(),
      },
    };

    this.addTask = this.addTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  addTask(e) {
    e.preventDefault();
    //No need for this check??
    //if (this.state.task === "" || this.state.task === undefined) return;

    this.setState({
      tasks: [...this.state.tasks, this.state.task],
      task: {
        title: "",
        id: uniqid(),
      },
    });
  }

  updateTask(e) {
    e.preventDefault();
    this.setState({
      //should we use prevState??
      task: {
        title: e.target.value,
        id: this.state.task.id,
      },
    });
  }

  render() {
    const { tasks, task } = this.state;

    return (
      <div className="page">
        <h1 id="task-list-header">Task List</h1>
        <form>
          <label htmlFor="task-input">Enter Task: </label>
          <input
            onChange={this.updateTask}
            value={task.title}
            type="text"
            id="task-input">
          </input>
          <div className="button-container">
            <button onClick={this.addTask} type="submit">Create Task</button>
          </div>
        </form>
        <Overview taskList={tasks} />
      </div>
    );
  }
}

export default App;