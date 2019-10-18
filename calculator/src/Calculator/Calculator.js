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
    else if (
      (pressedButton >= "0" && pressedButton <= "9") ||
      pressedButton === "."
    )
      formula += pressedButton;
    else if (["+", "-", "*", "/", "%"].indexOf(pressedButton) !== -1)
      formula += " " + pressedButton + " ";
    // functionality for percentage
    /*
    else if (pressedButton === "%")
     */
    //functionality for plus minus
    /*
      else if (pressedButton === "+/-" && pressedButton.indexOf(pressedButton -1) !== [+, -, *, /, %, "AC"]) 
       Math.sign(pressedButton.indexOf(pressedButton -1))
      */ else if (
      pressedButton === "="
    ) {
      try {
        const evalResult = eval(formula);
        const result = Number.isInteger(evalResult)
          ? evalResult
          : evalResult.toFixed(2);
        this.setState({ result });
      } catch (error) {
        alert("That is not a valid mathematical equation. Please try again.");
      }
    } else {
      formula = formula.trim();
      formula = formula.substr(0, formula.length - 1);
    }
    this.setState({ formula: formula });
  };

  clear() {
    this.setState({ formula: "", result: 0 });
  }

  render() {
    console.log(this.state);
    return (
      <main className="calculator">
        <Screen formula={this.state.formula} result={this.state.result} />
        <Keypad onPress={this.onPress} />
      </main>
    );
  }
}

export default Calculator;
