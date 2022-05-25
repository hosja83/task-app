import React from "react";

class Overview extends React.Component {

  constructor(props) {
    super(props);

    this.list = this.list.bind(this);
  }

  list() {
    const list = this.props.items.map(item => <li>{item}</li>);
    return list;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.props.items) {
      this.render();
    }
  }
  
  render() {
    return(
      <div>
        <ul>
          {this.list}
        </ul>
      </div>
    )
  }
}

export default Overview;