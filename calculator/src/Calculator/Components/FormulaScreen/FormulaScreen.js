import React from "react";

const FormulaScreen = props => {
  console.log(props);
  return (
    <div className="formula-screen">
      <div className="formula">{props.children}</div>
    </div>
  );
};

export default FormulaScreen;
