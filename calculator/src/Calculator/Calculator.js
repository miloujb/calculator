import React from "react";
import Screen from "./Components/Screen";
import Keypad from "./Components/Keypad/Keypad";

class Calculator extends React.Component {
  state = {
    formula: "",
    result: 0
  };
  render() {
    console.log(this.state);
    return (
      <main className="calculator">
        <Screen formula={this.state.formula} result={this.state.result} />
        <Keypad />
      </main>
    );
  }
}

export default Calculator;
