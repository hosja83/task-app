//App.js

import "./App.css";
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
      <div>
        <form>
          <label htmlFor="task">Enter Task: </label>
          <input
            onChange={this.updateTask}
            value={task.title}
            type="text"
            id="task">
          </input>
          <button onClick={this.addTask} type="submit">Submit</button>
        </form>
        <h1 id="task-list">Task List</h1>
        <Overview taskList={tasks} />
      </div>
    );
  }
}

export default App;