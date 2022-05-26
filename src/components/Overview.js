//Overview.js

import React from "react";

// Class Component
class Overview extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.taskList.map((t) => {
              if (t.title !== "" && t.title !== undefined)
                return <li key={t.id}>{t.title}</li>
              else 
                return null;
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