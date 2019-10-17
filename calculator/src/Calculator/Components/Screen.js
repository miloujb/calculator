import React from "react";
import ResultScreen from "./ResultScreen/ResultScreen";
import FormulaScreen from "./FormulaScreen/FormulaScreen";

const Screen = props => {
  console.log(props);
  return (
    <div className="screen">
      <ResultScreen>{props.result}</ResultScreen>
      <FormulaScreen>{props.formula}</FormulaScreen>
    </div>
  );
};

export default Screen;
