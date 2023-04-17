// Stateful components are also called class components. They are used for complex UI components that require internal state management.
// They are useful when you need to store data that can be changed and accessed throughout the component lifecycle.

StatelessSample.jsx;
import React, { Component } from "react";

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrue: false,
    };
  }

  handleClick = () => {
    this.setState({ isTrue: !this.state.isTrue });
  };

  render() {
    const { title } = this.props;
    const { isTrue } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>{isTrue ? "ON" : "OFF"}</p>
        <button onClick={this.handleClick}>Toggle</button>
      </div>
    );
  }
}

export default ToggleSwitch;

// The main difference between stateful and stateless 
// components is that stateful components have access to a 
// state object which allows them to store and manipulate 
// data over time, while stateless components do not have 
// access to a state object and rely solely on props passed 
// down from their parent component.