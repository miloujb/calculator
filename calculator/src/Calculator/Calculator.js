import React from "react";
import Screen from "./Components/Screen";
import Keypad from "./Components/Keypad/Keypad";

class Calculator extends React.Component {
  state = {
    formula: "",
    result: 0
  };
  render() {
    return (
      <main className="calculator">
        <Screen formula={this.state.formula} result={this.state.formula} />
        <Keypad />
      </main>
    );
  }
}

export default Calculator;
