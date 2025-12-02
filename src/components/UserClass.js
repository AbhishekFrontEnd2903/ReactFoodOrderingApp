import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { count, count2 } = this.state;
    return (
      <div>
        <hr />
        <h1>class based component</h1>
        <h1>Name: {this.props.name}</h1>
        <h2>Designation: Developer</h2>
        <h3>Mail: abhishek@gmail.com</h3>
        <h1>count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
        <h1>count2: {count2}</h1>
      </div>
    );
  }
}

export default UserClass;
