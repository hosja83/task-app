//Overview.js

import React from "react";

// Class Component
class Overview extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.taskList.map((task) => {
              return <li key={task.id}>{task.title}</li>
            })
          }
        </ul>
      </div>
    );
  };
}

/*
//Function Component
const Overview = (props) => {
  const { taskList } = props;

  return (
    <ul>
      {taskList.map((task) => {
        return <li key={task.id}>{task.title}</li>;
      })}
    </ul>
  );
};
*/

export default Overview;