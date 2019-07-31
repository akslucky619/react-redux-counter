import React from "react";
import { connect } from "react-redux";

import "./styles.css";

class App extends React.Component {
  handleIncrement = () => {
    this.props.dispatch({ type: "Increment" });
  };

  handleDecrement = () => {
    this.props.dispatch({ type: "Decrement" });
  };

  handleReset = () => {
    this.props.dispatch({ type: "Reset" });
  };
  render() {
    return (
      <>
        <h1>{this.props.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    count: state.count
  };
};
export default connect(mapStateToProps)(App);
