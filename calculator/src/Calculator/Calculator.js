import React from "react";
import Screen from "./Components/Screen";
import Keypad from "./Components/Keypad/Keypad";

class Calculator extends React.Component {
  state = {
    formula: "",
    result: 0
  };

  onPress = event => {
    let formula = this.state.formula;
    const pressedButton = event.target.innerHTML;
    if (pressedButton === "AC") return this.clear();
  };

  clear() {
    this.setState({ formula: formula });
  }

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
